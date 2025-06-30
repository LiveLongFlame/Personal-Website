let aboutMeVisible = false;
let myCodeVisible = false;
function showSection(sectionName) {
    const sections = {
        about: document.getElementById("about_me"),
        projects: document.getElementById("my-code-text"),
        contact: document.getElementById("contact_info"),
    };

    const home = document.getElementById("home_info");
    const navButtons = document.getElementById("top_nav_buttons");

    // Hide home
    home.classList.remove("visible");
    home.style.display = "none";

    // Set nav to horizontal layout
    navButtons.classList.add("horizontal-layout");

    // Hide all sections
    Object.values(sections).forEach(section => {
        section.classList.remove("visible");
        section.style.display = "none";
    });

    // Show the selected section after short delay
    setTimeout(() => {
        const selected = sections[sectionName];
        selected.style.display = "block"; // Must set this before fade in
        setTimeout(() => {
            selected.classList.add("visible");
        }, 20); // delay to allow display to apply
    }, 200);
}
// Navigation
document.getElementById("about_me_btn").onclick = function () {
    showSection("about");
};

document.getElementById("my_code_btn").onclick = function () {
    showSection("projects");
};

document.getElementById("contact_btn").onclick = function () {
    showSection("contact");
};

document.getElementById("home_info_btn").onclick = function () {
    location.reload(); // refresh resets all layout/state
};

function gitHub_btn() {
    window.open("https://github.com/LiveLongFlame");
}

function linkedIn_btn() {
    window.open("https://www.linkedin.com/in/valentino-osorio-schwarz-b05842258/");
}
function path_finding_repo() {
    window.open("https://github.com/LiveLongFlame/Personal-Projects");
}

function cs50_project_repo() {
    window.open("https://github.com/LiveLongFlame/cs50_final_project");
}

function personal_website_repo() {
    window.open("https://github.com/LiveLongFlame/Personal-Website");
}

function budget_tracker_repo() {
    window.open("https://github.com/LiveLongFlame/Budget-Tracker");
}

