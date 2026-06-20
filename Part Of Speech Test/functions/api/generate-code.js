export async function onRequestPost(context) {
  const { request, env } = context;
  try {
    const db = env.DB;
    const body = await request.json();
    const { accessCode } = body;

    // ตรวจสอบความปลอดภัยเบื้องต้น
    if (!accessCode) {
      return new Response(JSON.stringify({ error: "Missing code" }), { status: 400 });
    }

    // 1. บันทึกรหัสลับที่ Make.com สุ่มได้ เข้าไปในตาราง users
    const info = await db.prepare("INSERT INTO users (username) VALUES (?)").bind(accessCode).run();
    const newUserId = info.meta.last_row_id;

    // 2. เปิดสิทธิ์เริ่มต้นด่านเลเวล 1 ให้ไอดีนี้ทันที
    await db.prepare("INSERT INTO progress (user_id, level_id, highest_score, unlocked) VALUES (?, 'L1', 0, 1)")
      .bind(newUserId)
      .run();

    return new Response(JSON.stringify({ success: true, message: "Code saved to D1 successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
