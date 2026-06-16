-- Create Users table
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create Progress table to store scores and unlock states
CREATE TABLE IF NOT EXISTS progress (
    user_id INTEGER NOT NULL,
    level_id TEXT NOT NULL,
    highest_score INTEGER NOT NULL,
    unlocked INTEGER DEFAULT 0, -- 0 = locked, 1 = unlocked
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, level_id),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

-- Create index for faster progress lookup by user
CREATE INDEX IF NOT EXISTS idx_progress_user ON progress(user_id);
