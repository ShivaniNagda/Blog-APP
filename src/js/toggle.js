let togglebutton = document.querySelector(".menu-toggle");

function toggleMenu(){
    document.querySelector(".nav-section").classList.toggle("active");
    document.querySelector(".social-icons").classList.toggle("active");
    document.querySelector(".login-signup").classList.toggle("active");

}
togglebutton.addEventListener('click',toggleMenu);