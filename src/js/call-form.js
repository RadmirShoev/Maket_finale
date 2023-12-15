// Переменные  блоков
let mainBlock = document.querySelector('.main-block')
let mobileMenu = document.querySelector('.mobile-menu')

// Переменные Формы обратной связи
let callForm = document.querySelector('.call-block')

let mainCallButton = mainBlock.querySelector('.circle-button--call-img')
let mobileCallButton = mobileMenu.querySelector('.circle-button--call-img')

let callFormCloseButton = callForm.querySelector('.circle-button--close-img')

//Событие открытия формы Главная кнопка
mainCallButton.addEventListener('click', function () {
  let classes = callForm.className.split(/\s+/)

  for (let i = 0; i < classes.length; i++) {
    if (classes[i] === 'call-block--hidden') {
      callForm.classList.remove('call-block--hidden')
    }
  }
})

//Событие открытия формы  кнопка мобильного меню
mobileCallButton.addEventListener('click', function () {
  let classes = callForm.className.split(/\s+/)

  for (let i = 0; i < classes.length; i++) {
    if (classes[i] === 'call-block--hidden') {
      callForm.classList.remove('call-block--hidden')
    }
  }
})
//Событие ЗАКРЫТИЕ формы кнопкой
callFormCloseButton.addEventListener('click', function () {
  callForm.classList.add('call-block--hidden')
})
//Событие ЗАКРЫТИЕ формы клавиатурой
callForm.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    callForm.classList.add('call-block--hidden')
  }
})