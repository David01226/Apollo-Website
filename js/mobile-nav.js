let closeBtn = document.querySelector('.mobile-nav__close-container')
let mobileMenu = document.querySelector('.mobile-nav__menu')
let openBtn = document.querySelector('.mobile-nav__btn')

closeBtn.addEventListener("click", () => {
  mobileMenu.style.left = "-100%";
})

openBtn.addEventListener("click", () => {
  mobileMenu.style.left = "0px";
})