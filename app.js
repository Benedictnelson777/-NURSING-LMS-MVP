// App State
const state = {
    currentView: 'dashboard',
    user: appData.user,
    theme: 'light' // Default theme
};

// Ensure examSchedule exists immediately
if (!state.user.examSchedule) {
    state.user.examSchedule = [];
}

// DOM Elements
const contentArea = document.getElementById('content-area');
const pageTitle = document.getElementById('page-title');
const navItems = document.querySelectorAll('.nav-item');
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');

// Initialize
function init() {
    const isFirstRun = !localStorage.getItem('nurseBuddyState');

    loadState(); // Load saved progress
    checkAndUpdateStreak(); // Update streak logic
    setupNavigation();
    setupSidebar();
    renderSidebarProfile(); // Update sidebar with user data

    // Check for mobile and auto-collapse
    if (window.innerWidth <= 768) {
        sidebar.classList.add('collapsed');
    }

    if (isFirstRun) {
        renderOnboarding();
    } else {
        renderDashboard();
    }
}

function renderSidebarProfile() {
    const nameEl = document.querySelector('.user-profile .name');
    const roleEl = document.querySelector('.user-profile .role');
    const imgEl = document.querySelector('.user-profile img');

    if (nameEl) nameEl.textContent = state.user.name;
    if (roleEl) {
        // Format year: "year-1" -> "Year 1"
        const yearParts = (state.user.year || 'year-1').split('-');
        const yearNum = yearParts[1] || '1';
        roleEl.textContent = `Student • Year ${yearNum}`;
    }
    if (imgEl) {
        // regenerate avatar based on new name
        imgEl.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(state.user.name)}&background=random&color=fff`;
    }
}

// Onboarding Logic
let currentStep = 1;
let onboardingData = {
    name: 'Nurse Student',
    year: state.user.year || 'year-1',
    theme: 'light'
};

function renderOnboarding() {
    const modal = document.getElementById('onboarding-modal');
    modal.style.display = 'flex';

    showStep(1);
}

function showStep(step) {
    currentStep = step;
    const content = document.querySelector('.onboarding-content');

    let html = '';

    if (step === 1) {
        html = `
            <div class="onboarding-step active">
                <i class="ph ph-heartbeat" style="font-size: 4rem; color: var(--primary); margin-bottom: 1rem;"></i>
                <h2>Welcome to NurseBuddy</h2>
                <p>Your ultimate companion for nursing excellence. Master your curriculum and ace your exams.</p>
                
                <div class="step-indicator">
                    <div class="step-dot active"></div>
                    <div class="step-dot"></div>
                    <div class="step-dot"></div>
                </div>

                <button class="btn-primary" onclick="showStep(2)" style="width: 100%;">Get Started</button>
            </div>
        `;
    } else if (step === 2) {
        html = `
            <div class="onboarding-step active">
                <h2>About You</h2>
                <p>Let's personalize your experience.</p>
                
                <div class="form-group" style="text-align: left; margin-bottom: 1.5rem;">
                    <label class="form-label">What should we call you?</label>
                    <input type="text" class="form-input" id="onboard-name" placeholder="Enter your name" value="${onboardingData.name}">
                </div>

                <div class="form-group" style="text-align: left; margin-bottom: 2rem;">
                    <label class="form-label">Current Academic Year</label>
                    <select class="form-input" id="onboard-year">
                        <option value="year-1">Year 1</option>
                        <option value="year-2">Year 2</option>
                        <option value="year-3" selected>Year 3</option>
                        <option value="year-4">Year 4</option>
                    </select>
                </div>
                
                <div class="step-indicator">
                    <div class="step-dot"></div>
                    <div class="step-dot active"></div>
                    <div class="step-dot"></div>
                </div>

                <button class="btn-primary" onclick="saveStep2()" style="width: 100%;">Next</button>
            </div>
        `;
    } else if (step === 3) {
        html = `
            <div class="onboarding-step active">
                <h2>Choose Your Style</h2>
                <p>Select the theme that fits your vibe.</p>
                
                <div class="choice-grid">
                    <div class="choice-card ${onboardingData.theme === 'light' ? 'selected' : ''}" onclick="selectTheme('light')">
                        <i class="ph ph-sun"></i>
                        <div>Light Mode</div>
                    </div>
                    <div class="choice-card ${onboardingData.theme === 'dark' ? 'selected' : ''}" onclick="selectTheme('dark')">
                        <i class="ph ph-moon"></i>
                        <div>Dark Mode</div>
                    </div>
                </div>
                
                <div class="step-indicator">
                    <div class="step-dot"></div>
                    <div class="step-dot"></div>
                    <div class="step-dot active"></div>
                </div>

                <button class="btn-primary" onclick="finishOnboarding()" style="width: 100%;">Start Learning</button>
            </div>
        `;
    }

    content.innerHTML = html;
}

// Global functions for onboarding interaction
window.saveStep2 = function () {
    const nameInput = document.getElementById('onboard-name').value;
    const yearInput = document.getElementById('onboard-year').value;

    if (nameInput) onboardingData.name = nameInput;
    if (yearInput) onboardingData.year = yearInput; // Can be used to set initial view in future

    showStep(3);
};

window.selectTheme = function (theme) {
    onboardingData.theme = theme;
    applyTheme(theme); // Instant preview
    showStep(3); // Re-render to show selection
};

window.finishOnboarding = function () {
    // Save to state
    state.user.name = onboardingData.name;
    state.user.year = onboardingData.year;
    state.theme = onboardingData.theme;

    saveState();
    renderSidebarProfile(); // Sync sidebar

    // Animate out
    const modal = document.getElementById('onboarding-modal');
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
        renderDashboard();
    }, 300);
};

function setupSidebar() {
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });

    const mobileToggle = document.getElementById('mobile-menu-toggle');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            // On mobile, "collapsed" means hidden. So toggling it shows/hides it.
            sidebar.classList.toggle('collapsed');
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            // If sidebar is OPEN (not collapsed)
            if (!sidebar.classList.contains('collapsed')) {
                // If click is NOT inside sidebar AND NOT on the mobile toggle button
                if (!sidebar.contains(e.target) && !mobileToggle.contains(e.target)) {
                    sidebar.classList.add('collapsed');
                }
            }
        }
    });

    // Update nav click to close sidebar on mobile
    const navLinks = document.querySelectorAll('.nav-item, .nav-item a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                sidebar.classList.add('collapsed'); // Hide sidebar
            }
        });
    });
}

// Data Persistence
function saveState() {
    const unitsState = {};
    // Iterate all years to save unit status
    for (let i = 1; i <= 4; i++) {
        appData.units[`year${i}`].forEach(u => {
            if (u.completed || u.currContentIndex > 0) {
                unitsState[u.id] = {
                    completed: u.completed,
                    currContentIndex: u.currContentIndex || 0
                };
            }
        });
    }

    const stateToSave = {
        user: {
            name: state.user.name, // Save name
            year: state.user.year, // Save year
            progress: state.user.progress,
            streak: state.user.streak,
            examSchedule: state.user.examSchedule || []
        },
        theme: state.theme, // Save theme
        units: unitsState
    };

    localStorage.setItem('nurseBuddyState', JSON.stringify(stateToSave));
}

function loadState() {
    const saved = localStorage.getItem('nurseBuddyState');
    if (!saved) return;

    try {
        const parsed = JSON.parse(saved);

        // Restore User
        if (parsed.user) {
            if (parsed.user.name) state.user.name = parsed.user.name; // Restore name
            if (parsed.user.year) state.user.year = parsed.user.year; // Restore year
            state.user.progress = parsed.user.progress || 0;
            if (parsed.user.streak) state.user.streak = parsed.user.streak;
            state.user.examSchedule = parsed.user.examSchedule || [];
        }

        // Ensure default
        if (!state.user.examSchedule) state.user.examSchedule = [];

        // Restore Theme
        if (parsed.theme) {
            state.theme = parsed.theme;
            applyTheme(state.theme);
        }

        // Restore Units
        if (parsed.units) {
            for (let i = 1; i <= 4; i++) {
                appData.units[`year${i}`].forEach(u => {
                    const savedUnit = parsed.units[u.id];
                    if (savedUnit) {
                        u.completed = savedUnit.completed;
                        u.currContentIndex = savedUnit.currContentIndex;
                    }
                });
            }
        }

    } catch (e) {
        console.error("Failed to load state", e);
    }
}

// Navigation Handling
function setupNavigation() {
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const view = item.getAttribute('data-view');

            // If it's a view-switching link, prevent default and handle routing
            if (view) {
                e.preventDefault();
                // Remove active class from all
                navItems.forEach(nav => nav.classList.remove('active'));
                // Add to clicked
                item.classList.add('active');

                state.currentView = view;
                handleRoute(view);
            }
            // Otherwise, let the default link behavior happen (e.g. external link)
        });
    });
}

function handleRoute(view) {
    contentArea.innerHTML = ''; // Clear content
    contentArea.className = 'content-area animate-in'; // Add animation class

    // Reset animation
    void contentArea.offsetWidth;

    if (view === 'dashboard') {
        pageTitle.textContent = 'Dashboard';
        renderBreadcrumbs(['Home']);
        renderDashboard();
    } else if (view.startsWith('year-')) {
        const year = view.split('-')[1]; // year-1 -> 1
        pageTitle.textContent = `Year ${year} Units`;
        renderBreadcrumbs(['Home', `Year ${year}`]);
        renderUnits(year);
    } else if (view.startsWith('unit-view-')) {
        const unitId = parseInt(view.split('unit-view-')[1]);
        const { unit, year } = findUnit(unitId);
        renderBreadcrumbs(['Home', `Year ${year}`, unit.title]);
        renderUnitOverview(unitId);
    } else if (view.startsWith('unit-study-')) {
        const parts = view.split('-');
        const unitId = parseInt(parts[2]); // unit-study-{id}
        const { unit, year } = findUnit(unitId);

        let startIndex = 0;
        if (parts.length > 3) startIndex = parseInt(parts[3]);
        const moduleTitle = unit.content[startIndex] ? unit.content[startIndex].title : 'Module';

        renderBreadcrumbs(['Home', `Year ${year}`, unit.title, 'Lesson']);
        renderUnitPlayer(unitId, startIndex);
    } else if (view === 'nclex' || view === 'nck') {
        pageTitle.textContent = view === 'nclex' ? 'NCLEX Prep' : 'NCK Exam Prep';
        renderBreadcrumbs(['Home', 'Exams', pageTitle.textContent]);
        renderExam(view);
    } else if (view === 'settings') {
        pageTitle.textContent = 'Settings';
        renderBreadcrumbs(['Home', 'Settings']);
        renderSettings();
    }
}

// Breadcrumb Navigation
function renderBreadcrumbs(path) {
    const container = document.getElementById('breadcrumbs');
    if (!container) return;

    const html = path.map((item, index) => {
        const isLast = index === path.length - 1;
        // Logic to reconstruct the 'view' for the crumb could be complex. 
        // For simplicity, we'll map names back to views or just simple clicks.
        // A robust system would pass objects { label: 'Year 1', view: 'year-1' }
        // BUT for now, let's just render the visual trail.

        let viewTarget = '';
        if (item === 'Home') viewTarget = 'dashboard';
        else if (item.startsWith('Year')) viewTarget = `year-${item.split(' ')[1]}`;
        // Note: Connecting back to specific units from breadcrumbs requires ID lookup which is tricky here.
        // We will make "Home" and "Year X" clickable.

        let clickAttr = '';
        if (!isLast && viewTarget) {
            clickAttr = `onclick="state.currentView='${viewTarget}'; handleRoute('${viewTarget}')"`;
        }

        return `
            <div class="breadcrumb-item" ${clickAttr}>
                <span>${item}</span>
            </div>
            ${!isLast ? '<i class="ph ph-caret-right breadcrumb-separator"></i>' : ''}
        `;
    }).join('');

    container.innerHTML = html;
}

// Render Functions

// NEW: Renders the Table of Contents / Overview
function renderUnitOverview(unitId) {
    const { unit, year } = findUnit(unitId);
    if (!unit) { contentArea.innerHTML = '<p>Unit not found.</p>'; return; }

    pageTitle.textContent = unit.title;

    // Check content availability
    if (!unit.content || unit.content.length === 0) {
        contentArea.innerHTML = `
            <div style="text-align: center; padding: 3rem;">
                <i class="ph ph-warning-circle" style="font-size: 3rem; color: var(--text-muted);"></i>
                <h3>Content Not Available</h3>
                <p>This unit does not have detailed content uploaded yet.</p>
                <button class="btn-primary" onclick="history.back()" style="margin-top: 1rem;">Go Back</button>
            </div>
        `;
        return;
    }

    // Render TOC
    const html = `
        <div class="unit-overview-container" style="max-width: 800px; margin: 0 auto;">
            <div class="card" style="margin-bottom: 2rem;">
                <div style="display: flex; gap: 1.5rem; align-items: start;">
                    <div style="font-size: 3rem; color: var(--primary); background: var(--bg-body); padding: 1rem; border-radius: var(--radius-md);">
                        <i class="ph ${unit.icon}"></i>
                    </div>
                    <div>
                        <h2 style="margin-bottom: 0.5rem;">${unit.title}</h2>
                        <span class="unit-tag" style="margin-bottom: 1rem; display: inline-block;">${unit.code}</span>
                        <p style="color: var(--text-muted); line-height: 1.6;">
                            ${unit.description || 'Master this unit by completing all lectures and the final quiz.'}
                        </p>
                    </div>
                </div>
            </div>

            <h3 style="margin-bottom: 1rem;">Course Material</h3>
            <div class="toc-list" style="display: flex; flex-direction: column; gap: 0.75rem;">
                ${unit.content.map((item, index) => `
                    <div class="card toc-item" 
                         onclick="state.currentView='unit-study-${unitId}-${index}'; handleRoute('unit-study-${unitId}-${index}')"
                         style="cursor: pointer; display: flex; align-items: center; gap: 1rem; transition: transform 0.2s; border: 1px solid var(--border-light);">
                        
                        <div style="
                            width: 32px; height: 32px; 
                            background: var(--bg-body); 
                            border-radius: 50%; 
                            display: flex; align-items: center; justify-content: center;
                            color: var(--text-muted);">
                            <i class="ph ${getIconForType(item.type)}"></i>
                        </div>
                        
                        <div style="flex: 1;">
                            <h4 style="font-size: 1rem; margin-bottom: 0.2rem;">${item.title}</h4>
                            <span style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">${item.type}</span>
                        </div>

                        <div style="color: var(--primary);">
                            <i class="ph ph-caret-right"></i>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    contentArea.innerHTML = html;
}

// RENAMED from renderUnitView to renderUnitPlayer
function renderUnitPlayer(unitId, startIndex = 0) {
    const { unit } = findUnit(unitId);

    if (!unit) {
        contentArea.innerHTML = '<p>Unit not found.</p>';
        return;
    }

    pageTitle.textContent = unit.title;

    // Use passed startIndex or stored or 0
    // We update stored index too so if they leave and come back they might resume (optional)
    unit.currContentIndex = startIndex;

    if (!unit.content || unit.content.length === 0) {
        // Fallback (should be caught by overview usually)
        contentArea.innerHTML = '<p>No content.</p>';
        return;
    }

    const html = `
        <div class="unit-player-container" style="max-width: 800px; margin: 0 auto; padding-bottom: 3rem;">
            
            <button onclick="state.currentView='unit-view-${unitId}'; handleRoute('unit-view-${unitId}')" 
                class="btn-back">
                <i class="ph ph-arrow-left"></i> Back to Overview
            </button>

            <main class="content-main" id="unit-content-display">
                <!-- Content injected here -->
            </main>
        </div>
    `;

    contentArea.innerHTML = html;

    // Initial load
    loadUnitContent(unitId, unit.currContentIndex);
}

// Helperl to find unit (since used multiple times)
function findUnit(unitId) {
    for (let i = 1; i <= 4; i++) {
        const u = appData.units[`year${i}`].find(u => u.id === unitId);
        if (u) return { unit: u, year: i };
    }
    return { unit: null, year: null };
}

function getIconForType(type) {
    switch (type) {
        case 'intro': return 'ph-info';
        case 'quiz': return 'ph-question';
        default: return 'ph-play-circle';
    }
}

window.loadUnitContent = function (unitId, index) {
    const { unit } = findUnit(unitId);
    if (!unit) return;

    // Update index
    unit.currContentIndex = index;
    saveState(); // Save progress

    const content = unit.content[index];
    const display = document.getElementById('unit-content-display');

    if (content.type === 'quiz') {
        renderUnitQuiz(display, content, unitId);
    } else {
        display.innerHTML = `
            <div class="content-header">
                <h2>${content.title}</h2>
            </div>
            <div class="content-body">
                ${content.body}
            </div>
            <div class="content-navigation">
                <button class="icon-btn" ${index === 0 ? 'disabled' : ''} 
                    onclick="loadUnitContent(${unitId}, ${index - 1})">
                    <i class="ph ph-caret-left"></i> Previous
                </button>
                <div style="font-size: 0.9rem; color: var(--text-muted);">
                    Lesson ${index + 1} of ${unit.content.length}
                </div>
                <button class="btn-primary" 
                    onclick="completeLessonAndNext(${unitId}, ${index})">
                    ${index === unit.content.length - 1 ? 'Finish Unit' : 'Next Lesson <i class="ph ph-caret-right"></i>'}
                </button>
            </div>
        `;
    }
};

window.completeLessonAndNext = function (unitId, currentIndex) {
    const { unit } = findUnit(unitId);
    if (!unit) return;

    // Check if it's the last one
    if (currentIndex >= unit.content.length - 1) {
        // Mark unit complete
        unit.completed = true;
        saveState(); // Save completion
        alert("Congratulations! You have completed this unit.");

        // Redirect back to Overview
        state.currentView = `unit-view-${unitId}`;
        handleRoute(`unit-view-${unitId}`);
    } else {
        // Load next
        loadUnitContent(unitId, currentIndex + 1);
        // Scroll to top
        window.scrollTo(0, 0);
        document.getElementById('content-area').scrollTo(0, 0);
    }
};

function renderUnitQuiz(container, quizContent, unitId) {
    // Reuse quiz container style but adapted for inside unit view
    container.innerHTML = `
        <div class="content-header">
            <h2>${quizContent.title}</h2>
            <p>Complete this quiz to finish the unit.</p>
        </div>
        <div style="max-width: 700px; margin: 0 auto;">
            ${quizContent.questions.map((q, qIdx) => `
                <div class="quiz-question-block" style="margin-bottom: 2rem;">
                    <h3 style="font-size: 1.1rem; margin-bottom: 1rem;">${qIdx + 1}. ${q.q}</h3>
                    <div class="quiz-options">
                        ${q.options.map((opt, oIdx) => `
                            <div class="quiz-option" id="q${qIdx}_opt${oIdx}" 
                                onclick="checkUnitQuizAnswer(this, ${qIdx}, ${oIdx}, ${q.correct})">
                                ${opt}
                            </div>
                        `).join('')}
                    </div>
                    <div id="feedback_q${qIdx}" style="margin-top: 0.5rem; display: none;"></div>
                </div>
            `).join('')}
            
            <button class="btn-primary" style="width: 100%; margin-top: 2rem;" 
                onclick="completeLessonAndNext(${unitId}, ${appData.units.year1[0].content.length - 1})">
                Submit & Finish Unit
            </button>
        </div>
    `;
}

window.checkUnitQuizAnswer = function (elem, qIdx, oIdx, correctIdx) {
    // Simple immediate feedback for demo
    const feedback = document.getElementById(`feedback_q${qIdx}`);
    feedback.style.display = 'block';

    // Reset siblings
    const parent = elem.parentElement;
    Array.from(parent.children).forEach(child => {
        child.style.backgroundColor = 'transparent';
        child.style.borderColor = 'var(--border-light)';
        child.style.color = 'var(--text-main)';
    });

    if (oIdx === correctIdx) {
        elem.style.backgroundColor = 'var(--primary)';
        elem.style.borderColor = 'var(--primary)';
        elem.style.color = 'white';
        feedback.innerHTML = '<span style="color: var(--primary); font-weight: bold;">Correct!</span>';
    } else {
        elem.style.backgroundColor = '#FFEBEE';
        elem.style.borderColor = 'var(--accent-red)';
        feedback.innerHTML = '<span style="color: var(--accent-red); font-weight: bold;">Incorrect.</span>';
    }
};
function isStreakActive() {
    if (!state.user.streak) return false;
    const today = new Date().toISOString().split('T')[0];
    return state.user.streak.lastLogin === today;
}

function checkAndUpdateStreak() {
    // Ensure streak object exists
    if (!state.user.streak) {
        state.user.streak = { count: 1, lastLogin: new Date().toISOString().split('T')[0] };
        saveState();
        return;
    }

    const today = new Date().toISOString().split('T')[0];
    const lastLogin = state.user.streak.lastLogin;

    // If already logged in today, do nothing
    if (lastLogin === today) {
        return;
    }

    // Parse dates to compare
    // Note: Date.parse or new Date("YYYY-MM-DD") is usually UTC. 
    // We want difference in calendar days.
    const d1 = new Date(lastLogin);
    const d2 = new Date(today);

    // Difference in milliseconds
    const diffTime = Math.abs(d2 - d1);
    // Difference in days (approx)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
        // Consecutive day
        state.user.streak.count++;
    } else {
        // Missed > 1 day, reset
        state.user.streak.count = 1;
    }

    state.user.streak.lastLogin = today;
    saveState();
}

function calculateYearProgress(year) {
    const units = appData.units[`year${year}`];
    if (!units || units.length === 0) return 0;
    const completed = units.filter(u => u.completed).length;
    return Math.round((completed / units.length) * 100);
}

// Exam Scheduler Logic
window.handleAddExam = function () {
    const titleInput = document.getElementById('new-exam-title');
    const dateInput = document.getElementById('new-exam-date');

    const title = titleInput.value;
    const date = dateInput.value;

    if (!title || !date) {
        alert("Please enter both a title and a date.");
        return;
    }

    // Ensure array exists
    if (!state.user.examSchedule) state.user.examSchedule = [];

    state.user.examSchedule.push({ id: Date.now(), title, date });
    state.user.examSchedule.sort((a, b) => new Date(a.date) - new Date(b.date));
    saveState();
    renderSettings(); // Re-render list
};

window.deleteExam = function (id) {
    state.user.examSchedule = state.user.examSchedule.filter(e => e.id !== id);
    saveState();
    renderSettings();
};

function getNextExam() {
    if (!state.user.examSchedule || state.user.examSchedule.length === 0) return null;

    // Normalize today to start of day for comparison
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcoming = state.user.examSchedule.filter(e => {
        // Create date from string YYYY-MM-DD which is usually UTC, 
        // but let's treat it simply.
        // Actually new Date("YYYY-MM-DD") is UTC. 
        // Let's use simple string comparison or fix time.
        // Easiest: append T00:00:00 to ensure local or just compare timestamps.
        const examDate = new Date(e.date + 'T00:00:00');
        return examDate >= today;
    });

    return upcoming.length > 0 ? upcoming[0] : null;
}

function renderNextExamWidget() {
    const next = getNextExam();
    if (!next) {
        return `
            <div class="card">
                 <div class="card-icon" style="background: #FFF3E0; color: #E9C46A;">
                    <i class="ph ph-calendar-check"></i>
                </div>
                <h3>Next Exam</h3>
                <h4 class="stat-value" style="font-size: 1.5rem; color: var(--text-muted); margin: 0.5rem 0;">No Exams</h4>
                <p>Schedule one in Settings</p>
            </div>
        `;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const examDate = new Date(next.date + 'T00:00:00');

    const diffTime = examDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let dayText = `${diffDays} Days`;
    if (diffDays === 0) dayText = "Today";
    if (diffDays === 1) dayText = "Tomorrow";

    return `
        <div class="card">
            <div class="card-icon" style="background: #FFF3E0; color: #E9C46A;">
                <i class="ph ph-clock-countdown"></i>
            </div>
            <h3>Next Exam</h3>
            <h4 class="stat-value">${dayText}</h4>
            <p>${next.title}</p>
        </div>
    `;
}

function renderDashboard() {
    // Calculate progress for each year
    const progressY1 = calculateYearProgress(1);
    const progressY2 = calculateYearProgress(2);
    const progressY3 = calculateYearProgress(3);
    const progressY4 = calculateYearProgress(4);

    // Calculate overall progress (average of all years for simplicity, or weighted)
    const overallProgress = Math.round((progressY1 + progressY2 + progressY3 + progressY4) / 4);
    state.user.progress = overallProgress; // Update state

    const html = `
        <div class="welcome-banner">
            <div class="welcome-text">
                <h2>Welcome back, ${state.user.name}!</h2>
                <p>You're making great progress. Keep up the momentum!</p>
            </div>
            <div class="welcome-icon">
                <i class="ph ph-trend-up" style="font-size: 3rem; opacity: 0.8;"></i>
            </div>
        </div>

        <div class="dashboard-grid">

            <div class="card">
                <div class="streak-wrapper">
                    <div class="fire-icon ${isStreakActive() ? 'active' : 'dull'}">
                        <i class="ph ph-fire"></i>
                    </div>
                    <div class="streak-count">${state.user.streak.count} DAYS</div>
                    <div class="streak-label">Daily Streak</div>
                </div>
            </div>

            <div class="card">
                <div class="card-icon" style="background: #E0F2F1; color: #2A9D8F;">
                    <i class="ph ph-chart-donut"></i>
                </div>
                <h3>Overall Progress</h3>
                <h4 class="stat-value">${overallProgress}%</h4>
                <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: ${overallProgress}%"></div>
                </div>
            </div>

            ${renderNextExamWidget()}


        </div>

        <h3>Academic Progress</h3>
        <div class="dashboard-grid" style="margin-top: 1rem; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
            ${renderYearProgressCard(1, "Year One", progressY1)}
            ${renderYearProgressCard(2, "Year Two", progressY2)}
            ${renderYearProgressCard(3, "Year Three", progressY3)}
            ${renderYearProgressCard(4, "Year Four", progressY4)}
        </div>
    `;
    contentArea.innerHTML = html;
}

function renderYearProgressCard(year, title, progress) {
    return `
        <div class="card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <h4 style="font-size: 1rem; color: var(--text-muted);">${title}</h4>
                <span style="font-weight: 700; color: var(--primary);">${progress}%</span>
            </div>
            <div class="progress-bar-bg" style="margin-top: 0.5rem;">
                <div class="progress-bar-fill" style="width: ${progress}%"></div>
            </div>
            <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem;">
                ${progress === 100 ? 'Completed!' : 'Keep going!'}
            </p>
        </div>
    `;
}

function getQuickAccessUnits() {
    // Just grab first 3 units from Year 1 for demo
    const units = appData.units.year1.slice(0, 3);
    return units.map(unit => createUnitCard(unit)).join('');
}

function renderUnits(year) {
    const units = appData.units[`year${year}`];

    if (!units) {
        contentArea.innerHTML = '<p>No units found for this year.</p>';
        return;
    }

    const grid = document.createElement('div');
    grid.className = 'units-grid';
    grid.innerHTML = units.map(unit => createUnitCard(unit, year)).join('');
    contentArea.appendChild(grid);
}

function createUnitCard(unit, yearStr) {
    // yearStr might be undefined if called from quick access, handle if needed or pass strictly
    // For toggle logic, we need to know which array it belongs to or use ID. 
    // Since IDs are unique now (10100 etc), we can just search or pass context if easier.

    // Check state directly just to be safe
    const isCompleted = unit.completed;

    return `
        <div class="unit-card ${isCompleted ? 'completed' : ''}" style="${isCompleted ? 'border: 2px solid var(--primary);' : ''}">
            <div class="unit-image">
                <i class="ph ${unit.icon}"></i>
            </div>
            <div class="unit-content">
                <span class="unit-tag">${unit.code}</span>
                <h3>${unit.title}</h3>
                <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
                    <button class="btn-primary" 
                        onclick="document.querySelector('.nav-item.active')?.classList.remove('active'); state.currentView='unit-view-${unit.id}'; handleRoute('unit-view-${unit.id}')"
                        style="flex: 1;">
                        Study
                    </button>
                    <button class="icon-btn" 
                        onclick="toggleUnitComplete(${unit.id})"
                        style="width: 40px; height: 40px; border-radius: var(--radius-md); background: ${isCompleted ? 'var(--primary-dark)' : 'var(--bg-body)'}; color: ${isCompleted ? 'white' : 'var(--text-muted)'};"
                        title="Mark as Done">
                        <i class="ph ph-check"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Global toggle function
window.toggleUnitComplete = function (id) {
    // Find unit across all years
    let found = false;
    for (let i = 1; i <= 4; i++) {
        const units = appData.units[`year${i}`];
        const unit = units.find(u => u.id === id);
        if (unit) {
            unit.completed = !unit.completed;
            found = true;
            // Re-render current view to show change
            // Using state.currentView to determine what to re-render
            if (state.currentView.startsWith('year-')) {
                const year = state.currentView.split('-')[1];
                renderUnits(year);
            } else if (state.currentView === 'dashboard') {
                renderDashboard();
            }
            saveState(); // Save toggle
            break;
        }
    }

    if (!found) console.error("Unit not found:", id);
};

// Exam State
// Exam State
let examState = {
    active: false,
    type: null,
    bankIndex: 0,
    currentQuestionIndex: 0,
    answers: [], // Array of selected option indices
    startTime: null
};

function renderExam(type) {
    const banks = appData.exams[type]; // Now an array of banks
    if (!banks || banks.length === 0) {
        contentArea.innerHTML = '<p>No exams available for this category.</p>';
        return;
    }

    const title = type === 'nclex' ? 'NCLEX Prep' : 'NCK Exam Prep';
    const description = type === 'nclex'
        ? 'Select a test bank to begin your practice.'
        : 'Select a practice test for the Nursing Council of Kenya exams.';

    const html = `
        <div class="exam-start-container" style="max-width: 800px; margin: 3rem auto;">
            <div style="text-align: center; margin-bottom: 3rem;">
                <div style="font-size: 4rem; color: var(--primary); margin-bottom: 1rem;">
                    <i class="ph ph-student"></i>
                </div>
                <h1 style="margin-bottom: 1rem;">${title}</h1>
                <p style="color: var(--text-muted); line-height: 1.6;">${description}</p>
            </div>
            
            <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                ${banks.map((bank, index) => `
                    <div class="card" style="display: flex; flex-direction: column; height: 100%;">
                        <div style="margin-bottom: 1rem;">
                            <span class="unit-tag">Test Bank ${index + 1}</span>
                            <h3 style="margin-top: 0.5rem; margin-bottom: 0.5rem;">${bank.title}</h3>
                            <p style="font-size: 0.9rem; color: var(--text-muted);">${bank.questions.length} Questions</p>
                        </div>
                        <button class="btn-primary" style="margin-top: auto; justify-content: center;"
                            onclick="startExam('${type}', ${index})">
                            Start Exam
                        </button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    contentArea.innerHTML = html;
}

window.startExam = function (type, bankIndex) {
    const questions = appData.exams[type][bankIndex].questions;
    examState = {
        active: true,
        type: type,
        bankIndex: bankIndex,
        currentQuestionIndex: 0,
        answers: new Array(questions.length).fill(null),
        startTime: Date.now()
    };
    renderExamQuestion();
};

window.renderExamQuestion = function () {
    const questions = appData.exams[examState.type][examState.bankIndex].questions;
    const question = questions[examState.currentQuestionIndex];
    const total = questions.length;
    const currentAnswer = examState.answers[examState.currentQuestionIndex];

    const html = `
        <div class="exam-container" style="max-width: 800px; margin: 0 auto;">
            
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                <span style="font-weight: 600; color: var(--text-muted);">Question ${examState.currentQuestionIndex + 1} of ${total}</span>
                <span class="unit-tag" style="background: var(--bg-surface); border: 1px solid var(--border-light);">
                    <i class="ph ph-timer"></i> Practice Mode
                </span>
            </div>

            <div class="card">
                <h3 style="font-size: 1.25rem; margin-bottom: 1.5rem; line-height: 1.5;">${question.question}</h3>
                
                <div class="quiz-options">
                    ${question.options.map((opt, idx) => `
                        <div class="quiz-option ${currentAnswer === idx ? 'selected' : ''}" 
                            style="${currentAnswer === idx ? 'background: var(--primary-light); border-color: var(--primary); color: var(--primary-dark);' : ''}"
                            onclick="selectExamAnswer(${idx})">
                            <span style="
                                width: 24px; height: 24px; border-radius: 50%; border: 1px solid currentColor; 
                                display: flex; align-items: center; justify-content: center; font-size: 0.8rem; margin-right: 12px;
                            ">${String.fromCharCode(65 + idx)}</span>
                            ${opt}
                        </div>
                    `).join('')}
                </div>
            </div>

            <div style="display: flex; justify-content: space-between; margin-top: 2rem;">
                <button class="icon-btn" style="width: auto; padding: 0 1.5rem; border-radius: var(--radius-md);" 
                    ${examState.currentQuestionIndex === 0 ? 'disabled' : ''}
                    onclick="prevExamQuestion()">
                    <i class="ph ph-caret-left" style="margin-right: 8px;"></i> Previous
                </button>

                ${examState.currentQuestionIndex === total - 1
            ? `<button class="btn-primary" onclick="finishExam()">Submit Exam</button>`
            : `<button class="btn-primary" onclick="nextExamQuestion()">Next <i class="ph ph-caret-right" style="margin-left: 8px;"></i></button>`
        }
            </div>
        </div>
    `;

    contentArea.innerHTML = html;
};

window.selectExamAnswer = function (optionIndex) {
    examState.answers[examState.currentQuestionIndex] = optionIndex;
    renderExamQuestion(); // Re-render to show selection
};

window.nextExamQuestion = function () {
    const questions = appData.exams[examState.type][examState.bankIndex].questions;
    if (examState.currentQuestionIndex < questions.length - 1) {
        examState.currentQuestionIndex++;
        renderExamQuestion();
        window.scrollTo(0, 0);
        document.getElementById('content-area').scrollTo(0, 0);
    }
};

window.prevExamQuestion = function () {
    if (examState.currentQuestionIndex > 0) {
        examState.currentQuestionIndex--;
        renderExamQuestion();
    }
};

window.finishExam = function () {
    const questions = appData.exams[examState.type][examState.bankIndex].questions;
    let score = 0;
    let feedbackHtml = '';

    questions.forEach((q, idx) => {
        const userAnswer = examState.answers[idx];
        const isCorrect = userAnswer === q.correct;
        if (isCorrect) score++;

        feedbackHtml += `
            <div class="card" style="margin-bottom: 1rem; border-left: 4px solid ${isCorrect ? 'var(--primary)' : 'var(--accent-red)'}">
                <div style="font-weight: 600; margin-bottom: 0.5rem;">Q${idx + 1}: ${q.question}</div>
                <div style="display: flex; gap: 1rem; font-size: 0.9rem;">
                    <span style="color: ${isCorrect ? 'var(--primary)' : 'var(--accent-red)'}">
                        Your Answer: ${userAnswer !== null ? q.options[userAnswer] : 'Skipped'}
                    </span>
                    ${!isCorrect ? `<span style="color: var(--text-muted)">Correct: ${q.options[q.correct]}</span>` : ''}
                </div>
            </div>
        `;
    });

    const percentage = Math.round((score / questions.length) * 100);

    // Save completion (could enhance saveState to store exam history)
    // For now just updating progress if needed or just saving state as "active" isn't really needed since exams are ephemeral sessions usually
    // But let's call saveState to ensure any other side effects are safe
    saveState();

    const html = `
        <div class="exam-results-container" style="max-width: 800px; margin: 0 auto; text-align: center;">
            <div class="card" style="padding: 3rem; margin-bottom: 2rem;">
                <div style="font-size: 1rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-muted); margin-bottom: 1rem;">Exam Results</div>
                <div style="font-size: 4rem; font-weight: 700; color: ${percentage >= 80 ? 'var(--primary)' : 'var(--accent-red)'}; margin-bottom: 0.5rem;">
                    ${percentage}%
                </div>
                <p style="font-size: 1.2rem; margin-bottom: 2rem;">
                    You scored ${score} out of ${questions.length}
                </p>
                <button class="btn-primary" onclick="renderExam('${examState.type}')">Retake Exam</button>
                <button class="btn-text" onclick="state.currentView='dashboard'; handleRoute('dashboard')">Back to Dashboard</button>
            </div>

            <h3 style="text-align: left; margin-bottom: 1rem;">Detailed Review</h3>
            <div style="text-align: left;">
                ${feedbackHtml}
            </div>
        </div>
    `;

    contentArea.innerHTML = html;
};

/* =========================================
   Settings & Theme Logic
   ========================================= */

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}

window.toggleTheme = function () {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    applyTheme(state.theme);
    saveState();
};

window.updateUserName = function (input) {
    const newName = input.value.trim();
    if (newName) {
        state.user.name = newName;
        appData.user.name = newName; // Ensure data model is synced
        saveState();
        renderSidebarProfile(); // Sync sidebar immediately
        // Optional: show a toast or feedback
    }
};

window.resetProgress = function () {
    if (confirm("Are you sure you want to reset ALL progress? This cannot be undone.")) {
        localStorage.removeItem('nurseBuddyState');
        location.reload();
    }
};

window.exportData = function () {
    const data = localStorage.getItem('nurseBuddyState');
    if (!data) {
        alert("No progress data found to export.");
        return;
    }

    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nursebuddy_backup_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};

window.triggerImport = function () {
    document.getElementById('import-file').click();
};

window.importData = function (input) {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const json = JSON.parse(e.target.result);
            // Basic validation
            if (json.user && json.units) {
                localStorage.setItem('nurseBuddyState', JSON.stringify(json));
                alert("Data imported successfully! The app will now reload.");
                location.reload();
            } else {
                alert("Invalid backup file. Please use a valid NurseBuddy JSON file.");
            }
        } catch (err) {
            console.error(err);
            alert("Error reading file. It may be corrupted.");
        }
    };
    reader.readAsText(file);
};

function renderSettings() {
    const html = `
        <div class="settings-container" style="max-width: 600px; margin: 0 auto; padding-bottom: 3rem;">
            
            <!-- Appearance -->
            <div class="card" style="margin-bottom: 2rem;">
                <h3 style="margin-bottom: 1.5rem; display: flex; align-items: center; gap: 10px;">
                    <i class="ph ph-paint-brush"></i> Appearance
                </h3>
                
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <div style="font-weight: 600; margin-bottom: 0.25rem;">Dark Mode</div>
                        <div style="color: var(--text-muted); font-size: 0.9rem;">Switch between light and dark themes</div>
                    </div>
                    <label class="switch">
                        <input type="checkbox" ${state.theme === 'dark' ? 'checked' : ''} onchange="toggleTheme()">
                        <span class="slider"></span>
                    </label>
                </div>
            </div>

            <!-- Profile -->
            <div class="card" style="margin-bottom: 2rem;">
                <h3 style="margin-bottom: 1.5rem; display: flex; align-items: center; gap: 10px;">
                    <i class="ph ph-user-circle"></i> Profile
                </h3>
                
                <div class="form-group">
                    <label class="form-label">Display Name</label>
                    <input type="text" class="form-input" value="${state.user.name}" 
                        onchange="updateUserName(this)" placeholder="Enter your name">
                </div>
            </div>

            <!-- Exam Scheduler -->
            <div class="card" style="margin-bottom: 2rem;">
                <h3 style="margin-bottom: 1.5rem; display: flex; align-items: center; gap: 10px;">
                    <i class="ph ph-calendar-plus"></i> Exam Scheduler
                </h3>
                
                <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
                    <input type="text" id="new-exam-title" class="form-input" placeholder="Exam Name" style="flex: 2;">
                    <input type="date" id="new-exam-date" class="form-input" style="flex: 1;">
                    <button class="btn-primary" onclick="handleAddExam()">Add</button>
                </div>

                <div class="exam-list">
                    ${state.user.examSchedule && state.user.examSchedule.length > 0
            ? state.user.examSchedule.map(exam => `
                            <div class="exam-item">
                                <div class="exam-info">
                                    <span class="exam-title">${exam.title}</span>
                                    <span class="exam-date">${new Date(exam.date).toLocaleDateString()}</span>
                                </div>
                                <button class="icon-btn" onclick="deleteExam(${exam.id})" style="color: var(--accent-red); border-color: transparent;">
                                    <i class="ph ph-trash"></i>
                                </button>
                            </div>
                        `).join('')
            : '<p style="color: var(--text-muted); font-size: 0.9rem;">No upcoming exams scheduled.</p>'
        }
                </div>
            </div>

            <!-- Data Management -->
            <div class="card" style="margin-bottom: 2rem;">
                <h3 style="margin-bottom: 1.5rem; display: flex; align-items: center; gap: 10px;">
                    <i class="ph ph-database"></i> Data Management
                </h3>
                
                <div style="background: var(--bg-body); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
                    <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem;">
                        Backup your progress or restore from a previous save file.
                    </p>
                    <div style="display: flex; gap: 1rem;">
                        <button class="btn-primary" onclick="exportData()" style="flex: 1;">
                            <i class="ph ph-download-simple"></i> Export Data
                        </button>
                        <button class="btn-secondary" onclick="triggerImport()" style="flex: 1;">
                            <i class="ph ph-upload-simple"></i> Import Data
                        </button>
                        <input type="file" id="import-file" class="hidden-input" accept=".json" onchange="importData(this)">
                    </div>
                </div>

                <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; border-top: 1px solid var(--border-light); margin-top: 1rem;">
                    <div>
                        <div style="font-weight: 600; margin-bottom: 0.25rem; color: var(--accent-red);">Danger Zone</div>
                        <div style="color: var(--text-muted); font-size: 0.9rem;">Permanently delete all progress</div>
                    </div>
                    <button class="btn-danger" onclick="resetProgress()">Reset App</button>
                </div>
            </div>

            <!-- Support -->
            <div class="card" style="margin-bottom: 2rem;">
                <h3 style="margin-bottom: 1.5rem; display: flex; align-items: center; gap: 10px;">
                    <i class="ph ph-headset"></i> Support
                </h3>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <div style="font-weight: 600; margin-bottom: 0.25rem;">Chat with Building Team</div>
                        <div style="color: var(--text-muted); font-size: 0.9rem;">Report bugs or request features</div>
                    </div>
                    <button class="btn-secondary" onclick="window.open('https://wa.me/254700648622?text=Hello%20Building%20Team')">
                        <i class="ph ph-whatsapp-logo"></i> Chat Now
                    </button>
                </div>
            </div>

            <!-- About -->
            <div style="text-align: center; color: var(--text-muted); padding: 1rem;">
                <h4 style="margin-bottom: 0.5rem; font-weight: 600;">NurseBuddy v1.2</h4>
                <p style="font-size: 0.9rem;">Designed for Nursing Excellence</p>
                <p style="font-size: 0.8rem; margin-top: 0.5rem;">&copy; Benedict Nelson 2026</p>
            </div>

        </div>
    `;

    contentArea.innerHTML = html;
}

// Start App
init();
