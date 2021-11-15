var bt1 = document.querySelector(".navbar-brand").addEventListener("click", back_top)
var bt2 = document.querySelector(".backT").addEventListener("click", back_top)
var bt3 = document.querySelector(".nav-link#top1").addEventListener("click", back_top)
var bt4 = document.querySelector(".nav-link#top2").addEventListener("click", back_top)
var bt5 = document.querySelector(".nav-link#top3").addEventListener("click", back_top)
var bt6 = document.querySelector("#bt-dados").addEventListener("click", back_top)

function back_top() {
    window.scrollTo(0,0)
}