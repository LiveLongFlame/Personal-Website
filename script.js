// Toggle project details row (optional for expanding row)
function toggleProject(id) {
    const desc = document.getElementById(id + '-desc');
    // Example: expand/collapse description dynamically
    if (desc.style.whiteSpace === "normal") {
        desc.style.whiteSpace = "nowrap";
        desc.style.overflow = "hidden";
        desc.style.textOverflow = "ellipsis";
    } else {
        desc.style.whiteSpace = "normal";
        desc.style.overflow = "visible";
        desc.style.textOverflow = "clip";
    }
}

// Example: Load README descriptions dynamically
const projectReadmes = {
    proj1: "Implemented A* pathfinding with visualizations in Python. Optimized for speed and grid-based mazes.",
    proj2: "This personal website is built with HTML, CSS, JS showcasing projects, skills, and achievements.",
    proj3: "CS50 final project: a web-based application combining database and frontend features.",
    proj4: "Budget Tracker: Tracks income and expenses with charts and summaries using JS and PHP backend.",
    proj5: "Terminal-based interactive CLI webpage using ncurses for project showcase.",
    proj6: "Maze Game: Procedural maze generator and solver implemented in C++ with interactive gameplay.",
    proj7: "SERAX Forex Algo: A machine learning algorithm for EFX currency prediction. Currently under development, implementing multi-feature classification and trading strategies."
};

window.onload = () => {
    for (let id in projectReadmes) {
        const el = document.getElementById(id + '-desc');
        if (el) el.textContent = projectReadmes[id];
    }
};

// GitHub buttons
function path_finding_repo() { window.open("https://github.com/LiveLongFlame/AStar-Pathfinding", "_blank"); }
function personal_website_repo() { window.open("https://github.com/LiveLongFlame/personal-website", "_blank"); }
function cs50_project_repo() { window.open("https://github.com/LiveLongFlame/CS50-Final-Project", "_blank"); }
function budget_tracker_repo() { window.open("https://github.com/LiveLongFlame/Budget-Tracker", "_blank"); }
function cli_webpage() { window.open("https://github.com/LiveLongFlame/CLI-Webpage", "_blank"); }
function maze_game() { window.open("https://github.com/LiveLongFlame/Maze-Game", "_blank"); }