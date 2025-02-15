let aboutMeVisible = false;
let myCodeVisible = false;


function my_code_btn() {
    const myCodeText = document.getElementById("my-code-text");
    myCodeVisible = !myCodeVisible;
    myCodeText.style.display = myCodeVisible ? "block" : "none";

}

function gitHub_btn(){
    window.open("https://github.com/LiveLongFlame");
}


function linkedIn_btn(){
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

   // if (sectionId === "my-code-text") {
   //     if (topNav) {
   //         topNav.style.backgroundColor = "#405e7d"; 
   //     } else {
   //         console.warn('Element with ID "top_nav" not found.');
   //     }
   // }
}


function path_finding_repo(){
    window.open("https://github.com/LiveLongFlame/Personal-Projects");
}

function cs50_project_repo() {
    window.open("https://github.com/LiveLongFlame/cs50_final_project");
  }

  function personal_website_repo(){
    window.open("https://github.com/LiveLongFlame/Personal-Website");
}

function budget_tracker_repo(){
    window.open("https://github.com/LiveLongFlame/Budget-Tracker");

}