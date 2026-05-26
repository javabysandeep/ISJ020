// ============================================================
//  STUDENT PROFILE - DOM Manipulation Mini Project
//  Concepts Covered:
//  1. Selecting elements   → querySelector, getElementById
//  2. Reading inputs       → .value
//  3. Changing content     → textContent, innerHTML
//  4. Changing styles      → element.style, classList
//  5. Creating elements    → createElement, appendChild, prepend
//  6. Removing elements    → removeChild, remove()
//  7. Attributes           → setAttribute, getAttribute
//  8. Event Listeners      → addEventListener (click, input, keydown)
// ============================================================


// ============================================================
// STEP 1 — SELECT ALL ELEMENTS WE NEED
// querySelector  → selects by CSS selector (#id, .class, tag)
// getElementById → selects only by id (slightly faster)
// ============================================================

// --- Form Inputs ---
const inputName   = document.querySelector("#input-name");
const inputRollno = document.querySelector("#input-rollno");
const inputCourse = document.querySelector("#input-course");
const inputMarks  = document.querySelector("#input-marks");
const inputEmail  = document.querySelector("#input-email");
const inputSkill  = document.querySelector("#input-skill");

// --- Buttons ---
const btnCreateProfile = document.getElementById("btn-create-profile");
const btnResetForm     = document.getElementById("btn-reset-form");
const btnAddSkill      = document.getElementById("btn-add-skill");
const btnEdit          = document.getElementById("btn-edit");
const btnToggleTheme   = document.getElementById("btn-toggle-theme");
const btnClearLog      = document.getElementById("btn-clear-log");

// --- Profile Card Elements ---
const profileCard   = document.getElementById("profile-card");
const emptyState    = document.getElementById("empty-state");
const profileAvatar = document.getElementById("profile-avatar");
const cardName      = document.getElementById("card-name");
const cardRollno    = document.getElementById("card-rollno");
const cardCourse    = document.getElementById("card-course");
const cardEmail     = document.getElementById("card-email");
const cardMarks     = document.getElementById("card-marks");
const cardGrade     = document.getElementById("card-grade");
const progressBar   = document.getElementById("progress-bar");
const progressLabel = document.getElementById("progress-label");
const skillsContainer = document.getElementById("skills-container");
const noSkillsMsg   = document.getElementById("no-skills-msg");

// --- Activity Log ---
const activityLog = document.getElementById("activity-log");


// ============================================================
// STEP 2 — HELPER: LOG messages to Activity Log
// DOM Concept: createElement, prepend, setAttribute
// ============================================================
function addLog(message, type = "info") {
    // createElement — creates a new <li> element in memory (not yet on page)
    const logItem = document.createElement("li");

    // classList.add — adds a CSS class to the new element
    logItem.classList.add("log-item", `log-${type}`);

    // textContent — sets the text inside the element
    logItem.textContent = `[${getCurrentTime()}] ${message}`;

    // prepend — adds the new element as the FIRST child (newest on top)
    activityLog.prepend(logItem);
}

// Returns current time as a formatted string
function getCurrentTime() {
    return new Date().toLocaleTimeString();
}


// ============================================================
// STEP 3 — HELPER: Calculate Grade from marks
// ============================================================
function calculateGrade(marks) {
    if (marks >= 90) return { grade: "A+", color: "#2ecc71" };
    if (marks >= 80) return { grade: "A",  color: "#27ae60" };
    if (marks >= 70) return { grade: "B",  color: "#3498db" };
    if (marks >= 60) return { grade: "C",  color: "#f39c12" };
    if (marks >= 50) return { grade: "D",  color: "#e67e22" };
    return             { grade: "F",  color: "#e74c3c" };
}


// ============================================================
// STEP 4 — CREATE PROFILE (Main Feature)
// DOM Concepts: .value, textContent, innerHTML, style, classList
// ============================================================
btnCreateProfile.addEventListener("click", function () {

    // --- Read values from form inputs using .value ---
    const name   = inputName.value.trim();
    const rollno = inputRollno.value.trim();
    const course = inputCourse.value;
    const marks  = parseInt(inputMarks.value);
    const email  = inputEmail.value.trim();

    // --- Basic Validation ---
    if (!name || !rollno || !course || isNaN(marks) || !email) {
        alert("⚠️ Please fill in all fields before creating the profile!");
        addLog("Profile creation failed — incomplete form.", "error");
        return;
    }

    // ---- CHANGE TEXT CONTENT of card elements ----
    // textContent → safe; treats value as plain text (no HTML injection)
    cardName.textContent   = name;
    cardRollno.textContent = rollno;
    cardCourse.textContent = course;
    cardEmail.textContent  = email;
    cardMarks.textContent  = `${marks} / 100`;

    // ---- AVATAR: Show first letter of name ----
    // textContent changes what's displayed inside the element
    profileAvatar.textContent = name.charAt(0).toUpperCase();

    // ---- GRADE: calculate and update ----
    const gradeInfo = calculateGrade(marks);
    cardGrade.textContent = gradeInfo.grade;

    // element.style → directly sets inline CSS property
    cardGrade.style.backgroundColor = gradeInfo.color;

    // ---- PROGRESS BAR: Set width using style ----
    progressBar.style.width = `${marks}%`;
    progressLabel.textContent = `${marks}%`;

    // Change progress bar color based on marks
    if (marks >= 70) {
        progressBar.style.backgroundColor = "#2ecc71";   // green
    } else if (marks >= 50) {
        progressBar.style.backgroundColor = "#f39c12";   // orange
    } else {
        progressBar.style.backgroundColor = "#e74c3c";   // red
    }

    // ---- SHOW the card, HIDE the empty state ----
    // classList.remove → removes a CSS class
    profileCard.classList.remove("hidden");
    // classList.add → adds a CSS class
    emptyState.classList.add("hidden");

    addLog(`Profile created for "${name}" | Marks: ${marks} | Grade: ${gradeInfo.grade}`, "success");
});


// ============================================================
// STEP 5 — ADD SKILL TAGS
// DOM Concepts: createElement, appendChild, removeChild, remove()
// ============================================================
function addSkillTag(skillText) {
    if (!skillText) return;

    // createElement → creates a new <span> in memory
    const tag = document.createElement("span");

    // classList.add → add CSS class for styling
    tag.classList.add("skill-tag");

    // innerHTML → sets HTML content (can include child elements)
    tag.innerHTML = `${skillText} <button class="remove-skill" title="Remove skill">✕</button>`;

    // setAttribute → sets an HTML attribute on the element
    tag.setAttribute("data-skill", skillText);

    // --- Add click listener to the remove (✕) button inside the tag ---
    const removeBtn = tag.querySelector(".remove-skill");
    removeBtn.addEventListener("click", function () {
        // remove() → removes the element itself from the DOM
        tag.remove();
        addLog(`Skill "${skillText}" removed.`, "warning");
        updateNoSkillsMessage();
    });

    // appendChild → adds the new element as the LAST child of skills container
    skillsContainer.appendChild(tag);

    // Hide "No skills" message
    noSkillsMsg.classList.add("hidden");

    addLog(`Skill tag "${skillText}" added to DOM.`, "success");
}

// Button click → add skill
btnAddSkill.addEventListener("click", function () {
    const skill = inputSkill.value.trim();
    if (!skill) {
        alert("⚠️ Please enter a skill name!");
        return;
    }
    addSkillTag(skill);
    // Clear the skill input after adding
    inputSkill.value = "";
    inputSkill.focus();
});

// Press Enter in skill input → also add skill
inputSkill.addEventListener("keydown", function (event) {
    // event.key → detects which key was pressed
    if (event.key === "Enter") {
        btnAddSkill.click();
    }
});

// Show/hide "No skills" message
function updateNoSkillsMessage() {
    const skillTags = skillsContainer.querySelectorAll(".skill-tag");
    if (skillTags.length === 0) {
        noSkillsMsg.classList.remove("hidden");
    }
}


// ============================================================
// STEP 6 — LIVE PREVIEW: Update name as user types
// DOM Concept: addEventListener with "input" event
// ============================================================
inputName.addEventListener("input", function () {
    // This event fires on every keystroke
    const currentValue = inputName.value;

    // Update avatar letter in real-time
    if (currentValue.length > 0) {
        profileAvatar.textContent = currentValue.charAt(0).toUpperCase();
    }

    // If profile card is visible, update name live
    if (!profileCard.classList.contains("hidden")) {
        cardName.textContent = currentValue;
    }
});


// ============================================================
// STEP 7 — EDIT MODE: Toggle between view and edit
// DOM Concept: classList.toggle, setAttribute, getAttribute
// ============================================================
let isEditing = false;

btnEdit.addEventListener("click", function () {
    isEditing = !isEditing;  // flip the flag

    if (isEditing) {
        // Switch to EDIT MODE
        // classList.add → visually mark card as editing
        profileCard.classList.add("editing");

        // Change button text using textContent
        btnEdit.textContent = "💾 Save";

        // Make card details editable using setAttribute
        // setAttribute(attr, value) → sets any HTML attribute
        cardName.setAttribute("contenteditable", "true");
        cardCourse.setAttribute("contenteditable", "true");
        cardEmail.setAttribute("contenteditable", "true");
        cardName.focus();

        addLog("Edit mode ON — card fields are now editable.", "info");

    } else {
        // Switch back to VIEW MODE
        profileCard.classList.remove("editing");
        btnEdit.textContent = "✏️ Edit";

        // Remove contenteditable using removeAttribute
        cardName.removeAttribute("contenteditable");
        cardCourse.removeAttribute("contenteditable");
        cardEmail.removeAttribute("contenteditable");

        addLog(`Profile saved. Name: "${cardName.textContent}"`, "success");
    }
});


// ============================================================
// STEP 8 — RESET FORM
// DOM Concept: value = "", classList, textContent reset
// ============================================================
btnResetForm.addEventListener("click", function () {
    // Reset all input .value properties
    inputName.value   = "";
    inputRollno.value = "";
    inputCourse.value = "";
    inputMarks.value  = "";
    inputEmail.value  = "";
    inputSkill.value  = "";

    // Hide profile card, show empty state
    profileCard.classList.add("hidden");
    emptyState.classList.remove("hidden");

    // Clear all skill tags using innerHTML = ""
    skillsContainer.innerHTML = "";
    noSkillsMsg.classList.remove("hidden");

    // Reset progress bar
    progressBar.style.width = "0%";
    progressLabel.textContent = "0%";

    // Reset avatar
    profileAvatar.textContent = "?";

    addLog("Form reset. All DOM changes cleared.", "warning");
});


// ============================================================
// STEP 9 — DARK MODE TOGGLE
// DOM Concept: classList.toggle on document.body
// ============================================================
btnToggleTheme.addEventListener("click", function () {
    // classList.toggle → adds the class if not present, removes if present
    document.body.classList.toggle("dark-mode");

    // classList.contains → returns true/false if class exists
    const isDark = document.body.classList.contains("dark-mode");

    // Update button text based on current mode
    btnToggleTheme.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";

    addLog(`Theme switched to ${isDark ? "Dark" : "Light"} mode.`, "info");
});


// ============================================================
// STEP 10 — CLEAR LOG
// DOM Concept: innerHTML = "" to remove all children
// ============================================================
btnClearLog.addEventListener("click", function () {
    // innerHTML = "" → removes ALL child elements at once
    activityLog.innerHTML = "";
    addLog("Log cleared.", "info");
});


// ============================================================
// PAGE LOAD — Log a startup message
// ============================================================
addLog("DOM fully loaded. All elements selected and event listeners attached.", "success");
