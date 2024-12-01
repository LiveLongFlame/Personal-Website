let text_showen = false;
function about_me_btn_click(){
    if(text_showen){
        document.getElementById("about-me-text").style.display = "block";
    }else{
        document.getElementById("about-me-text").style.display = "none";
    }
    text_showen  = !text_showen;
}