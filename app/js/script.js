var menu_btn = document.querySelector(".header__btn")
var menu = document.querySelector(".menu")
var body = document.querySelector(".body")
var overlay = document.querySelector(".menu__overlay")

menu_btn.addEventListener("click", function() {
    menu.classList.toggle("show")
    overlay.classList.toggle("show")
    body.classList.toggle("stop-scroll")
    menu_btn.classList.toggle("show")
})

overlay.addEventListener("click", function() {
    menu.classList.remove("show")
    body.classList.remove("stop-scroll")
    menu_btn.classList.remove("show")
    overlay.classList.remove("show")
})