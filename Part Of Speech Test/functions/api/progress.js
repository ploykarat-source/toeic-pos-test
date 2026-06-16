export async function onRequestGet(context) {
  try {
    const { request, env } = context;
    const url = new URL(request.url);
    const userIdStr = url.searchParams.get("userId");

    if (!userIdStr) {
      return new Response(JSON.stringify({ error: "ไม่พบข้อมูลรหัสผู้ใช้ (userId)" }), {
        status: 400,
        headers: { 
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }

    const userId = parseInt(userIdStr);
    const db = env.DB;
    if (!db) {
      return new Response(JSON.stringify({ error: "ไม่พบฐานข้อมูล D1" }), {
        status: 500,
        headers: { "Content-Type": "application/json; charset=utf-8" }
      });
    }

    // Query all progress records for the user
    const { results } = await db.prepare("SELECT level_id, highest_score, unlocked FROM progress WHERE user_id = ?")
      .bind(userId)
      .all();

    // Map database results to format used in app.js
    const progressMap = {};
    const unlockedLevels = ["L1"]; // L1 is unlocked by default

    // Initialize map
    progressMap["L1"] = null;
    progressMap["L2"] = null;
    progressMap["L3"] = null;
    progressMap["L4"] = null;
    progressMap["L5"] = null;

    results.forEach(row => {
      progressMap[row.level_id] = row.highest_score;
      if (row.unlocked === 1 && !unlockedLevels.includes(row.level_id)) {
        unlockedLevels.push(row.level_id);
      }
    });

    // Ensure correct unlock list based on scores (double check)
    const minScores = { L1: 14, L2: 14, L3: 14, L4: 14, L5: 14 };
    Object.keys(minScores).forEach(lvlId => {
      const score = progressMap[lvlId];
      if (score !== null && score >= minScores[lvlId]) {
        const nextNum = parseInt(lvlId.substring(1)) + 1;
        const nextId = `L${nextNum}`;
        if (minScores[nextId] !== undefined && !unlockedLevels.includes(nextId)) {
          unlockedLevels.push(nextId);
        }
      }
    });

    return new Response(JSON.stringify({ 
      success: true, 
      unlockedLevels, 
      levelScores: progressMap 
    }), {
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

export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const body = await request.json();
    
    const userId = parseInt(body.userId);
    const levelId = body.levelId;
    const score = parseInt(body.score);

    if (isNaN(userId) || !levelId || isNaN(score)) {
      return new Response(JSON.stringify({ error: "ข้อมูลอินพุตไม่ถูกต้อง" }), {
        status: 400,
        headers: { 
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }

    const db = env.DB;
    if (!db) {
      return new Response(JSON.stringify({ error: "ไม่พบฐานข้อมูล D1" }), {
        status: 500,
        headers: { "Content-Type": "application/json; charset=utf-8" }
      });
    }

    // 1. Insert or update score for current level
    // D1 SQL dialect supports standard SQLite syntax
    await db.prepare(`
      INSERT INTO progress (user_id, level_id, highest_score, unlocked) 
      VALUES (?, ?, ?, 1)
      ON CONFLICT(user_id, level_id) 
      DO UPDATE SET 
        highest_score = CASE WHEN ? > highest_score THEN ? ELSE highest_score END,
        unlocked = 1,
        updated_at = CURRENT_TIMESTAMP
    `).bind(userId, levelId, score, score, score).run();

    // 2. If score >= 14 (passed), unlock the next level
    const passed = score >= 14;
    const currentLevelNum = parseInt(levelId.substring(1));
    const nextLvlId = `L${currentLevelNum + 1}`;
    const nextLevelExists = currentLevelNum >= 1 && currentLevelNum < 5;

    if (passed && nextLevelExists) {
      await db.prepare(`
        INSERT INTO progress (user_id, level_id, highest_score, unlocked) 
        VALUES (?, ?, 0, 1)
        ON CONFLICT(user_id, level_id) 
        DO UPDATE SET 
          unlocked = 1,
          updated_at = CURRENT_TIMESTAMP
      `).bind(userId, nextLvlId).run();
    }

    return new Response(JSON.stringify({ success: true, passed, nextLevelUnlocked: (passed && nextLevelExists) }), {
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
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400"
    }
  });
}
