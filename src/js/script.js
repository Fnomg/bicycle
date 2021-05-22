const menuButton = document.querySelector(".header__button")
const openMenu = document.querySelector(".open-menu")
const closeMenu = document.querySelector(".close-menu")
const nav = document.querySelector('.nav')

menuButton.addEventListener('click', function () {
  if (menuButton.classList.contains('closed')){
    openMenu.style="display: none"
    closeMenu.style="display: block"
    nav.style="display:flex"
  } else {
    openMenu.style="display: block"
    closeMenu.style="display: none"
    nav.style="display:none"
  }
  menuButton.classList.toggle('closed');
  menuButton.classList.toggle('opened');
})