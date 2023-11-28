let closeBtn = document.querySelector('.mobile-nav__close-container')
let mobileMenu = document.querySelector('.mobile-nav__menu')
let openBtn = document.querySelector('.mobile-nav__btn')
let html = document.querySelector('html')

closeBtn.addEventListener("click", () => {
  mobileMenu.style.left = "-100%";
  html.style.overflowY = "unset";
})

openBtn.addEventListener("click", () => {
  mobileMenu.style.left = "0px";
  html.style.overflowY = "hidden";
})