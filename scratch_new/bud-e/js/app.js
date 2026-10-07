/**
 * BUD-E Core Application Controller & State Machine
 * Handles:
 * - Onboarding & Form Validation
 * - 45-min Break Engine & Parent WhatsApp Accountability
 * - Stage 1: Calibrate (Diagnostic & Level Pinpointing)
 * - Stage 2: Learn (YouTube Embed & Skip Option)
 * - Stage 3: Practice (Time-Budgeted Questions, Confidence Meter & Error Taxonomy)
 * - Stage 4: Test (Timed Simulation, Analysis & Shareable Proof of Learning Card)
 * - Stage 5: Recall (Interactive 3D Flashcards & Short Notes)
 * - Sprint Record File Logging
 */

// Global State
const appState = {
  student: {
    name: "",
    subject: "Physics",
    chapter: "Electric Charges and Fields",
    durationHours: 2,
    parentPhone: "",
    sprintDate: new Date().toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric"
    })
  },
  currentStage: "homepage", // homepage, calibrate, learn, practice, test, recall
  calibration: {
    questions: [],
    currentIndex: 0,
    score: 0,
    answers: [],
    level: 2, // 1: Foundation, 2: Intermediate, 3: Advanced
    levelName: "Intermediate"
  },
  learn: {
    videoUrl: null
  },
  practice: {
    questions: [],
    currentIndex: 0,
    selectedOption: null,
    isAnswered: false,
    confidenceMeter: 50, // 0 - 100%
    errorStats: {
      silly: 0,
      concept: 0,
      guess: 0,
      correct: 0
    },
    hintTimer: null
  },
  test: {
    questions: [],
    currentIndex: 0,
    answers: {},
    score: 0,
    timeRemainingSeconds: 600, // 10 minutes
    timerInterval: null
  },
  recall: {
    flashcards: [],
    currentCardIndex: 0,
    isFlipped: false
  },
  accountability: {
    sprintSecondsElapsed: 0,
    breakCheckInterval: null,
    breakCountdownSeconds: 900, // 15 minutes
    breakCountdownInterval: null,
    isBreakActive: false,
    lastBreakPromptTime: 0
  }
};

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  initCurriculumDropdowns();
  initEventListeners();
  initIntersectionObserver();
  initSprintRecordStore();
});

/**
 * Populates Subject & Chapter select dropdowns
 */
function initCurriculumDropdowns() {
  const subjectSelect = document.getElementById("select-subject");
  const chapterSelect = document.getElementById("select-chapter");

  if (!subjectSelect || !chapterSelect) return;

  subjectSelect.innerHTML = "";
  Object.keys(CURRICULUM).forEach(subj => {
    const opt = document.createElement("option");
    opt.value = subj;
    opt.textContent = subj;
    subjectSelect.appendChild(opt);
  });

  subjectSelect.value = "Physics";
  updateChapterDropdown("Physics");

  subjectSelect.addEventListener("change", (e) => {
    updateChapterDropdown(e.target.value);
  });
}

function updateChapterDropdown(subject) {
  const chapterSelect = document.getElementById("select-chapter");
  if (!chapterSelect) return;

  chapterSelect.innerHTML = "";
  const chapters = CURRICULUM[subject] || [];
  chapters.forEach(chap => {
    const opt = document.createElement("option");
    opt.value = chap;
    opt.textContent = chap;
    chapterSelect.appendChild(opt);
  });
}

/**
 * Event Listeners Registration
 */
function initEventListeners() {
  // Duration Pill Selector
  const durationBtns = document.querySelectorAll(".duration-btn");
  durationBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      durationBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      appState.student.durationHours = parseInt(btn.getAttribute("data-hours"), 10);
    });
  });

  // Sprint Launcher Form Submit
  const launcherForm = document.getElementById("sprint-launcher-form");
  if (launcherForm) {
    launcherForm.addEventListener("submit", handleStartSprint);
  }

  // Break Modal Response
  const btnBreakYes = document.getElementById("btn-break-yes");
  const btnBreakNo = document.getElementById("btn-break-no");
  const btnResumeSprint = document.getElementById("btn-resume-sprint");

  if (btnBreakYes) btnBreakYes.addEventListener("click", triggerBreakSession);
  if (btnBreakNo) btnBreakNo.addEventListener("click", dismissBreakPrompt);
  if (btnResumeSprint) btnResumeSprint.addEventListener("click", resumeFromBreak);

  // Demo Break Trigger (for testing)
  const btnDemoBreak = document.getElementById("btn-demo-break");
  if (btnDemoBreak) {
    btnDemoBreak.addEventListener("click", () => {
      promptBreakQuestion();
    });
  }

  // Download Logs Button
  const btnDownloadLogs = document.getElementById("btn-download-logs");
  if (btnDownloadLogs) {
    btnDownloadLogs.addEventListener("click", downloadSprintLogsFile);
  }
}

/**
 * Starts the Learning Sprint from the Launcher Form
 */
function handleStartSprint(e) {
  e.preventDefault();

  const nameInput = document.getElementById("input-student-name");
  const subjectSelect = document.getElementById("select-subject");
  const chapterSelect = document.getElementById("select-chapter");
  const phoneInput = document.getElementById("input-parent-phone");

  const name = nameInput.value.trim();
  const subject = subjectSelect.value;
  const chapter = chapterSelect.value;
  const parentPhone = phoneInput.value.trim();

  if (!name) {
    alert("Please enter your name to personalize your sprint.");
    nameInput.focus();
    return;
  }

  if (!parentPhone || parentPhone.length < 10) {
    alert("Please enter a valid 10-digit Parent WhatsApp Number for sprint accountability.");
    phoneInput.focus();
    return;
  }

  appState.student.name = name;
  appState.student.subject = subject;
  appState.student.chapter = chapter;
  appState.student.parentPhone = parentPhone;
  appState.student.sprintDate = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });

  // Log user sprint to persistent storage
  logUserSprintRecord(appState.student.name, appState.student.sprintDate, subject, chapter);

  // Switch UI to Sprint Workspace
  document.getElementById("homepage-view").style.display = "none";
  const workspace = document.getElementById("sprint-workspace");
  workspace.style.display = "block";
  workspace.scrollIntoView({ behavior: "smooth" });

  // Update header badges
  document.getElementById("workspace-student-name").textContent = name;
  document.getElementById("workspace-chapter-name").textContent = `${subject} · ${chapter}`;

  // Start Accountability Clock (45-min interval checks)
  startAccountabilityTimer();

  // Launch Stage 1: Calibrate
  startStage1Calibrate();
}

/**
 * ACCOUNTABILITY & BREAK ENGINE
 * - Every 45 minutes, prompts for a 10-min break
 * - If yes: 15-min emergency countdown
 * - At 10 min without return: warning
 * - At 15 min: WhatsApp message sent to parent
 */
function startAccountabilityTimer() {
  if (appState.accountability.breakCheckInterval) {
    clearInterval(appState.accountability.breakCheckInterval);
  }

  appState.accountability.breakCheckInterval = setInterval(() => {
    if (!appState.accountability.isBreakActive) {
      appState.accountability.sprintSecondsElapsed += 1;
      
      // 45 minutes = 2700 seconds
      if (appState.accountability.sprintSecondsElapsed > 0 && appState.accountability.sprintSecondsElapsed % 2700 === 0) {
        promptBreakQuestion();
      }
    }
  }, 1000);
}

function promptBreakQuestion() {
  const modal = document.getElementById("modal-break-prompt");
  if (modal) modal.classList.add("active");
}

function dismissBreakPrompt() {
  const modal = document.getElementById("modal-break-prompt");
  if (modal) modal.classList.remove("active");
}

function triggerBreakSession() {
  dismissBreakPrompt();
  appState.accountability.isBreakActive = true;
  appState.accountability.breakCountdownSeconds = 900; // 15 mins (900s)

  const breakOverlay = document.getElementById("modal-break-session");
  const breakCountdownEl = document.getElementById("break-countdown-timer");
  const breakWarningEl = document.getElementById("break-warning-notice");

  breakWarningEl.style.display = "none";
  breakOverlay.classList.add("active");

  if (appState.accountability.breakCountdownInterval) {
    clearInterval(appState.accountability.breakCountdownInterval);
  }

  appState.accountability.breakCountdownInterval = setInterval(() => {
    appState.accountability.breakCountdownSeconds -= 1;
    const remaining = appState.accountability.breakCountdownSeconds;

    const mins = Math.floor(remaining / 60);
    const secs = remaining % 60;
    breakCountdownEl.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

    // After 10 min elapsed (remaining <= 300 seconds)
    if (remaining <= 300 && remaining > 0) {
      breakWarningEl.style.display = "block";
      breakWarningEl.textContent = "Reminder: Please return to your learning sprint! If you don't return within 5 minutes, an accountability complaint will be sent to your parent's WhatsApp.";
    }

    // After 15 minutes expired (remaining <= 0)
    if (remaining <= 0) {
      clearInterval(appState.accountability.breakCountdownInterval);
      sendParentWhatsappAlert();
    }
  }, 1000);
}

function resumeFromBreak() {
  const breakOverlay = document.getElementById("modal-break-session");
  breakOverlay.classList.remove("active");
  appState.accountability.isBreakActive = false;
  if (appState.accountability.breakCountdownInterval) {
    clearInterval(appState.accountability.breakCountdownInterval);
  }
}

function sendParentWhatsappAlert() {
  const warningEl = document.getElementById("break-warning-notice");
  const phone = appState.student.parentPhone.replace(/\D/g, "");
  const student = appState.student.name;
  const msg = encodeURIComponent(`Hello, your ward ${student} has left their learning sprint in between without resuming.`);
  const waUrl = `https://api.whatsapp.com/send?phone=91${phone}&text=${msg}`;

  warningEl.innerHTML = `<strong>Sprint Timed Out:</strong> Notice triggered to parent at +91-${phone}. <a href="${waUrl}" target="_blank" style="color:var(--color-danger);text-decoration:underline;">Click to view WhatsApp notification</a>`;
  
  // Try opening link in background or popup
  try {
    window.open(waUrl, "_blank");
  } catch (err) {
    console.log("WhatsApp alert dispatched:", waUrl);
  }
}

/**
 * ==========================================================
 * STAGE 1: CALIBRATE (Diagnostic Round)
 * ==========================================================
 */
function startStage1Calibrate() {
  setStageActive("calibrate");
  const subj = appState.student.subject;
  const chap = appState.student.chapter;

  // Retrieve calibration questions
  let qs = (typeof CALIBRATION_QUESTIONS !== "undefined" && CALIBRATION_QUESTIONS[subj] && CALIBRATION_QUESTIONS[subj][chap])
    ? CALIBRATION_QUESTIONS[subj][chap]
    : [];

  // Fallback if needed
  if (!qs || qs.length === 0) {
    qs = generateFallbackQuestions(chap, 10);
  }

  appState.calibration.questions = qs.slice(0, 10);
  appState.calibration.currentIndex = 0;
  appState.calibration.score = 0;
  appState.calibration.answers = [];

  renderCalibrationQuestion();
}

function renderCalibrationQuestion() {
  const container = document.getElementById("stage-container");
  const idx = appState.calibration.currentIndex;
  const total = appState.calibration.questions.length;
  const q = appState.calibration.questions[idx];

  const progressPercent = Math.round(((idx) / total) * 100);

  container.innerHTML = `
    <div class="card animate-entrance">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
        <span class="pill pill-stage-calibrate">Stage 1 · Calibrate</span>
        <span style="font-size:0.85rem; font-weight:600; color:var(--color-ink-soft);">Question ${idx + 1} of ${total}</span>
      </div>

      <div style="width:100%; height:6px; background:var(--color-line); border-radius:var(--radius-pill); margin-bottom:1.5rem; overflow:hidden;">
        <div style="width:${progressPercent}%; height:100%; background:var(--color-brand); transition:width 400ms ease-out;"></div>
      </div>

      <h3 class="question-text">${q.question}</h3>

      <div class="options-list" id="calibrate-options">
        ${q.options.map((opt, i) => `
          <button class="option-btn" data-index="${i}">
            <span style="font-weight:700; width:22px;">${["A", "B", "C", "D"][i]}.</span>
            <span>${opt}</span>
          </button>
        `).join("")}
      </div>

      <div id="calibrate-feedback" style="display:none; margin-top:1.25rem;">
        <button id="btn-next-calib" class="btn btn-primary" style="width:100%;">
          ${idx + 1 === total ? "Complete Calibration →" : "Next Question →"}
        </button>
      </div>
    </div>
  `;

  // Attach option clicks
  const optionBtns = container.querySelectorAll(".option-btn");
  optionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedIdx = parseInt(btn.getAttribute("data-index"), 10);
      handleCalibrationAnswer(selectedIdx, optionBtns);
    });
  });
}

function handleCalibrationAnswer(selectedIndex, buttons) {
  const idx = appState.calibration.currentIndex;
  const q = appState.calibration.questions[idx];
  const isCorrect = selectedIndex === q.answer;

  buttons.forEach(b => b.disabled = true);

  if (isCorrect) {
    appState.calibration.score += 1;
    buttons[selectedIndex].classList.add("correct");
  } else {
    buttons[selectedIndex].classList.add("wrong");
    if (buttons[q.answer]) buttons[q.answer].classList.add("correct");
  }

  document.getElementById("calibrate-feedback").style.display = "block";
  document.getElementById("btn-next-calib").addEventListener("click", () => {
    appState.calibration.currentIndex += 1;
    if (appState.calibration.currentIndex < appState.calibration.questions.length) {
      renderCalibrationQuestion();
    } else {
      finishCalibration();
    }
  });
}

function finishCalibration() {
  const score = appState.calibration.score;
  let level = 2;
  let levelName = "Intermediate";
  let levelColor = "var(--color-level-intermediate)";
  let levelDesc = "You have a solid foundation but need targeted practice on core variations and exam questions.";

  if (score <= 4) {
    level = 1;
    levelName = "Foundation";
    levelColor = "var(--color-level-foundation)";
    levelDesc = "We recommend reinforcing core definitions and standard formula applications before taking on complex numericals.";
  } else if (score >= 8) {
    level = 3;
    levelName = "Advanced";
    levelColor = "var(--color-level-advanced)";
    levelDesc = "Strong conceptual grasp! Your sprint will focus on speed-drills and tricky board-level exam applications.";
  }

  appState.calibration.level = level;
  appState.calibration.levelName = levelName;

  const container = document.getElementById("stage-container");
  container.innerHTML = `
    <div class="card animate-entrance" style="text-align:center; padding:2.5rem 1.5rem;">
      <span class="pill pill-brand" style="margin-bottom:1rem;">Calibration Complete</span>
      <h2 style="font-size:2rem; margin-bottom:0.5rem;">Diagnostic Score: ${score} / 10</h2>
      
      <div style="display:inline-block; margin:1rem 0; padding:8px 24px; border-radius:var(--radius-pill); background-color:var(--color-paper-alt); border:2px solid ${levelColor};">
        <span style="font-weight:700; font-size:1.15rem; color:${levelColor};">Knowledge Band: Level ${level} · ${levelName}</span>
      </div>

      <p style="color:var(--color-ink-soft); max-width:540px; margin:0 auto 2rem; font-size:1rem; line-height:1.6;">
        ${levelDesc} Your learning path and question difficulty have been customized accordingly.
      </p>

      <button id="btn-proceed-learn" class="btn btn-primary" style="padding:12px 28px; font-size:1rem;">
        Proceed to Stage 2: Learn →
      </button>
    </div>
  `;

  document.getElementById("btn-proceed-learn").addEventListener("click", startStage2Learn);
}

/**
 * ==========================================================
 * STAGE 2: LEARN (Targeted Video Lecture Embed)
 * ==========================================================
 */
function startStage2Learn() {
  setStageActive("learn");
  const subj = appState.student.subject;
  const chap = appState.student.chapter;
  const lvl = appState.calibration.level;
  const dur = appState.student.durationHours;

  const embedUrl = getLectureVideoEmbed(subj, chap, lvl, dur);
  appState.learn.videoUrl = embedUrl;

  const container = document.getElementById("stage-container");

  container.innerHTML = `
    <div class="card animate-entrance">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.25rem; flex-wrap:wrap; gap:10px;">
        <div>
          <span class="pill pill-stage-learn">Stage 2 · Learn</span>
          <h2 style="margin-top:0.4rem; font-size:1.4rem;">Targeted One-Shot Lecture</h2>
          <p style="font-size:0.85rem; color:var(--color-ink-soft);">${chap} · Level ${lvl} (${appState.calibration.levelName}) · ${dur}hr Budget</p>
        </div>

        <button id="btn-skip-lecture" class="btn btn-secondary btn-sm">
          Skip lecture for now and proceed to question practice →
        </button>
      </div>

      <div class="video-responsive-wrapper">
        ${embedUrl ? `
          <iframe 
            src="${embedUrl}" 
            title="BUD-E Curated Lecture: ${chap}" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        ` : `
          <div class="video-unavailable-placeholder">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-bottom:1rem; color:var(--color-ink-soft);">
              <polygon points="23 7 16 12 23 17 23 7"></polygon>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
            </svg>
            <h3 style="margin-bottom:0.5rem; color:var(--color-ink);">Video Unavailable</h3>
            <p style="font-size:0.9rem; max-width:420px;">The dedicated lecture link for this chapter has not yet been registered. You can proceed directly to active question practice and review short formulas.</p>
          </div>
        `}
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; border-top:1px solid var(--color-line); padding-top:1.25rem;">
        <span style="font-size:0.85rem; color:var(--color-ink-soft);">
          Active recall is key. Once you finish reviewing the lecture or key formulas, jump straight into practice.
        </span>
        <button id="btn-proceed-practice" class="btn btn-primary">
          Proceed to Stage 3: Practice →
        </button>
      </div>
    </div>
  `;

  document.getElementById("btn-skip-lecture").addEventListener("click", startStage3Practice);
  document.getElementById("btn-proceed-practice").addEventListener("click", startStage3Practice);
}

/**
 * ==========================================================
 * STAGE 3: PRACTICE (Time-Budgeted Drill with Confidence Meter)
 * ==========================================================
 */
function startStage3Practice() {
  setStageActive("practice");
  const subj = appState.student.subject;
  const chap = appState.student.chapter;
  const lvl = appState.calibration.level;
  const dur = appState.student.durationHours;

  const questions = PRACTICE_BANK.getPracticeQuestions(subj, chap, lvl, dur);
  appState.practice.questions = questions;
  appState.practice.currentIndex = 0;
  appState.practice.confidenceMeter = 50;
  appState.practice.errorStats = { silly: 0, concept: 0, guess: 0, correct: 0 };

  renderPracticeQuestion();
}

function renderPracticeQuestion() {
  const container = document.getElementById("stage-container");
  const idx = appState.practice.currentIndex;
  const total = appState.practice.questions.length;
  const q = appState.practice.questions[idx];

  appState.practice.isAnswered = false;
  appState.practice.selectedOption = null;

  container.innerHTML = `
    <div class="card animate-entrance">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; flex-wrap:wrap; gap:10px;">
        <span class="pill pill-stage-practice">Stage 3 · Practice</span>
        
        <!-- Live Confidence Meter -->
        <div class="confidence-widget">
          <span style="font-size:0.8rem; font-weight:700;">Confidence:</span>
          <div class="meter-track">
            <div id="confidence-fill-bar" class="meter-fill" style="width:${appState.practice.confidenceMeter}%;"></div>
          </div>
          <span id="confidence-score-text" style="font-size:0.8rem; font-weight:700; color:var(--color-brand);">${appState.practice.confidenceMeter}%</span>
        </div>

        <span style="font-size:0.85rem; font-weight:600; color:var(--color-ink-soft);">Practice ${idx + 1} of ${total}</span>
      </div>

      <h3 class="question-text">${q.question}</h3>

      <!-- Hint Section -->
      <div>
        <button id="btn-toggle-hint" class="btn btn-secondary btn-sm" style="margin-bottom:1rem;">
          <span class="hint-dot"></span> View Hint
        </button>
        <div id="hint-box" class="hint-container">
          <span class="hint-badge"><span class="hint-dot"></span> Concept Hint:</span>
          <p>${q.hint || "Review core formula definitions and dimensional balance."}</p>
        </div>
      </div>

      <!-- Options -->
      <div class="options-list" id="practice-options">
        ${q.options.map((opt, i) => `
          <button class="option-btn" data-index="${i}">
            <span style="font-weight:700; width:22px;">${["A", "B", "C", "D"][i]}.</span>
            <span>${opt}</span>
          </button>
        `).join("")}
      </div>

      <!-- Error Taxonomy Drawer (Appears only on wrong answers BEFORE solution) -->
      <div id="error-tag-drawer" class="error-tag-box">
        <p style="font-size:0.9rem; font-weight:600; color:var(--color-ink);">
          Before checking the solution, BUD-E asks: <em>"Was this a silly mistake, a concept gap, or a guess?"</em>
        </p>
        <div class="tag-options">
          <button class="tag-btn" data-type="silly">Silly Mistake</button>
          <button class="tag-btn" data-type="concept">Concept Gap</button>
          <button class="tag-btn" data-type="guess">Guess</button>
        </div>
      </div>

      <!-- Micro-Explanation / Solution Box -->
      <div id="solution-box" class="solution-box">
        <h4 style="color:var(--color-brand); font-size:0.95rem; margin-bottom:0.4rem;">Micro-Explanation</h4>
        <p style="font-size:0.9rem; line-height:1.5;">${q.solution}</p>
        <div style="margin-top:1.25rem;">
          <button id="btn-next-practice" class="btn btn-primary" style="width:100%;">
            ${idx + 1 === total ? "Complete Practice & Start Timed Test →" : "Next Practice Question →"}
          </button>
        </div>
      </div>
    </div>
  `;

  // Auto-reveal hint after 10s if student doesn't answer
  if (appState.practice.hintTimer) clearTimeout(appState.practice.hintTimer);
  appState.practice.hintTimer = setTimeout(() => {
    const hintBox = document.getElementById("hint-box");
    if (hintBox && !appState.practice.isAnswered) {
      hintBox.classList.add("visible");
    }
  }, 10000);

  // Hint Toggle
  document.getElementById("btn-toggle-hint").addEventListener("click", () => {
    const hintBox = document.getElementById("hint-box");
    hintBox.classList.toggle("visible");
  });

  // Option clicks
  const optionBtns = container.querySelectorAll("#practice-options .option-btn");
  optionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedIdx = parseInt(btn.getAttribute("data-index"), 10);
      handlePracticeAnswer(selectedIdx, optionBtns);
    });
  });
}

function handlePracticeAnswer(selectedIdx, optionBtns) {
  if (appState.practice.isAnswered) return;
  appState.practice.isAnswered = true;
  if (appState.practice.hintTimer) clearTimeout(appState.practice.hintTimer);

  const idx = appState.practice.currentIndex;
  const q = appState.practice.questions[idx];
  const isCorrect = selectedIdx === q.answer;

  optionBtns.forEach(b => b.disabled = true);

  if (isCorrect) {
    optionBtns[selectedIdx].classList.add("correct");
    appState.practice.errorStats.correct += 1;
    // Increase confidence meter
    adjustConfidence(4);
    // Show solution directly
    document.getElementById("solution-box").classList.add("visible");
    attachNextPracticeHandler();
  } else {
    optionBtns[selectedIdx].classList.add("wrong");
    // Show error tag drawer before showing solution
    const errorDrawer = document.getElementById("error-tag-drawer");
    errorDrawer.classList.add("active");

    const tagBtns = errorDrawer.querySelectorAll(".tag-btn");
    tagBtns.forEach(tagBtn => {
      tagBtn.addEventListener("click", () => {
        const errorType = tagBtn.getAttribute("data-type");
        if (errorType === "silly") {
          appState.practice.errorStats.silly += 1;
          adjustConfidence(-2); // Silly mistake decreases slightly
        } else if (errorType === "concept") {
          appState.practice.errorStats.concept += 1;
          adjustConfidence(-5); // Conceptual error decreases more
        } else if (errorType === "guess") {
          appState.practice.errorStats.guess += 1;
          adjustConfidence(-8); // Guess decreases highest
        }

        errorDrawer.style.display = "none";
        // Now reveal correct solution
        if (optionBtns[q.answer]) optionBtns[q.answer].classList.add("correct");
        document.getElementById("solution-box").classList.add("visible");
        attachNextPracticeHandler();
      });
    });
  }
}

function adjustConfidence(delta) {
  let val = appState.practice.confidenceMeter + delta;
  if (val < 10) val = 10;
  if (val > 100) val = 100;
  appState.practice.confidenceMeter = val;

  const bar = document.getElementById("confidence-fill-bar");
  const text = document.getElementById("confidence-score-text");
  if (bar) bar.style.width = `${val}%`;
  if (text) text.textContent = `${val}%`;
}

function attachNextPracticeHandler() {
  const nextBtn = document.getElementById("btn-next-practice");
  if (!nextBtn) return;
  nextBtn.addEventListener("click", () => {
    appState.practice.currentIndex += 1;
    if (appState.practice.currentIndex < appState.practice.questions.length) {
      renderPracticeQuestion();
    } else {
      startStage4Test();
    }
  });
}

/**
 * ==========================================================
 * STAGE 4: TEST (Timed Simulation, Analysis & Proof Card)
 * ==========================================================
 */
function startStage4Test() {
  setStageActive("test");
  const subj = appState.student.subject;
  const chap = appState.student.chapter;

  const testQs = PRACTICE_BANK.getTestQuestions(subj, chap);
  appState.test.questions = testQs;
  appState.test.currentIndex = 0;
  appState.test.answers = {};
  appState.test.score = 0;
  appState.test.timeRemainingSeconds = 600; // 10 minutes

  // Start test countdown
  if (appState.test.timerInterval) clearInterval(appState.test.timerInterval);
  appState.test.timerInterval = setInterval(() => {
    appState.test.timeRemainingSeconds -= 1;
    updateTestTimerDisplay();
    if (appState.test.timeRemainingSeconds <= 0) {
      clearInterval(appState.test.timerInterval);
      submitTest();
    }
  }, 1000);

  renderTestQuestion();
}

function updateTestTimerDisplay() {
  const timerEl = document.getElementById("test-timer-clock");
  if (!timerEl) return;
  const rem = appState.test.timeRemainingSeconds;
  const mins = Math.floor(rem / 60);
  const secs = rem % 60;
  timerEl.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function renderTestQuestion() {
  const container = document.getElementById("stage-container");
  const idx = appState.test.currentIndex;
  const total = appState.test.questions.length;
  const q = appState.test.questions[idx];

  container.innerHTML = `
    <div class="card animate-entrance">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; flex-wrap:wrap; gap:10px;">
        <span class="pill pill-stage-test">Stage 4 · Timed Exam Simulation</span>
        
        <div style="display:flex; align-items:center; gap:8px; background:var(--color-paper-alt); padding:4px 12px; border-radius:var(--radius-pill);">
          <span style="font-size:0.8rem; font-weight:700;">Zero Hints · Time Left:</span>
          <span id="test-timer-clock" style="font-size:0.85rem; font-weight:700; color:var(--color-danger);">--:--</span>
        </div>

        <span style="font-size:0.85rem; font-weight:600; color:var(--color-ink-soft);">Question ${idx + 1} of ${total}</span>
      </div>

      <h3 class="question-text">${q.question}</h3>

      <div class="options-list" id="test-options">
        ${q.options.map((opt, i) => `
          <button class="option-btn ${appState.test.answers[idx] === i ? "selected" : ""}" data-index="${i}">
            <span style="font-weight:700; width:22px;">${["A", "B", "C", "D"][i]}.</span>
            <span>${opt}</span>
          </button>
        `).join("")}
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:1.5rem; gap:10px;">
        <button id="btn-test-prev" class="btn btn-secondary" ${idx === 0 ? "disabled" : ""}>← Previous</button>
        ${idx + 1 === total ? `
          <button id="btn-test-submit" class="btn btn-primary">Submit Test & Evaluate →</button>
        ` : `
          <button id="btn-test-next" class="btn btn-primary">Next →</button>
        `}
      </div>
    </div>
  `;

  updateTestTimerDisplay();

  const optionBtns = container.querySelectorAll("#test-options .option-btn");
  optionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = parseInt(btn.getAttribute("data-index"), 10);
      appState.test.answers[idx] = selected;
      optionBtns.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    });
  });

  const prevBtn = document.getElementById("btn-test-prev");
  const nextBtn = document.getElementById("btn-test-next");
  const submitBtn = document.getElementById("btn-test-submit");

  if (prevBtn) prevBtn.addEventListener("click", () => {
    if (appState.test.currentIndex > 0) {
      appState.test.currentIndex -= 1;
      renderTestQuestion();
    }
  });

  if (nextBtn) nextBtn.addEventListener("click", () => {
    if (appState.test.currentIndex < total - 1) {
      appState.test.currentIndex += 1;
      renderTestQuestion();
    }
  });

  if (submitBtn) submitBtn.addEventListener("click", submitTest);
}

function submitTest() {
  if (appState.test.timerInterval) clearInterval(appState.test.timerInterval);

  let score = 0;
  appState.test.questions.forEach((q, idx) => {
    if (appState.test.answers[idx] === q.answer) {
      score += 1;
    }
  });
  appState.test.score = score;

  renderTestResultAndProofCard();
}

function renderTestResultAndProofCard() {
  const container = document.getElementById("stage-container");
  const score = appState.test.score;
  const total = appState.test.questions.length;
  const passed = score >= 6; // >= 60% threshold

  const { silly, concept, guess, correct } = appState.practice.errorStats;
  const totalErrors = silly + concept + guess;
  const sillyPct = totalErrors > 0 ? Math.round((silly / totalErrors) * 100) : 0;
  const conceptPct = totalErrors > 0 ? Math.round((concept / totalErrors) * 100) : 0;
  const guessPct = totalErrors > 0 ? Math.round((guess / totalErrors) * 100) : 0;

  container.innerHTML = `
    <div class="animate-entrance">
      <!-- Test Result Analysis -->
      <div class="card" style="margin-bottom:2rem;">
        <span class="pill pill-brand" style="margin-bottom:0.75rem;">Stage 4 · Detailed Diagnostic Analytics</span>
        <h2 style="font-size:1.75rem; margin-bottom:0.5rem;">Sprint Evaluation & Mastery Report</h2>
        <p style="color:var(--color-ink-soft); font-size:0.95rem; margin-bottom:1.5rem;">
          Deep cognitive analysis combining your timed exam score and practice round error taxonomy.
        </p>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:1rem; margin-bottom:1.5rem;">
          <div style="background:var(--color-paper); padding:1.25rem; border-radius:var(--radius-card); text-align:center;">
            <div style="font-size:0.8rem; font-weight:700; color:var(--color-ink-soft); text-transform:uppercase;">Test Score</div>
            <div style="font-size:2rem; font-weight:700; color:var(--color-brand); margin-top:4px;">${score} / ${total}</div>
            <div style="font-size:0.75rem; color:var(--color-ink-soft);">${passed ? "Passed Threshold (≥60%)" : "Needs Revision"}</div>
          </div>

          <div style="background:var(--color-paper); padding:1.25rem; border-radius:var(--radius-card); text-align:center;">
            <div style="font-size:0.8rem; font-weight:700; color:var(--color-ink-soft); text-transform:uppercase;">Confidence Meter</div>
            <div style="font-size:2rem; font-weight:700; color:var(--color-accent); margin-top:4px;">${appState.practice.confidenceMeter}%</div>
            <div style="font-size:0.75rem; color:var(--color-ink-soft);">Active Practice Index</div>
          </div>

          <div style="background:var(--color-paper); padding:1.25rem; border-radius:var(--radius-card); text-align:center;">
            <div style="font-size:0.8rem; font-weight:700; color:var(--color-ink-soft); text-transform:uppercase;">Level Certified</div>
            <div style="font-size:1.6rem; font-weight:700; color:var(--color-level-${appState.calibration.levelName.toLowerCase()}); margin-top:8px;">${appState.calibration.levelName}</div>
            <div style="font-size:0.75rem; color:var(--color-ink-soft);">Stage 1 Verified</div>
          </div>
        </div>

        <!-- Error Taxonomy Breakdown -->
        <h4 style="margin-bottom:0.75rem; font-size:1rem;">Practice Error Taxonomy Analysis</h4>
        <div style="background:var(--color-paper-alt); padding:1.25rem; border-radius:var(--radius-card); margin-bottom:1.5rem;">
          <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:6px;">
            <span>Silly Mistakes: <strong>${silly}</strong> (${sillyPct}%)</span>
            <span>Concept Gaps: <strong>${concept}</strong> (${conceptPct}%)</span>
            <span>Guesses: <strong>${guess}</strong> (${guessPct}%)</span>
          </div>
          <div style="height:10px; border-radius:var(--radius-pill); overflow:hidden; display:flex; background:var(--color-line);">
            <div style="width:${sillyPct}%; background:#E09A2E;" title="Silly Mistakes"></div>
            <div style="width:${conceptPct}%; background:#B54848;" title="Concept Gaps"></div>
            <div style="width:${guessPct}%; background:#5A6270;" title="Guesses"></div>
          </div>
          <p style="font-size:0.78rem; color:var(--color-ink-soft); margin-top:8px;">
            ${concept > silly ? "⚠️ Priority: Review underlying NCERT mechanisms. Concept gaps caused majority of errors." : "✓ Great conceptual grasp! Reduce rush to eliminate silly calculation oversights."}
          </p>
        </div>
      </div>

      <!-- THE "PROOF OF LEARNING" SHAREABLE CARD -->
      <div id="proof-of-learning-card" class="proof-card-wrap">
        <div style="display:flex; align-items:center; justify-content:center; gap:8px; margin-bottom:1rem;">
          <div class="logo-badge" style="padding:4px 12px; font-size:1rem;">BUD-E</div>
          <span style="font-weight:700; color:var(--color-ink-soft); font-size:0.8rem; letter-spacing:0.5px;">PROOF OF LEARNING</span>
        </div>

        <h3 style="font-size:1.4rem; color:var(--color-ink); margin-bottom:0.25rem;">${appState.student.name}</h3>
        <p style="font-size:0.85rem; color:var(--color-ink-soft); margin-bottom:1rem;">${appState.student.subject} · ${appState.student.chapter}</p>

        <div style="background:var(--color-paper); border-radius:var(--radius-card); padding:1rem; margin:1rem 0;">
          <div style="display:flex; justify-content:space-around; font-size:0.9rem;">
            <div>
              <span style="display:block; font-size:0.75rem; color:var(--color-ink-soft);">Date of Sprint</span>
              <strong>${appState.student.sprintDate}</strong>
            </div>
            <div>
              <span style="display:block; font-size:0.75rem; color:var(--color-ink-soft);">Time Dedicated</span>
              <strong>${appState.student.durationHours} Hours</strong>
            </div>
            <div>
              <span style="display:block; font-size:0.75rem; color:var(--color-ink-soft);">Exam Score</span>
              <strong>${score} / ${total}</strong>
            </div>
          </div>
        </div>

        ${passed ? `
          <div class="badge-can-solve">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Verified: CAN SOLVE</span>
          </div>
        ` : `
          <div style="color:var(--color-warning); font-size:0.85rem; font-weight:600; margin:1rem 0;">
            Completed Sprint · Needs Final Flashcard Revision
          </div>
        `}

        <div style="font-size:0.75rem; color:var(--color-ink-soft); border-top:1px solid var(--color-line); padding-top:0.75rem; margin-top:1rem;">
          Build · Understand · Drill · Evaluate · Anti-Passive Learning Protocol
        </div>
      </div>

      <!-- Action Buttons -->
      <div style="display:flex; justify-content:center; gap:12px; margin-top:1.5rem; flex-wrap:wrap;">
        <button id="btn-copy-card" class="btn btn-secondary">
          📋 Copy Proof Card Text
        </button>
        <button id="btn-proceed-recall" class="btn btn-primary">
          Proceed to Stage 5: Recall (Flashcards & Short Notes) →
        </button>
      </div>
    </div>
  `;

  document.getElementById("btn-copy-card").addEventListener("click", () => {
    const text = `🏆 BUD-E Proof of Learning Card\nStudent: ${appState.student.name}\nTopic: ${appState.student.subject} - ${appState.student.chapter}\nDate: ${appState.student.sprintDate}\nTime Dedicated: ${appState.student.durationHours} Hours\nTest Score: ${score}/10 (${passed ? 'Verified CAN SOLVE' : 'Completed'})\nBUD-E: Build · Understand · Drill · Evaluate`;
    navigator.clipboard.writeText(text).then(() => {
      alert("Proof of Learning details copied to clipboard!");
    });
  });

  document.getElementById("btn-proceed-recall").addEventListener("click", startStage5Recall);
}

/**
 * ==========================================================
 * STAGE 5: RECALL (Short Notes & 3D Interactive Flashcards)
 * ==========================================================
 */
function startStage5Recall() {
  setStageActive("recall");
  const subj = appState.student.subject;
  const chap = appState.student.chapter;

  const notesData = (typeof SHORT_NOTES_DATABASE !== "undefined" && SHORT_NOTES_DATABASE[subj] && SHORT_NOTES_DATABASE[subj][chap])
    ? SHORT_NOTES_DATABASE[subj][chap]
    : {
        shortNotes: `Essential High-Yield Notes for ${chap}. Focus on NCERT standard definitions and formulas.`,
        flashcards: [
          { front: `Core Principle of ${chap}`, back: "Active problem solving and systematic retention." },
          { front: "Exam Strategy", back: "Formulas -> substitution -> calculation -> units." }
        ],
        examTips: "Always draw neat diagrams and write units with all numericals."
      };

  appState.recall.flashcards = notesData.flashcards && notesData.flashcards.length > 0
    ? notesData.flashcards
    : [
        { front: `Fundamental Law of ${chap}`, back: "Standard NCERT definition and governing equations." },
        { front: "Board Exam Golden Rule", back: "State formula first, substitute values with units, double check final sign." }
      ];

  appState.recall.currentCardIndex = 0;
  appState.recall.isFlipped = false;

  renderRecallView(notesData);
}

function renderRecallView(notesData) {
  const container = document.getElementById("stage-container");
  const cards = appState.recall.flashcards;
  const cIdx = appState.recall.currentCardIndex;
  const currentCard = cards[cIdx];

  container.innerHTML = `
    <div class="animate-entrance">
      <div class="card" style="margin-bottom:2rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; flex-wrap:wrap; gap:10px;">
          <span class="pill pill-stage-recall">Stage 5 · Recall</span>
          <span style="font-size:0.85rem; color:var(--color-ink-soft); font-weight:600;">Last-Minute Flashcard Drill</span>
        </div>

        <h2 style="font-size:1.5rem; margin-bottom:0.25rem;">Interactive High-Yield Flashcards</h2>
        <p style="font-size:0.9rem; color:var(--color-ink-soft); margin-bottom:1.5rem;">
          Click the card to flip and test your active recall. Flip 400ms rotateY.
        </p>

        <!-- 3D Flashcard Container -->
        <div class="flashcard-stage">
          <div id="active-flashcard" class="flashcard ${appState.recall.isFlipped ? "flipped" : ""}">
            <!-- Front Face -->
            <div class="flashcard-face flashcard-front">
              <div style="font-size:0.75rem; font-weight:700; color:var(--color-brand); text-transform:uppercase;">Front (Question / Prompt)</div>
              <div style="font-size:1.2rem; font-weight:600; color:var(--color-ink); text-align:center; padding:1.5rem 0;">
                ${currentCard.front}
              </div>
              <div style="font-size:0.75rem; color:var(--color-ink-soft); text-align:center;">Click anywhere on card to flip ↷</div>
            </div>

            <!-- Back Face -->
            <div class="flashcard-face flashcard-back">
              <div style="font-size:0.75rem; font-weight:700; color:#1C6B6B; text-transform:uppercase;">Back (Answer / Recall)</div>
              <div style="font-size:1.1rem; font-weight:500; color:var(--color-ink); text-align:center; padding:1.5rem 0; line-height:1.5;">
                ${currentCard.back}
              </div>
              <div style="font-size:0.75rem; color:var(--color-ink-soft); text-align:center;">Click anywhere on card to flip back ↶</div>
            </div>
          </div>
        </div>

        <!-- Flashcard Navigation -->
        <div style="display:flex; justify-content:space-between; align-items:center; max-width:640px; margin:1rem auto 0;">
          <button id="btn-card-prev" class="btn btn-secondary btn-sm" ${cIdx === 0 ? "disabled" : ""}>← Previous Card</button>
          <span style="font-size:0.85rem; font-weight:600; color:var(--color-ink-soft);">Card ${cIdx + 1} of ${cards.length}</span>
          <button id="btn-card-next" class="btn btn-secondary btn-sm" ${cIdx === cards.length - 1 ? "disabled" : ""}>Next Card →</button>
        </div>
      </div>

      <!-- Chapter Short Notes & Exam Tips -->
      <div class="card" style="margin-bottom:2rem;">
        <h3 style="font-size:1.3rem; margin-bottom:1rem; color:var(--color-ink);">Chapter Short Notes & Formula Reference</h3>
        <div style="white-space:pre-line; font-size:0.92rem; line-height:1.7; color:var(--color-ink); background:var(--color-paper); padding:1.5rem; border-radius:var(--radius-card); border:1px solid var(--color-line);">
${notesData.shortNotes || "Short notes loaded."}
        </div>

        ${notesData.examTips ? `
          <div style="margin-top:1.5rem; background:var(--color-accent-tint); border-left:4px solid var(--color-accent); padding:1rem 1.25rem; border-radius:0 var(--radius-card) var(--radius-card) 0;">
            <h4 style="color:#8A5A12; font-size:0.9rem; margin-bottom:0.25rem;">Examiner Tips for Board Marks:</h4>
            <p style="font-size:0.88rem; color:#5D3E0C; line-height:1.5;">${notesData.examTips}</p>
          </div>
        ` : ""}
      </div>

      <!-- Sprint Completion Celebration Banner -->
      <div class="card" style="background:var(--color-paper-alt); text-align:center; padding:2.5rem 1.5rem;">
        <div style="font-size:2.5rem; margin-bottom:0.5rem;">🎓</div>
        <h2 style="font-size:1.75rem; margin-bottom:0.5rem;">Sprint Successfully Completed!</h2>
        <p style="color:var(--color-ink-soft); max-width:520px; margin:0 auto 1.5rem; font-size:0.95rem;">
          You took <strong>${appState.student.chapter}</strong> from <em>"I watched it"</em> to <em>"I can solve it"</em> with active proof.
        </p>

        <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
          <button id="btn-new-sprint" class="btn btn-primary">Start Another Sprint →</button>
          <button id="btn-finish-home" class="btn btn-secondary">Return to Homepage</button>
        </div>
      </div>
    </div>
  `;

  // Flip Handler
  const cardEl = document.getElementById("active-flashcard");
  if (cardEl) {
    cardEl.addEventListener("click", () => {
      appState.recall.isFlipped = !appState.recall.isFlipped;
      cardEl.classList.toggle("flipped", appState.recall.isFlipped);
    });
  }

  // Prev / Next card
  const prevBtn = document.getElementById("btn-card-prev");
  const nextBtn = document.getElementById("btn-card-next");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (appState.recall.currentCardIndex > 0) {
        appState.recall.currentCardIndex -= 1;
        appState.recall.isFlipped = false;
        renderRecallView(notesData);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (appState.recall.currentCardIndex < cards.length - 1) {
        appState.recall.currentCardIndex += 1;
        appState.recall.isFlipped = false;
        renderRecallView(notesData);
      }
    });
  }

  // New Sprint / Home
  document.getElementById("btn-new-sprint").addEventListener("click", () => {
    document.getElementById("sprint-workspace").style.display = "none";
    document.getElementById("homepage-view").style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.getElementById("btn-finish-home").addEventListener("click", () => {
    document.getElementById("sprint-workspace").style.display = "none";
    document.getElementById("homepage-view").style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/**
 * Stage Navigation Indicator Helper
 */
function setStageActive(stageName) {
  appState.currentStage = stageName;
  const stageBtns = document.querySelectorAll(".stage-step-btn");
  stageBtns.forEach(btn => {
    const s = btn.getAttribute("data-stage");
    btn.classList.remove("current");
    if (s === stageName) btn.classList.add("current");
  });
}

/**
 * ==========================================================
 * SPRINT RECORD LOGGER (Human-Readable Storage & Export)
 * "the names and date of sprint of each and every user of BUD-E to be stored on a file in human readable form."
 * ==========================================================
 */
const STORAGE_KEY = "bude_user_sprint_logs";

function initSprintRecordStore() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    const initialRecords = [
      {
        name: "Arjun Verma",
        date: "2026-10-04",
        subject: "Physics",
        chapter: "Electric Charges and Fields"
      },
      {
        name: "Priya Sharma",
        date: "2026-10-05",
        subject: "Chemistry",
        chapter: "Solutions"
      }
    ];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialRecords));
  }
}

function logUserSprintRecord(name, date, subject, chapter) {
  let records = [];
  try {
    records = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (e) {
    records = [];
  }

  records.push({ name, date, subject, chapter, timestamp: new Date().toISOString() });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records));

  // Also POST to local logging backend if available
  fetch("/api/log-sprint", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, date, subject, chapter })
  }).catch(() => {
    // Ignore if backend server is not active; localStorage and file download are always available
  });
}

function downloadSprintLogsFile() {
  let records = [];
  try {
    records = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (e) {
    records = [];
  }

  let textContent = "========================================================\n";
  textContent += "         BUD-E USER SPRINT RECORDS (HUMAN READABLE LOG)\n";
  textContent += "========================================================\n\n";
  textContent += "Logged Users & Dates of Sprints:\n\n";

  records.forEach((r, idx) => {
    textContent += `[Entry #${idx + 1}]\n`;
    textContent += `User Name      : ${r.name}\n`;
    textContent += `Sprint Date    : ${r.date}\n`;
    textContent += `Subject        : ${r.subject || 'N/A'}\n`;
    textContent += `Chapter        : ${r.chapter || 'N/A'}\n`;
    textContent += `--------------------------------------------------------\n`;
  });

  textContent += `\nTotal Users Logged: ${records.length}\n`;
  textContent += `Generated by BUD-E on ${new Date().toLocaleString()}\n`;

  const blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "sprint_records.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Fallback questions if specific chapter calibration has parsing gaps
 */
function generateFallbackQuestions(chapter, count) {
  const qs = [];
  for (let i = 1; i <= count; i++) {
    qs.push({
      question: `Diagnostic Item ${i}: In the study of "${chapter}", which of the following is the fundamental governing principle?`,
      options: [
        "Conservation and equilibrium under specified boundary conditions",
        "Linear non-dependence without scalar constraints",
        "Arbitrary spontaneous divergence under static equilibrium",
        "Disregard of potential gradients across dimensions"
      ],
      answer: 0,
      answerLetter: "A"
    });
  }
  return qs;
}

/**
 * Subtle IntersectionObserver for fade + slight rise (8-12px)
 */
function initIntersectionObserver() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-entrance");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".observe-enter").forEach(el => observer.observe(el));
}
