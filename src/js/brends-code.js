// ПРОГРАММА Работы Кнопки
let readMoreButton = document.querySelector('.read-more-button')
let brendsList = document.querySelector('.brends-list')
let containerForSwiper = document.querySelector('.for-swiper')

//Событие разворачивание сворачивание списка брендов
readMoreButton.addEventListener('click', function () {
  let classes = brendsList.className.split(/\s+/)

  for (let i = 0; i < classes.length; i++) {
    if (classes[i] === 'brends-list--show-part') {
      let classes = brendsList.className.split(/\s+/)

      brendsList.classList.remove('brends-list--show-part')

      readMoreButton.classList.remove('read-more-button--close')
      readMoreButton.classList.add('read-more-button--open')

      readMoreButton.firstChild.data = 'Скрыть'
      console.log('Удаляем brends-list--show-part - Развернуть список')
    } else {
      brendsList.classList.add('brends-list--show-part')

      readMoreButton.classList.remove('read-more-button--open')
      readMoreButton.classList.add('read-more-button--slose')

      readMoreButton.firstChild.data = 'Показать всё'

      console.log('Добавляем brends-list--show-part - Свернуть')
    }
  }
})
