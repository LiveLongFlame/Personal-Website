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