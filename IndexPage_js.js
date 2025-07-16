let aboutMeVisible = false;
let myCodeVisible = false;
let currentSection = "home";  // start at home
let currentlyOpen = null;

function loadReadme(projectId, githubUser, repoName) {
    const descContainer = document.getElementById(`${projectId}-desc`);
    const readmeUrl = `https://raw.githubusercontent.com/${githubUser}/${repoName}/main/README.md`;

    fetch(readmeUrl)
        .then(response => {
            if (!response.ok) throw new Error("README not found");
            return response.text();
        })
        .then(markdown => {
            // Optional: Convert Markdown to plain text (or HTML with a library)
            descContainer.innerText = markdown.slice(0, 800) + '...'; // preview only
        })
        .catch(error => {
            descContainer.innerText = "Could not load README.";
        });
}

function toggleProject(id) {
    const details = document.getElementById(id);

    if (currentlyOpen && currentlyOpen !== id) {
        document.getElementById(currentlyOpen).style.display = "none";
    }

    if (details.style.display === "block") {
        details.style.display = "none";
        currentlyOpen = null;
    } else {
        details.style.display = "block";
        currentlyOpen = id;

        // Load README only the first time
        if (!details.dataset.loaded) {
            if (id === "proj1") loadReadme("proj1", "LiveLongFlame", "Personal-Projects");
            else if (id === "proj2") loadReadme("proj2", "LiveLongFlame", "Personal-Website");
            else if (id === "proj3") loadReadme("proj3", "LiveLongFlame", "cs50_final_project");
            else if (id === "proj4") loadReadme("proj4", "LiveLongFlame", "Budget-Tracker");
            else if (id === "proj5") loadReadme("proj5", "LiveLongFlame", "Terminal_Webpage");
            else if (id === "proj6") loadReadme("proj6", "LiveLongFlame", "Maze_game");

            details.dataset.loaded = "true";
        }
    }
}
function updateActiveButton(sectionName) {
	const btnMap = {
		home: document.getElementById("home_info_btn"),
		about: document.getElementById("about_me_btn"),
		projects: document.getElementById("my_code_btn"),
		contact: document.getElementById("contact_btn")
	};

	// Remove .active from all
	Object.values(btnMap).forEach(btn => btn.classList.remove("active"));

	// Add .active to the matching one
	if (btnMap[sectionName]) {
		btnMap[sectionName].classList.add("active");
	}
}
function fadeOutElements(elements, duration = 600) {
    return new Promise(resolve => {
        elements.forEach(el => {
            if (el.classList.contains("visible")) {
                el.classList.remove("visible");
                setTimeout(() => {
                    el.style.display = "none";
                }, duration);
            }
        });
        setTimeout(resolve, duration);
    });
}

function fadeInElement(element) {
    element.style.display = "block";
    setTimeout(() => {
        element.classList.add("visible");
    }, 20);
}

function showSection(sectionName) {
	updateActiveButton(sectionName);
    const sections = {
        about: document.getElementById("about_me"),
        projects: document.getElementById("my-code-text"),
        contact: document.getElementById("contact_info"),
    };

    const headings = {
        about: document.getElementById("about_heading"),
        projects: document.getElementById("project_heading"),
        contact: document.getElementById("contact_heading"),
    };

    const home = document.getElementById("home_info");
    const navButtons = document.getElementById("top_nav_buttons");

    if (currentSection === "home" && sectionName !== "home") {
        // From Home to other section => fade nav buttons, fade home_info + fade in new section + heading
        navButtons.classList.add("fading-out");
        return fadeOutElements([home], 600).then(() => {
            home.classList.remove("visible");
            home.style.display = "none";

            navButtons.classList.add("horizontal-layout");

            // Hide all sections and headings
            Object.values(sections).forEach(s => {
                s.classList.remove("visible");
                s.style.display = "none";
            });
            Object.values(headings).forEach(h => {
                h.classList.remove("visible");
                h.style.display = "none";
            });

            // Show new heading and section
            fadeInElement(headings[sectionName]);
            fadeInElement(sections[sectionName]);

            // Fade nav buttons back in
            navButtons.classList.remove("fading-out");
            navButtons.classList.add("fading-in");

            setTimeout(() => {
                navButtons.classList.remove("fading-in");
            }, 600);

            currentSection = sectionName;
        });
    } else if (currentSection !== "home" && sectionName !== "home") {
        // Between other sections (about/projects/contact) - no nav fade, just fade sections and headings
        return fadeOutElements([sections[currentSection], headings[currentSection]], 400).then(() => {
            fadeInElement(headings[sectionName]);
            fadeInElement(sections[sectionName]);
            currentSection = sectionName;
        });
    } else {
        // Other cases like to home are handled in fadeToHome()
        return Promise.resolve();
    }
}

function fadeToHome() {
    const sections = [
        document.getElementById("about_me"),
        document.getElementById("my-code-text"),
        document.getElementById("contact_info"),
    ];
    const headings = [
        document.getElementById("about_heading"),
        document.getElementById("project_heading"),
        document.getElementById("contact_heading"),
    ];
    const home = document.getElementById("home_info");
    const navButtons = document.getElementById("top_nav_buttons");

    if (currentSection !== "home") {
        navButtons.classList.add("fading-out");

        return fadeOutElements([...sections, ...headings], 600).then(() => {
            // Show home and fade in
            home.style.display = "block";
            setTimeout(() => {
                home.classList.add("visible");
            }, 20);

            // Remove horizontal layout
            navButtons.classList.remove("horizontal-layout");

            // Remove active button highlights
            document.querySelectorAll("#top_nav_buttons button").forEach(btn => btn.classList.remove("active"));

            // Fade nav buttons back in
            navButtons.classList.remove("fading-out");
            navButtons.classList.add("fading-in");

            setTimeout(() => {
                navButtons.classList.remove("fading-in");
            }, 600);

            currentSection = "home";
        });
    }
}

// Navigation button handlers (unchanged)
document.getElementById("about_me_btn").onclick = function () {
    document.getElementById("contact_heading").style.display = "none";
    document.getElementById("about_heading").style.display = "block";
    document.getElementById("project_heading").style.display = "none";

    showSection("about");
};

document.getElementById("my_code_btn").onclick = function () {
    document.getElementById("contact_heading").style.display = "none";
    document.getElementById("about_heading").style.display = "none";
    document.getElementById("project_heading").style.display = "block";

    showSection("projects");
};

document.getElementById("contact_btn").onclick = function () {
    document.getElementById("contact_heading").style.display = "block";
    document.getElementById("about_heading").style.display = "none";
    document.getElementById("project_heading").style.display = "none";

    showSection("contact");
};

document.getElementById("home_info_btn").onclick = function () {
    document.getElementById("contact_heading").style.display = "none";
    document.getElementById("about_heading").style.display = "none";
    document.getElementById("project_heading").style.display = "none";

    fadeToHome();
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
function cli_webpage() {
    window.open("https://github.com/LiveLongFlame/Terminal_Webpage");
}
function maze_game() {
    window.open("https://github.com/LiveLongFlame/Maze_game");
}

