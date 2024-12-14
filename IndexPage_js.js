let aboutMeVisible = false;
let myCodeVisible = false;

function about_me_btn_click() {
    const aboutMeText = document.getElementById("about-me-text");
    aboutMeVisible = !aboutMeVisible;
    aboutMeText.style.display = aboutMeVisible ? "block" : "none";
}

function my_code_btn() {
    const myCodeText = document.getElementById("my-code-text");
    myCodeVisible = !myCodeVisible;
    myCodeText.style.display = myCodeVisible ? "block" : "none";

}
