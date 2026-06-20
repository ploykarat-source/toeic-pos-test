export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const body = await request.json();
    const username = body.username ? body.username.trim() : "";

    // ล็อกความยาวให้ยืดหยุ่นขึ้น เพื่อรองรับรหัสลับสุ่มที่ยาวหรือสั้นได้ดี (เช่น 3 - 30 ตัวอักษร)
    if (!username || username.length < 3 || username.length > 30) {
      return new Response(JSON.stringify({ error: "รหัสเข้าใช้งานไม่ถูกต้อง" }), {
        status: 400,
        headers: { 
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }

    // Check D1 Binding
    const db = env.DB;
    if (!db) {
      return new Response(JSON.stringify({ error: "ระบบไม่สามารถเชื่อมต่อฐานข้อมูล D1 ได้" }), {
        status: 500,
        headers: { "Content-Type": "application/json; charset=utf-8" }
      });
    }

    // ค้นหารหัสลับ (username) ในตาราง users
    let user = await db.prepare("SELECT * FROM users WHERE username = ?").bind(username).first();

    // ถ้าไม่เจอรหัสนี้ในฐานข้อมูล (แปลว่ารหัสผิด หรือ ยังไม่ได้จ่ายเงิน) ให้ส่งข้อความปฏิเสธกลับไปทันที
    if (!user) {
      return new Response(JSON.stringify({ error: "รหัสเข้าใช้งานไม่ถูกต้อง หรือ ยังไม่ได้เปิดสิทธิ์ชำระเงิน" }), {
        status: 400,
        headers: { 
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }

    // เช็กต่อว่า รหัสนี้พึ่งเคยเข้าครั้งแรกใช่ไหม โดยดูว่ามีประวัติในตาราง progress หรือยัง
    const progressCheck = await db.prepare("SELECT * FROM progress WHERE user_id = ?").bind(user.id).first();
    let isNewUser = false;

    if (!progressCheck) {
      // ถ้าเป็นรหัสซื้อใหม่ที่ยังไม่มีประวัติควิซ ให้เริ่มทำการเปิดระบบปลดล็อกเลเวล 1 อัตโนมัติ (สเต็ปเริ่มต้นค่าสะอาด)
      await db.prepare("INSERT INTO progress (user_id, level_id, highest_score, unlocked) VALUES (?, 'L1', 0, 1)")
        .bind(user.id)
        .run();
      isNewUser = true;
    }

    // ผ่านฉลุย พาเข้าสู่ระบบแดชบอร์ดบทเรียน
    return new Response(JSON.stringify({ success: true, user, isNew: isNewUser }), {
      headers: { 
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json; charset=utf-8" }
    });
  }
}

// Handle CORS Options pre-flight request
export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400"
    }
  });
}
