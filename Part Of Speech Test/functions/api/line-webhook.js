export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    // 1. ดึงค่าคอนฟิกความปลอดภัยจาก Environment Variables ของ Cloudflare
    const LINE_ACCESS_TOKEN = env.LINE_CHANNEL_ACCESS_TOKEN;
    const SLIPOK_KEY = env.SLIPOK_API_KEY;
    const EXPECTED_PRICE = parseFloat(env.EXPECTED_AMOUNT || "59");
    const db = env.DB;

    // 2. แกะข้อมูลพัสดุ (Webhook Event) ที่ส่งมาจาก LINE
    const bodyText = await request.text();
    const data = JSON.parse(bodyText);

    if (!data.events || data.events.length === 0) {
      return new Response("No events", { status: 200 });
    }

    const event = data.events[0];
    const replyToken = event.replyToken;

    // ระบบจะสนใจเฉพาะกรณีที่ลูกค้า "ส่งรูปภาพ (Image)" เข้ามาใน LINE OA เท่านั้น
    if (event.type === "message" && event.message.type === "image") {
      const messageId = event.message.id;

           // แจ้งลูกค้าล่วงหน้าว่ากำลังตรวจสอบสลิปเพื่อไม่ให้ลูกค้ารออย่างกังวล (อัปเดตระบบล็อกส่งสลับข้อความ)
      await sendLineReply(LINE_ACCESS_TOKEN, replyToken, "ได้รับรูปภาพแล้วครับ 🤖 ระบบ AI กำลังตรวจสอบสลิปการโอนเงินของท่าน กรุณารอสักครู่...");

      // 3. ไปดาวน์โหลดไฟล์รูปภาพสลิปมาจากเซิร์ฟเวอร์ของ LINE (เวอร์ชันอัปเดตสิทธิ์ใหม่ผ่านฉลุย)
      const lineMediaUrl = `https://line.me{messageId}/content`;
      const lineResponse = await fetch(lineMediaUrl, {
        method: "GET",
        headers: { 
          "Authorization": `Bearer ${LINE_ACCESS_TOKEN}`,
          "User-Agent": "CloudflarePagesFunction"
        }
      });

      if (!lineResponse.ok) {
        const errText = await lineResponse.text();
        await sendLinePush(LINE_ACCESS_TOKEN, event.source.userId, `❌ ระบบขัดข้อง: ดึงรูปภาพจาก LINE ไม่สำเร็จ (Status: ${lineResponse.status})`);
        throw new Error(`ดาวน์โหลดรูปภาพจาก LINE ไม่สำเร็จ: ${errText}`);
      }

      // แปลงไฟล์รูปภาพให้เป็น ArrayBuffer เพื่อส่งต่อเข้าถังประมวลผล AI ได้อย่างสมบูรณ์
      const imageBuffer = await lineResponse.arrayBuffer();
      const imageBlob = new Blob([imageBuffer], { type: "image/jpeg" });



      // 4. ส่งไฟล์รูปภาพนี้ต่อไปให้ AI ของ SlipOK ตรวจสอบความถูกต้อง
      const formData = new FormData();
      formData.append("files", imageBlob, "slip.jpg");

      const slipOkResponse = await fetch("https://slipok.com", {
        method: "POST",
        headers: { "x-authorization": SLIPOK_KEY },
        body: formData
      });

      if (!slipOkResponse.ok) {
        throw new Error("ไม่สามารถติดต่อบริการตรวจสลิป SlipOK ได้");
      }

      const slipResult = await slipOkResponse.json();

      // 5. ตรวจสอบผลลัพธ์ของสลิปจาก AI
      if (slipResult.success && slipResult.data) {
        const slipData = slipResult.data;
        const amount = slipData.amount; // ยอดเงินที่โอนจริงในสลิป

        // ตรวจเช็กว่ายอดเงินโอนตรงตามราคาที่ตั้งไว้หรือไม่
        if (amount >= EXPECTED_PRICE) {
          
          // 💡 สเต็ปเด็ด: สุ่มรหัสลับขึ้นมา 8 หลัก (ภาษาอังกฤษผสมตัวเลข)
          const accessCode = "TC-" + Math.random().toString(36).substring(2, 10).toUpperCase();

          // บันทึกรหัสลับที่สุ่มได้นี้เข้าไปรอไว้ในคอลัมน์ username ของตาราง users ใน D1 Database ของคุณ
          const info = await db.prepare("INSERT INTO users (username) VALUES (?)").bind(accessCode).run();
          const newUserId = info.meta.last_row_id;

          // เปิดสิทธิ์เริ่มต้นด่านเลเวล 1 ให้ไอดีนี้พร้อมเรียนทันที
          await db.prepare("INSERT INTO progress (user_id, level_id, highest_score, unlocked) VALUES (?, 'L1', 0, 1)")
            .bind(newUserId)
            .run();

          // ส่งรหัสลับสุ่มกลับไปตอบลูกค้าทาง LINE ทันที
          const successMessage = `✅ ชำระเงินสำเร็จเรียบร้อยครับ!\n\n🤖 ระบบตรวจสอบยอดเงินโอนจำนวน ${amount} บาท ถูกต้องตรงระบบ\n\n🔑 นี่คือรหัสเข้าใช้งานส่วนตัวของคุณ:\n👉 ${accessCode}\n\n🌐 สามารถนำรหัสนี้ไปล็อกอินเข้าเรียนทำข้อสอบได้ทันทีที่:\ntoeic-pos-mastery.pages.dev`;
          await sendLinePush(LINE_ACCESS_TOKEN, event.source.userId, successMessage);

        } else {
          // กรณีโอนเงินมาไม่ครบจำนวน
          const wrongAmountMsg = `❌ ตรวจสอบสลิปไม่ผ่าน: ยอดเงินโอนในสลิปคือ ${amount} บาท ซึ่งไม่ครบตามจำนวน ${EXPECTED_PRICE} บาท กรุณาติดต่อแอดมินเพื่อตรวจสอบเพิ่มเติมครับ`;
          await sendLinePush(LINE_ACCESS_TOKEN, event.source.userId, wrongAmountMsg);
        }
      } else {
        // กรณีรูปภาพที่ส่งมาไม่ใช่สลิปโอนเงิน หรือ QR Code บนสลิปไม่ถูกต้อง
        const invalidSlipMsg = "❌ ตรวจสอบไม่ผ่าน: รูปภาพนี้ไม่ใช่สลิปโอนเงินธนาคารที่ถูกต้อง หรือระบบไม่สามารถสแกน QR Code บนสลิปได้ กรุณาส่งสลิปโอนเงินที่มี QR Code ชัดเจนใหม่อีกครั้งครับ";
        await sendLinePush(LINE_ACCESS_TOKEN, event.source.userId, invalidSlipMsg);
      }
    }

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error("Webhook Error:", err);
    return new Response(err.message, { status: 500 });
  }
}

// 📦 ฟังก์ชันเสริมสำหรับใช้ยิงตอบกลับ LINE (Reply Message)
async function sendLineReply(token, replyToken, text) {
  await fetch("https://line.me", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      replyToken: replyToken,
      messages: [{ type: "text", text: text }]
    })
  });
}

// 📦 ฟังก์ชันเสริมสำหรับยิงข้อความดันกลับหาผู้ใช้เจาะจง (Push Message)
async function sendLinePush(token, toUserId, text) {
  await fetch("https://line.me", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      to: toUserId,
      messages: [{ type: "text", text: text }]
    })
  });
}
