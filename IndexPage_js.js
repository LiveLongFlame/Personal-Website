let aboutMeVisible = false;
let myCodeVisible = false;

function showSection(sectionName) {
    const aboutMe = document.getElementById("about_me");
    const projects = document.getElementById("my-code-text");
    const contact = document.getElementById("contact_info");

    // Hide all first
    aboutMe.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";

    if (sectionName === "home") {
        // nothing to show except home_info (which is always visible)
    } else if (sectionName === "about") {
        aboutMe.style.display = "block";
    } else if (sectionName === "projects") {
        projects.style.display = "block";
    } else if (sectionName === "contact") {
        contact.style.display = "block";
    }
}

document.getElementById("home_info_btn").onclick = function () {
    showSection("home");
};

document.getElementById("about_me_btn").onclick = function () {
    showSection("about");
};

document.getElementById("my_code_btn").onclick = function () {
    showSection("projects");
};

document.getElementById("contact_btn").onclick = function () {
    showSection("contact");
};



function gitHub_btn() {
    window.open("https://github.com/LiveLongFlame");
}

function linkedIn_btn() {
    window.open("https://www.linkedin.com/in/valentino-osorio-schwarz-b05842258/");
}

function scrolltoPoint(sectionId) {
    const section = document.getElementById(sectionId);
    const targetPosition = section.offsetTop;
    const topNav = document.getElementById("top_nav");
    topNav.style.backgroundColor = "transparent";

    let currentPosition = window.pageYOffset;
    let distance = targetPosition - currentPosition;
    let duration = 400;
    let startTime = null;

    function scrollAnimation(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
        }

        let timeElapsed = currentTime - startTime;
        let progress = Math.min(timeElapsed / duration, 1);

        window.scrollTo(0, currentPosition + distance * progress);

        if (progress < 1) {
            requestAnimationFrame(scrollAnimation);
        }
    }

    requestAnimationFrame(scrollAnimation);
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

