// Переменные  блоков
let mainBlock = document.querySelector('.main-block')
let mobileMenu = document.querySelector('.mobile-menu')

// Переменные Формы обратной связи
let feedbackForm = document.querySelector('.feedback-block')

let mainChatButton = mainBlock.querySelector('.circle-button--chat-img')
let mobileChatButton = mobileMenu.querySelector('.circle-button--chat-img')

let feedbackFormCloseButton = feedbackForm.querySelector(
  '.circle-button--close-img'
)

//Событие открытия формы Главная кнопка
mainChatButton.addEventListener('click', function () {
  let classes = feedbackForm.className.split(/\s+/)

  for (let i = 0; i < classes.length; i++) {
    if (classes[i] === 'feedback-block--hidden') {
      feedbackForm.classList.remove('feedback-block--hidden')
    }
  }
})

//Событие открытия формы  кнопка мобильного меню
mobileChatButton.addEventListener('click', function () {
  let classes = feedbackForm.className.split(/\s+/)

  for (let i = 0; i < classes.length; i++) {
    if (classes[i] === 'feedback-block--hidden') {
      feedbackForm.classList.remove('feedback-block--hidden')
    }
  }
})
//Событие ЗАКРЫТИЕ формы кнопкой
feedbackFormCloseButton.addEventListener('click', function () {
  feedbackForm.classList.add('feedback-block--hidden')
})
//Событие ЗАКРЫТИЕ формы клавиатурой
feedbackForm.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    feedbackForm.classList.add('feedback-block--hidden')
  }
})
