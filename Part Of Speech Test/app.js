// Curated YouTube Videos Database
const VIDEOS_DB = [
  {
    id: "v1",
    youtubeId: "JcO_n2XG-O4",
    title: "Part of Speech ทั้ง 8 ชนิด สรุปครบใน 1 คลิป พื้นฐาน Grammar TOEIC | EP.1",
    channel: "Memmoread Channel",
    duration: "24:15",
    description: "สรุปโครงสร้างลักษณะคำ (Part of Speech) ทั้ง 8 ชนิดอย่างละเอียดเข้าใจง่าย พร้อมเทคนิคการสังเกต Suffixes ของแต่ละประเภทคำเพื่อเอาตัวรอดในการทำข้อสอบ TOEIC และ Exit Exam อย่างมีประสิทธิภาพ",
    learnings: [
      "สรุปความแตกต่างของ Part of Speech ทั้ง 8 ชนิด",
      "เทคนิคการจำและสังเกต Suffixes (Noun, Verb, Adj, Adv)",
      "ตัวอย่างประโยคข้อสอบจริงและการจัดตำแหน่งคำในพาร์ท 5"
    ]
  },
  {
    id: "v2",
    youtubeId: "7z-4wK_aF2M",
    title: "ติวฟรี Part of Speech สำหรับ Exit Exam / TOEIC ปูพื้นฐานไวยากรณ์สำคัญ",
    channel: "KruN'Folk Fabulous",
    duration: "45:12",
    description: "ติวไวยากรณ์และลักษณะของคำขั้นพื้นฐานไปจนถึงระดับกลาง เจาะลึกโครงสร้างประธาน กริยา กรรม และส่วนขยาย เหมาะสมที่สุดสำหรับผู้ที่ต้องการฟื้นฟูพื้นฐานก่อนเริ่มตะลุยข้อสอบ TOEIC พาร์ทอ่าน",
    learnings: [
      "การจำแนกคำนามนับได้ นับไม่ได้ และคำบอกปริมาณ (Determiners)",
      "ตำแหน่งการขยายคำกริยาด้วย Adverb ในรูปแบบต่างๆ",
      "แบบฝึกหัดวัดความเข้าใจท้ายบทเรียนพร้อมอธิบายโครงสร้าง"
    ]
  },
  {
    id: "v3",
    youtubeId: "k5yv7J_uB84",
    title: "เทคนิคจำสูตร Parts of Speech และตำแหน่งคำเพื่อใช้อัพคะแนนพาร์ท Grammar",
    channel: "ครูหวาน: English On Air",
    duration: "18:42",
    description: "สอนทริคลัดในการจดจำสูตรโครงสร้างและตำแหน่งของคำแต่ละประเภทเพื่อช่วยลดเวลาในการทำข้อสอบ ให้สามารถกวาดสายตาตอบได้ทันทีโดยไม่ต้องแปลโจทย์ภาษาอังกฤษทั้งหมด",
    learnings: [
      "สูตรท่องจำตำแหน่ง Adjective หน้าคำนามและหลัง Linking Verb",
      "กฎข้อห้ามและตำแหน่งที่ Adverb ห้ามนำไปวางในประโยค",
      "เทคนิคการตัดตัวเลือกชอยส์ลวงเพื่อเพิ่มความถูกต้องในการทำสอบ"
    ]
  },
  {
    id: "v4",
    youtubeId: "oV8527a4d5A",
    title: "TOEIC HACK!! ปูพื้นฐานเรื่องลักษณะคำ (Part of Speech) และการวิเคราะห์คำถาม",
    channel: "XChange English",
    duration: "21:30",
    description: "คลิปเจาะเทคนิค TOEIC Hack ปูพื้นฐานสำหรับข้อสอบพาร์ท 5 และ 6 โดยเน้นความสำคัญของการรู้จักลักษณะประเภทของคำ (Word Forms) ในการวิเคราะห์หาคำตอบในชอยส์ตัวเลือกอย่างรวดเร็ว",
    learnings: [
      "วิธีการทำโจทย์เรื่อง Word Form ในข้อสอบ TOEIC Part 5",
      "การระบุประเภทของคำจากโครงสร้างแวดล้อมรอบๆ ช่องว่าง",
      "ตัวอย่างข้อสอบและทริคการเดาคำตอบเมื่อเจอศัพท์ยาก"
    ]
  }
];

// App Configurations & Level definitions
const LEVELS = {
  L1: { name: "Level 1: A1-A2 (Beginner)", desc: "พื้นฐาน Part of Speech: Suffix ทั่วไปและไวยากรณ์โครงสร้างประโยคระดับต้น", minScore: 14 },
  L2: { name: "Level 2: B1 (Intermediate)", desc: "ระดับปานกลาง: Suffix ซับซ้อนขึ้น, ตำแหน่ง Adverb, Comparative และ Pronoun", minScore: 14 },
  L3: { name: "Level 3: B2 (Upper-Intermediate)", desc: "ระดับก้าวหน้า: Linking Verb, Participial Adjective, Noun Phrase และคำเชื่อมทั่วไป", minScore: 14 },
  L4: { name: "Level 4: C1 (Advanced)", desc: "ระดับสูง: Compound Noun, Participle Clause, Adverbial Clause และการเปลี่ยนโครงสร้าง", minScore: 14 },
  L5: { name: "Level 5: C2 (Expert)", desc: "ระดับผู้เชี่ยวชาญ: โครงสร้างซับซ้อนพิเศษ, Noun vs Gerund, Inversion และคำศัพท์เฉพาะทาง", minScore: 14 }
};

// Application State
let state = {
  currentTab: "auth", // Default tab is now auth/login
  theme: "dark",
  user: null, // Stores logged in user data { id, username }
  userProgress: {
    unlockedLevels: ["L1"], 
    levelScores: { L1: null, L2: null, L3: null, L4: null, L5: null }
  },
  activeQuiz: {
    levelId: null,
    currentQuestionIndex: 0,
    userAnswers: [], 
    flaggedQuestions: [], 
    timeRemaining: 1200, 
    timerIntervalId: null
  }
};

// --- DOM ELEMENTS ---
const dom = {
  navTabs: document.querySelectorAll(".nav-tab"),
  sections: document.querySelectorAll(".content-section"),
  themeToggleBtn: document.getElementById("btn-theme-toggle"),
  levelsContainer: document.getElementById("levels-container"),
  overallProgressBar: document.getElementById("overall-progress-bar"),
  overallPercentageText: document.getElementById("overall-percentage-text"),
  progressDesc: document.getElementById("progress-desc"),
  statTestsCompleted: document.getElementById("stat-tests-completed"),
  statAccuracy: document.getElementById("stat-accuracy"),
  
  // Auth Elements
  authForm: document.getElementById("auth-form"),
  usernameInput: document.getElementById("username-input"),
  authErrorMsg: document.getElementById("auth-error-msg"),
  btnAuthSubmit: document.getElementById("btn-auth-submit"),
  userProfilePanel: document.getElementById("user-profile-panel"),
  userDisplayName: document.getElementById("user-display-name"),
  btnLogout: document.getElementById("btn-logout"),
  mainNav: document.getElementById("main-nav"),
  
  // Study Guide
  guideTabBtns: document.querySelectorAll(".guide-tab-btn"),
  guideTabContents: document.querySelectorAll(".guide-tab-content"),
  
  // YouTube Hub
  videosContainer: document.getElementById("videos-container"),
  videoSearchInput: document.getElementById("video-search-input"),
  youtubeModal: document.getElementById("youtube-modal"),
  youtubePlayerContainer: document.getElementById("youtube-player-container"),
  modalVideoTitle: document.getElementById("modal-video-title"),
  modalVideoDesc: document.getElementById("modal-video-desc"),
  btnCloseModal: document.getElementById("btn-close-modal"),
  
  // Quiz
  quizLevelTitle: document.getElementById("quiz-level-title"),
  quizLevelDesc: document.getElementById("quiz-level-desc"),
  quizQuestionText: document.getElementById("quiz-question-text"),
  quizOptionsContainer: document.getElementById("quiz-options-container"),
  quizProgressFill: document.getElementById("quiz-progress-fill"),
  progressNumerical: document.getElementById("progress-numerical"),
  btnQuizPrev: document.getElementById("btn-quiz-prev"),
  btnQuizNext: document.getElementById("btn-quiz-next"),
  btnQuizSubmit: document.getElementById("btn-quiz-submit"),
  btnFlagQuestion: document.getElementById("btn-flag-question"),
  quizJumpButtons: document.getElementById("quiz-jump-buttons"),
  timerText: document.getElementById("timer-text"),
  quizTimerDisplay: document.getElementById("quiz-timer-display"),
  
  // Results
  resultsBadge: document.getElementById("results-badge"),
  resultsScoreText: document.getElementById("results-score-text"),
  resultsPercentText: document.getElementById("results-percent-text"),
  resultsMessageTitle: document.getElementById("results-message-title"),
  resultsMessageDesc: document.getElementById("results-message-desc"),
  btnResultsNextLevel: document.getElementById("btn-results-next-level"),
  btnResultsRetry: document.getElementById("btn-results-retry"),
  btnResultsDashboard: document.getElementById("btn-results-dashboard"),
  reviewQuestionsContainer: document.getElementById("review-questions-container"),
  reviewFilterBtns: document.querySelectorAll(".review-filter-btn")
};

// --- INITIALIZATION ---
window.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initAuth();
  setupEventListeners();
  renderVideos(VIDEOS_DB);
  animateCharts();
});

// --- THEME MANAGEMENT ---
function initTheme() {
  const savedTheme = localStorage.getItem("toeic_pos_theme") || "dark";
  state.theme = savedTheme;
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon();
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", state.theme);
  localStorage.setItem("toeic_pos_theme", state.theme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const icon = dom.themeToggleBtn.querySelector("i");
  if (state.theme === "dark") {
    icon.className = "fa-solid fa-sun";
  } else {
    icon.className = "fa-solid fa-moon";
  }
}

// --- AUTHENTICATION INIT ---
function initAuth() {
  const savedUser = localStorage.getItem("toeic_pos_user");
  if (savedUser) {
    try {
      state.user = JSON.parse(savedUser);
      dom.userDisplayName.innerText = state.user.username;
      dom.userProfilePanel.style.display = "flex";
      dom.mainNav.style.display = "flex";
      loadUserProgress();
      switchTab("dashboard");
    } catch (e) {
      localStorage.removeItem("toeic_pos_user");
      showLoginScreen();
    }
  } else {
    showLoginScreen();
  }
}

function showLoginScreen() {
  state.user = null;
  dom.userProfilePanel.style.display = "none";
  dom.mainNav.style.display = "none";
  switchTab("auth");
}

// --- USER PROGRESS SYNC ---
async function loadUserProgress() {
  if (!state.user) return;
  
  try {
    const response = await fetch(`/api/progress?userId=${state.user.id}`);
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        state.userProgress.unlockedLevels = data.unlockedLevels;
        state.userProgress.levelScores = data.levelScores;
        renderDashboard();
      }
    }
  } catch (e) {
    console.error("Error loading progress from database, falling back to local cache", e);
    // Fallback to local storage if API is offline
    const cached = localStorage.getItem(`toeic_pos_progress_${state.user.id}`);
    if (cached) {
      state.userProgress = JSON.parse(cached);
      renderDashboard();
    }
  }
}

function saveUserProgressLocally() {
  if (state.user) {
    localStorage.setItem(`toeic_pos_progress_${state.user.id}`, JSON.stringify(state.userProgress));
  }
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
  // Authentication Submit
  dom.authForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = dom.usernameInput.value.trim();
    if (!username) return;
    
    dom.btnAuthSubmit.disabled = true;
    dom.btnAuthSubmit.querySelector("span").innerText = "กำลังเข้าสู่ระบบ...";
    dom.authErrorMsg.style.display = "none";
    
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username })
      });
      
      const data = await response.json();
      if (response.ok && data.success) {
        state.user = data.user;
        localStorage.setItem("toeic_pos_user", JSON.stringify(data.user));
        dom.userDisplayName.innerText = data.user.username;
        dom.userProfilePanel.style.display = "flex";
        dom.mainNav.style.display = "flex";
        dom.usernameInput.value = "";
        
        await loadUserProgress();
        switchTab("dashboard");
      } else {
        dom.authErrorMsg.innerText = data.error || "ไม่สามารถเชื่อมต่อระบบได้";
        dom.authErrorMsg.style.display = "block";
      }
    } catch (err) {
      dom.authErrorMsg.innerText = "เกิดข้อผิดพลาดในการเชื่อมต่อเซิร์ฟเวอร์";
      dom.authErrorMsg.style.display = "block";
      console.error(err);
    } finally {
      dom.btnAuthSubmit.disabled = false;
      dom.btnAuthSubmit.querySelector("span").innerText = "เข้าสู่ระบบ / เริ่มต้นใช้งาน";
    }
  });

  // Logout Button
  dom.btnLogout.addEventListener("click", () => {
    if (confirm("คุณต้องการออกจากระบบใช่หรือไม่?")) {
      localStorage.removeItem("toeic_pos_user");
      showLoginScreen();
    }
  });

  // Navigation Tabs
  dom.navTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Prevent exiting active quiz without warning
      if (state.currentTab === "quiz") {
        if (!confirm("คุณต้องการยกเลิกการทำแบบทดสอบหรือไม่? คะแนนในรอบนี้จะไม่ถูกบันทึก")) {
          return;
        }
        clearInterval(state.activeQuiz.timerIntervalId);
      }
      
      const target = tab.getAttribute("data-target");
      switchTab(target);
    });
  });

  // Theme Toggle Button
  dom.themeToggleBtn.addEventListener("click", toggleTheme);

  // Study Guide Sub-tabs
  dom.guideTabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");
      
      // Update buttons active class
      dom.guideTabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      // Update contents active class
      dom.guideTabContents.forEach(c => c.classList.remove("active"));
      document.getElementById(`tab-${tabId}`).classList.add("active");
    });
  });

  // YouTube Hub Search
  dom.videoSearchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    const filtered = VIDEOS_DB.filter(v => 
      v.title.toLowerCase().includes(query) || 
      v.channel.toLowerCase().includes(query) || 
      v.description.toLowerCase().includes(query)
    );
    renderVideos(filtered);
  });

  // Close YouTube Modal
  dom.btnCloseModal.addEventListener("click", closeVideoModal);
  dom.youtubeModal.addEventListener("click", (e) => {
    if (e.target === dom.youtubeModal) closeVideoModal();
  });

  // Quiz Navigation Buttons
  dom.btnQuizPrev.addEventListener("click", () => navigateQuestion(-1));
  dom.btnQuizNext.addEventListener("click", () => navigateQuestion(1));
  dom.btnQuizSubmit.addEventListener("click", submitQuiz);
  
  // Flag Question Button
  dom.btnFlagQuestion.addEventListener("click", () => {
    const qIndex = state.activeQuiz.currentQuestionIndex;
    state.activeQuiz.flaggedQuestions[qIndex] = !state.activeQuiz.flaggedQuestions[qIndex];
    updateQuizUI();
  });

  // Results Actions
  dom.btnResultsDashboard.addEventListener("click", () => {
    switchTab("dashboard");
  });
  dom.btnResultsRetry.addEventListener("click", () => {
    startLevel(state.activeQuiz.levelId);
  });
  dom.btnResultsNextLevel.addEventListener("click", () => {
    const currentId = state.activeQuiz.levelId;
    const currentNum = parseInt(currentId.substring(1));
    const nextId = `L${currentNum + 1}`;
    if (LEVELS[nextId]) {
      startLevel(nextId);
    } else {
      switchTab("dashboard");
    }
  });

  // Review Filters
  dom.reviewFilterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      dom.reviewFilterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      filterReviewQuestions(filter);
    });
  });
}

// --- NAVIGATION LOGIC ---
function switchTab(tabId) {
  state.currentTab = tabId;
  
  // Update header navigation active tab
  dom.navTabs.forEach(tab => {
    if (tab.getAttribute("data-target") === tabId) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  // Update content section visibility
  dom.sections.forEach(section => {
    if (section.id === tabId) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });

  // Trigger animations on specific sections
  if (tabId === "dashboard") {
    renderDashboard();
    animateCharts();
  }
  
  // Scroll to top of window
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// --- DASHBOARD RENDERER ---
function renderDashboard() {
  dom.levelsContainer.innerHTML = "";
  
  // 1. Render Level Cards
  Object.keys(LEVELS).forEach((lvlId, index) => {
    const level = LEVELS[lvlId];
    const isUnlocked = state.userProgress.unlockedLevels.includes(lvlId);
    const score = state.userProgress.levelScores[lvlId];
    const isPassed = score !== null && score >= level.minScore;
    
    // Status Classes
    let statusClass = "locked";
    let statusLabel = "ล็อกอยู่";
    let badgeClass = "";
    
    if (isPassed) {
      statusClass = "passed";
      statusLabel = `ผ่านแล้ว (${score}/20)`;
      badgeClass = "passed";
    } else if (isUnlocked) {
      statusClass = "unlocked";
      statusLabel = score !== null ? `ยังไม่ผ่าน (${score}/20)` : "พร้อมทดสอบ";
      badgeClass = "unlocked";
    }
    
    const card = document.createElement("div");
    card.className = `level-card ${statusClass}`;
    card.innerHTML = `
      <div class="level-badge ${badgeClass}">
        <span class="lbl">LVL</span>
        <span class="num">${index + 1}</span>
      </div>
      <div class="level-info">
        <h3>${level.name}</h3>
        <p>${level.desc}</p>
      </div>
      <span class="level-status-tag">${statusLabel}</span>
      <button class="btn-start-level" ${isUnlocked ? "" : "disabled"} data-level="${lvlId}">
        <i class="fa-solid ${isPassed ? "fa-rotate-left" : "fa-play"}"></i> 
        <span>${isPassed ? "ทำใหม่" : (score !== null ? "แก้มือ" : "เริ่มทำ")}</span>
      </button>
    `;
    
    // Attach listener to start level button
    card.querySelector(".btn-start-level").addEventListener("click", () => {
      startLevel(lvlId);
    });
    
    dom.levelsContainer.appendChild(card);
  });

  // 2. Calculate Stats
  let totalAttempted = 0;
  let totalPassed = 0;
  let totalCorrect = 0;
  let scoreSum = 0;
  
  Object.keys(LEVELS).forEach(lvlId => {
    const score = state.userProgress.levelScores[lvlId];
    if (score !== null) {
      totalAttempted++;
      totalCorrect += score;
      scoreSum += score;
      if (score >= LEVELS[lvlId].minScore) {
        totalPassed++;
      }
    }
  });

  const accuracy = totalAttempted > 0 ? Math.round((totalCorrect / (totalAttempted * 20)) * 100) : 0;
  
  // Update UI Stats text
  dom.statTestsCompleted.innerText = `${totalPassed}/5`;
  dom.statAccuracy.innerText = `${accuracy}%`;
  
  // 3. Render Circular Progress
  // Total questions is 100 (5 levels * 20 questions)
  // Overall progress is totalCorrect / 100
  const progressPercent = totalCorrect; // since total is 100, percent = count
  dom.overallPercentageText.innerText = `${progressPercent}%`;
  dom.progressDesc.innerText = `ตอบถูก ${totalCorrect} จากทั้งหมด 100 ข้อ`;
  
  // SVG Stroke-dashoffset animation
  // Circumference = 2 * pi * r = 2 * 3.14159 * 65 = 408.4
  const circumference = 408;
  const offset = circumference - (progressPercent / 100) * circumference;
  dom.overallProgressBar.style.strokeDashoffset = offset;
}

// Animate dashboard charts
function animateCharts() {
  setTimeout(() => {
    document.getElementById("chart-bar-pos").classList.add("animate");
    document.getElementById("chart-bar-verb").classList.add("animate");
    document.getElementById("chart-bar-vocab").classList.add("animate");
  }, 100);
}

// --- YOUTUBE HUB RENDERER ---
function renderVideos(videos) {
  dom.videosContainer.innerHTML = "";
  
  if (videos.length === 0) {
    dom.videosContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-secondary);">
        <i class="fa-solid fa-video-slash" style="font-size: 3rem; margin-bottom: 1rem; color: var(--text-muted);"></i>
        <p>ไม่พบวิดีโอติวที่ตรงกับคำค้นหาของคุณ</p>
      </div>
    `;
    return;
  }

  videos.forEach(video => {
    const card = document.createElement("div");
    card.className = "video-card";
    
    // Create bullet list
    const bulletsHtml = video.learnings.map(l => `<li>${l}</li>`).join("");
    
    card.innerHTML = `
      <div class="video-thumbnail-wrapper" data-youtube-id="${video.youtubeId}">
        <img class="video-thumbnail" src="https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg" alt="${video.title}">
        <div class="play-overlay">
          <i class="fa-solid fa-play"></i>
        </div>
        <span class="video-duration">${video.duration}</span>
      </div>
      <div class="video-content">
        <h3 class="video-title" title="${video.title}">${video.title}</h3>
        <div class="video-meta" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
          <span><i class="fa-solid fa-user"></i> ${video.channel}</span>
          <a href="https://www.youtube.com/watch?v=${video.youtubeId}" target="_blank" class="yt-direct-link" style="color: #ef4444; font-weight: 600; text-decoration: none; font-size: 0.8rem; display: flex; align-items: center; gap: 0.25rem;" onclick="event.stopPropagation();">
            <i class="fa-brands fa-youtube" style="font-size: 1rem;"></i> ดูบน YouTube
          </a>
        </div>
        <ul class="video-bullets" style="margin-top: 0.75rem;">
          ${bulletsHtml}
        </ul>
      </div>
    `;
    
    // Handle click to play video in app modal
    card.querySelector(".video-thumbnail-wrapper").addEventListener("click", () => {
      openVideoModal(video);
    });
    
    dom.videosContainer.appendChild(card);
  });
}

function openVideoModal(video) {
  dom.modalVideoTitle.innerText = video.title;
  
  // Custom description with a helpful fallback YouTube Link
  dom.modalVideoDesc.innerHTML = `
    <p style="margin-bottom: 0.75rem;">${video.description}</p>
    <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); padding: 0.75rem; border-radius: var(--border-radius-sm); font-size: 0.8rem; color: var(--warning-color); display: flex; align-items: center; gap: 0.5rem;">
      <i class="fa-solid fa-circle-info"></i>
      <span>หากเครื่องเล่นด้านบนขึ้นว่า <strong>"This video is unavailable"</strong> (เนื่องจากเจ้าของช่องจำกัดสิทธิ์การเล่นภายนอก) 
        <a href="https://www.youtube.com/watch?v=${video.youtubeId}" target="_blank" style="color: var(--warning-color); font-weight: 700; text-decoration: underline;">คลิกเปิดดูบน YouTube โดยตรงได้ที่นี่</a>
      </span>
    </div>
  `;
  
  // Set iframe player
  dom.youtubePlayerContainer.innerHTML = `
    <iframe src="https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
  `;
  
  dom.youtubeModal.classList.add("active");
}

function closeVideoModal() {
  dom.youtubeModal.classList.remove("active");
  // Clear iframe container so the video stops playing in background
  dom.youtubePlayerContainer.innerHTML = "";
}

// --- QUIZ ENGINE ---
function startLevel(levelId) {
  // Reset active quiz state
  state.activeQuiz.levelId = levelId;
  state.activeQuiz.currentQuestionIndex = 0;
  state.activeQuiz.userAnswers = Array(20).fill(null);
  state.activeQuiz.flaggedQuestions = Array(20).fill(false);
  state.activeQuiz.timeRemaining = 1200; // 20 minutes
  
  // Setup timer
  if (state.activeQuiz.timerIntervalId) clearInterval(state.activeQuiz.timerIntervalId);
  updateTimerText();
  dom.quizTimerDisplay.classList.remove("low-time");
  
  state.activeQuiz.timerIntervalId = setInterval(() => {
    state.activeQuiz.timeRemaining--;
    updateTimerText();
    
    if (state.activeQuiz.timeRemaining <= 180) { // < 3 minutes
      dom.quizTimerDisplay.classList.add("low-time");
    }
    
    if (state.activeQuiz.timeRemaining <= 0) {
      clearInterval(state.activeQuiz.timerIntervalId);
      alert("หมดเวลาทำแบบทดสอบ! ระบบจะส่งคำตอบโดยอัตโนมัติ");
      submitQuiz();
    }
  }, 1000);

  // Set titles
  const level = LEVELS[levelId];
  dom.quizLevelTitle.innerText = `แบบทดสอบระดับ ${level.name}`;
  dom.quizLevelDesc.innerText = level.desc;
  
  // Switch to quiz tab
  switchTab("quiz");
  
  // Generate jump buttons
  generateJumpButtons();
  
  // Render first question
  renderQuestion();
}

function updateTimerText() {
  const min = Math.floor(state.activeQuiz.timeRemaining / 60);
  const sec = state.activeQuiz.timeRemaining % 60;
  dom.timerText.innerText = `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
}

function generateJumpButtons() {
  dom.quizJumpButtons.innerHTML = "";
  for (let i = 0; i < 20; i++) {
    const btn = document.createElement("button");
    btn.className = "jump-btn";
    btn.innerText = i + 1;
    btn.addEventListener("click", () => {
      state.activeQuiz.currentQuestionIndex = i;
      renderQuestion();
    });
    dom.quizJumpButtons.appendChild(btn);
  }
}

function renderQuestion() {
  const lvlId = state.activeQuiz.levelId;
  const qIndex = state.activeQuiz.currentQuestionIndex;
  
  // Get question object from database
  const questionObj = QUESTIONS[lvlId][qIndex];
  
  // Format question text with blank placeholder
  const formattedQuestion = questionObj.question.replace("_______", '<span class="blank-line">&nbsp;?&nbsp;</span>');
  dom.quizQuestionText.innerHTML = formattedQuestion;
  
  // Generate Options
  dom.quizOptionsContainer.innerHTML = "";
  questionObj.options.forEach((option, idx) => {
    const letter = ["A", "B", "C", "D"][idx];
    const isSelected = state.activeQuiz.userAnswers[qIndex] === option;
    
    const btn = document.createElement("button");
    btn.className = `option-btn ${isSelected ? "selected" : ""}`;
    btn.innerHTML = `
      <span class="option-letter">${letter}</span>
      <span class="option-text">${option}</span>
    `;
    
    btn.addEventListener("click", () => {
      // Set chosen option
      state.activeQuiz.userAnswers[qIndex] = option;
      // Re-render question to show selected style
      renderQuestion();
      // Update sidebar grid status
      updateJumpButtonsStatus();
    });
    
    dom.quizOptionsContainer.appendChild(btn);
  });
  
  // Update navigational buttons state
  dom.btnQuizPrev.disabled = qIndex === 0;
  
  if (qIndex === 19) {
    dom.btnQuizNext.style.display = "none";
    dom.btnQuizSubmit.style.display = "block";
  } else {
    dom.btnQuizNext.style.display = "block";
    dom.btnQuizSubmit.style.display = "none";
  }
  
  // Update Flag button visual state
  if (state.activeQuiz.flaggedQuestions[qIndex]) {
    dom.btnFlagQuestion.classList.add("flagged");
    dom.btnFlagQuestion.querySelector("i").className = "fa-solid fa-flag";
  } else {
    dom.btnFlagQuestion.classList.remove("flagged");
    dom.btnFlagQuestion.querySelector("i").className = "fa-regular fa-flag";
  }
  
  // Update progress bar
  const progressPercent = ((qIndex + 1) / 20) * 100;
  dom.quizProgressFill.style.width = `${progressPercent}%`;
  dom.progressNumerical.innerText = `ข้อ ${qIndex + 1} จาก 20 ข้อ`;
  
  updateJumpButtonsStatus();
}

function updateJumpButtonsStatus() {
  const jumpBtns = dom.quizJumpButtons.querySelectorAll(".jump-btn");
  const qIndex = state.activeQuiz.currentQuestionIndex;
  
  jumpBtns.forEach((btn, idx) => {
    // Current class
    if (idx === qIndex) {
      btn.classList.add("current");
    } else {
      btn.classList.remove("current");
    }
    
    // Answered class
    if (state.activeQuiz.userAnswers[idx] !== null) {
      btn.classList.add("answered");
    } else {
      btn.classList.remove("answered");
    }
    
    // Flagged class
    if (state.activeQuiz.flaggedQuestions[idx]) {
      btn.classList.add("flagged");
    } else {
      btn.classList.remove("flagged");
    }
  });
}

function updateQuizUI() {
  updateJumpButtonsStatus();
  // Update flag button
  const qIndex = state.activeQuiz.currentQuestionIndex;
  if (state.activeQuiz.flaggedQuestions[qIndex]) {
    dom.btnFlagQuestion.classList.add("flagged");
    dom.btnFlagQuestion.querySelector("i").className = "fa-solid fa-flag";
  } else {
    dom.btnFlagQuestion.classList.remove("flagged");
    dom.btnFlagQuestion.querySelector("i").className = "fa-regular fa-flag";
  }
}

function navigateQuestion(direction) {
  state.activeQuiz.currentQuestionIndex += direction;
  renderQuestion();
}

// --- SUBMIT & EVALUATE QUIZ ---
async function submitQuiz() {
  // Check if there are unanswered questions
  const unansweredCount = state.activeQuiz.userAnswers.filter(ans => ans === null).length;
  if (unansweredCount > 0) {
    if (!confirm(`คุณมีคำถามที่ยังไม่ได้ตอบอีก ${unansweredCount} ข้อ ต้องการส่งกระดาษคำตอบเลยหรือไม่?`)) {
      return;
    }
  } else {
    if (!confirm("คุณตรวจสอบคำตอบครบถ้วนแล้ว ต้องการส่งกระดาษคำตอบใช่หรือไม่?")) {
      return;
    }
  }

  // Clear timer interval
  clearInterval(state.activeQuiz.timerIntervalId);
  
  // Evaluate answers
  const lvlId = state.activeQuiz.levelId;
  const questionsList = QUESTIONS[lvlId];
  let correctCount = 0;
  
  questionsList.forEach((q, idx) => {
    const userAns = state.activeQuiz.userAnswers[idx];
    if (userAns === q.answer) {
      correctCount++;
    }
  });

  const level = LEVELS[lvlId];
  const passed = correctCount >= level.minScore;

  // Update local state first (instant feedback)
  const prevScore = state.userProgress.levelScores[lvlId];
  if (prevScore === null || correctCount > prevScore) {
    state.userProgress.levelScores[lvlId] = correctCount;
  }
  
  const currentLevelNum = parseInt(lvlId.substring(1));
  const nextLvlId = `L${currentLevelNum + 1}`;
  
  if (passed && LEVELS[nextLvlId]) {
    if (!state.userProgress.unlockedLevels.includes(nextLvlId)) {
      state.userProgress.unlockedLevels.push(nextLvlId);
    }
  }
  
  // Save local cache
  saveUserProgressLocally();

  // Post progress to Cloudflare D1 database
  if (state.user) {
    try {
      const response = await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: state.user.id,
          levelId: lvlId,
          score: correctCount
        })
      });
      
      if (response.ok) {
        // Refresh from DB to guarantee sync
        await loadUserProgress();
      }
    } catch (e) {
      console.error("Error saving progress to Cloudflare D1", e);
    }
  }

  // Show Results Screen
  renderResults(correctCount, passed);

// --- RESULTS SCREEN RENDERER ---
function renderResults(score, passed) {
  // Set active tab to results
  switchTab("results");
  
  // 1. Render Summary Card
  dom.resultsScoreText.innerText = `${score}/20`;
  const percentage = Math.round((score / 20) * 100);
  dom.resultsPercentText.innerText = `${percentage}%`;
  
  // Remove past classes and apply appropriate design
  dom.resultsBadge.className = "results-badge-container";
  if (passed) {
    dom.resultsBadge.classList.add("passed");
    dom.resultsMessageTitle.innerText = "🎉 ยินดีด้วย! คุณผ่านระดับความยากนี้";
    
    // Check if there is a next level
    const currentNum = parseInt(state.activeQuiz.levelId.substring(1));
    const nextLvlId = `L${currentNum + 1}`;
    if (LEVELS[nextLvlId]) {
      dom.resultsMessageDesc.innerText = `คุณทำคะแนนผ่านเกณฑ์ที่กำหนด (ขั้นต่ำ 14 ข้อ) ระบบปลดล็อกระดับ ${LEVELS[nextLvlId].name} เรียบร้อยแล้ว ไปลุยกันต่อเลย!`;
      dom.btnResultsNextLevel.style.display = "block";
    } else {
      dom.resultsMessageDesc.innerText = `คุณทำคะแนนผ่านเกณฑ์ระดับสูงสุด (C2 Expert) เป็นที่เรียบร้อย! คุณมีความเข้าใจระดับสูงในเรื่อง Part of Speech ของข้อสอบ TOEIC แล้ว!`;
      dom.btnResultsNextLevel.style.display = "none";
    }
  } else {
    dom.resultsBadge.classList.add("failed");
    dom.resultsMessageTitle.innerText = "😢 คุณยังไม่ผ่านระดับความยากนี้";
    dom.resultsMessageDesc.innerText = `น่าเสียดาย คุณได้คะแนนไม่ถึงเกณฑ์ขั้นต่ำ 14/20 (70%) ลองทบทวนคำอธิบายเฉลยที่ด้านล่าง แล้วกดสอบใหม่อีกครั้งนะ! ความพยายามทำให้ประสบความสำเร็จ!`;
    dom.btnResultsNextLevel.style.display = "none";
  }

  // 2. Generate Detailed Explanations List
  renderReviewList();
}

function renderReviewList() {
  // Filter buttons reset
  dom.reviewFilterBtns.forEach(btn => {
    if (btn.getAttribute("data-filter") === "all") btn.classList.add("active");
    else btn.classList.remove("active");
  });

  filterReviewQuestions("all");
}

function filterReviewQuestions(filter) {
  dom.reviewQuestionsContainer.innerHTML = "";
  
  const lvlId = state.activeQuiz.levelId;
  const questionsList = QUESTIONS[lvlId];
  
  let matchCount = 0;
  let correctCount = 0;
  let incorrectCount = 0;

  questionsList.forEach((q, idx) => {
    const userAns = state.activeQuiz.userAnswers[idx];
    const isCorrect = userAns === q.answer;
    
    if (isCorrect) correctCount++;
    else incorrectCount++;

    // Filter logic
    if (filter === "correct" && !isCorrect) return;
    if (filter === "incorrect" && isCorrect) return;
    
    matchCount++;

    const card = document.createElement("div");
    card.className = `review-card-item ${isCorrect ? "correct" : "incorrect"}`;
    
    // Format question with highlighted correct answer inside the blank
    const filledQuestion = q.question.replace("_______", `<strong style="text-decoration: underline; color: var(--success-color); font-size:1.15rem;">${q.answer}</strong>`);
    
    // Generate Options elements with colored tags
    let optionsHtml = "";
    q.options.forEach((opt, oIdx) => {
      const letter = ["A", "B", "C", "D"][oIdx];
      let statusClass = "";
      let checkIcon = "";
      
      if (opt === q.answer) {
        statusClass = "correct";
        checkIcon = '<i class="fa-solid fa-circle-check" style="margin-left:auto;"></i>';
      } else if (opt === userAns) {
        statusClass = "user-incorrect";
        checkIcon = '<i class="fa-solid fa-circle-xmark" style="margin-left:auto;"></i>';
      }
      
      optionsHtml += `
        <div class="review-opt-box ${statusClass}">
          <strong>${letter}.</strong> ${opt} ${checkIcon}
        </div>
      `;
    });

    // Detect Suffixes/POS Category for Tagging
    let tag = "Part of Speech";
    if (q.id.includes("l1")) tag = "Beginner structures";
    if (q.explanation.includes("Adverb") || q.explanation.includes("คำวิเศษณ์")) tag = "Adverb Position";
    if (q.explanation.includes("Adjective") || q.explanation.includes("คุณศัพท์")) tag = "Adjective Position";
    if (q.explanation.includes("Noun") || q.explanation.includes("คำนาม")) tag = "Noun & Suffixes";
    if (q.explanation.includes("Pronoun") || q.explanation.includes("สรรพนาม")) tag = "Pronoun Usage";
    if (q.explanation.includes("Conjunction") || q.explanation.includes("บุพบท") || q.explanation.includes("คำเชื่อม")) tag = "Prepositions & Conjunctions";
    if (q.explanation.includes("Inversion") || q.explanation.includes("สลับลำดับ")) tag = "Inversion Structure";

    card.innerHTML = `
      <div class="review-question-row">
        <span class="review-q-num">ข้อที่ ${idx + 1}</span>
        <div class="review-q-text">${filledQuestion}</div>
        <div class="review-status-icon">
          <i class="fa-solid ${isCorrect ? "fa-check" : "fa-xmark"}"></i>
        </div>
      </div>
      
      <div class="review-options-grid">
        ${optionsHtml}
      </div>
      
      <div class="explanation-drawer">
        <div class="explanation-title"><i class="fa-regular fa-comment-dots"></i> คำอธิบายและโครงสร้างไวยากรณ์</div>
        <div class="explanation-body">${q.explanation}</div>
        <span class="explanation-tag">${tag}</span>
      </div>
    `;
    
    dom.reviewQuestionsContainer.appendChild(card);
  });

  // Update button numbers
  dom.reviewFilterBtns.forEach(btn => {
    const type = btn.getAttribute("data-filter");
    if (type === "all") btn.innerText = `ทั้งหมด (${questionsList.length})`;
    if (type === "correct") btn.innerText = `ตอบถูก (${correctCount})`;
    if (type === "incorrect") btn.innerText = `ตอบผิด (${incorrectCount})`;
  });

  if (matchCount === 0) {
    dom.reviewQuestionsContainer.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: var(--text-secondary);">
        <i class="fa-regular fa-folder-open" style="font-size: 2.5rem; margin-bottom: 0.5rem;"></i>
        <p>ไม่มีข้อสอบในหมวดนี้</p>
      </div>
    `;
  }
}
}
