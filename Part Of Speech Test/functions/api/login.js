export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const body = await request.json();
    const username = body.username ? body.username.trim() : "";

    // Validate username length and format
    if (!username || username.length < 3 || username.length > 20) {
      return new Response(JSON.stringify({ error: "ชื่อผู้ใช้ต้องมีความยาว 3 - 20 ตัวอักษร" }), {
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
      return new Response(JSON.stringify({ error: "ระบบไม่สามารถเชื่อมต่อฐานข้อมูล D1 ของ Cloudflare ได้ (กรุณาเช็ค D1 Bindings ใน Pages Settings)" }), {
        status: 500,
        headers: { "Content-Type": "application/json; charset=utf-8" }
      });
    }

    // Check if user exists
    let user = await db.prepare("SELECT * FROM users WHERE username = ?").bind(username).first();
    let isNewUser = false;

    if (!user) {
      // Create new user (Sign Up)
      const info = await db.prepare("INSERT INTO users (username) VALUES (?)").bind(username).run();
      const newUserId = info.meta.last_row_id;
      
      // Initialize Level 1 progress
      await db.prepare("INSERT INTO progress (user_id, level_id, highest_score, unlocked) VALUES (?, 'L1', 0, 1)")
        .bind(newUserId)
        .run();
        
      user = { id: newUserId, username };
      isNewUser = true;
    }

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
