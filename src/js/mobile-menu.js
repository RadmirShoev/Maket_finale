// Переменные  блоков
let mainBlock = document.querySelector('.header')
let mobileMenu = document.querySelector('.mobile-menu-block')

// Переменные кнопок
let mainBurgerButton = mainBlock.querySelector('.circle-button--burger-img')

let mobileMenuCloseButton = mobileMenu.querySelector(
  '.circle-button--close-img'
)

//Событие открытия меню Главная кнопка
/*mainBurgerButton.addEventListener('click', function () {
  let classes = mobileMenu.className.split(/\s+/)

  for (let i = 0; i < classes.length; i++) {
    if (classes[i] === 'mobile-menu-block--hidden') {
      mobileMenu.classList.remove('mobile-menu-block--hidden')
    }
  }
})*/
mainBurgerButton.addEventListener('click', function () {
  let classes = mobileMenu.className.split(/\s+/)

  mainBurgerButton.classList.add('circle-button--none')

  if (classes[classes.length - 1] === 'mobile-menu-block--hidden') {
    mobileMenu.classList.remove('mobile-menu-block--hidden')
  }
})

//Событие ЗАКРЫТИЕ меню кнопкой
mobileMenuCloseButton.addEventListener('click', function () {
  mobileMenu.classList.add('mobile-menu-block--hidden')
  mainBurgerButton.classList.remove('circle-button--none')
})

//Событие ЗАКРЫТИЕ меню клавиатурой
mobileMenu.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    mobileMenu.classList.add('mobile-menu-block--hidden')
    mainBurgerButton.classList.remove('circle-button--none')
  }
})
