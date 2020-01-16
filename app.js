'use strict'

const body = document.body

/* Side menu - начало */
const buttonToOpenSideMenu = document.querySelector('.sitetoolbar__button')
const backgroundCircle = document.querySelector('.sitetoolbar__circle-background')
const sideMenu = document.querySelector('.sitetoolbar__sections')
const sideMenuElements = document.querySelector('.sitetoolbar__sections-list')
const buttonToCloseSideMenu = document.querySelector('.sitetoolbar__close-button')
let timerId = undefined

function openSideMenu() {
  backgroundCircle.classList.add('sitetoolbar__circle-background--active')
  sideMenu.classList.add('sitetoolbar__sections--active')
  body.classList.add('overflow-hidden')
  
  clearTimeout(timerId)
  timerId = setTimeout(() => {
    sideMenuElements.classList.add('sitetoolbar__sections-list--active')
    buttonToCloseSideMenu.classList.add('sitetoolbar__close-button--active')
  }, 300)

  document.addEventListener('keydown', hideSideMenuByEscape)
  document.addEventListener('click', hideSideMenuByBackgroundClick)
}

function hideSideMenuByEscape() {
  if (event.key === 'Escape') closeSideMenu()
}

function hideSideMenuByBackgroundClick(event) {
  const target = event.target
  if (target.classList.value.includes('sitetoolbar__sections')) closeSideMenu()
}

function closeSideMenu() {
  buttonToOpenSideMenu.classList.remove('sitetoolbar__button--active')
  sideMenuElements.classList.remove('sitetoolbar__sections-list--active')
  buttonToCloseSideMenu.classList.remove('sitetoolbar__close-button--active')
  body.classList.remove('overflow-hidden')

  clearTimeout(timerId)
  timerId = setTimeout(() => {
    sideMenu.classList.remove('sitetoolbar__sections--active')
    backgroundCircle.classList.remove('sitetoolbar__circle-background--active')
  }, 200)

  document.removeEventListener('keydown', hideSideMenuByEscape)
  document.removeEventListener('click', hideSideMenuByBackgroundClick)
}

buttonToOpenSideMenu.addEventListener('click', openSideMenu)
buttonToCloseSideMenu.addEventListener('click', closeSideMenu)
/* Side menu - конец */


/* Модальные окна - начало */
// временно
const buttonToSentForm = document.querySelector('.modal__button')
buttonToSentForm.addEventListener('click', () => { event.preventDefault() })
//

const buttonsToCallModal = [...document.querySelectorAll('[data-button-to-call-modal]')]
const buttonsToCloseModal = [...document.querySelectorAll('[data-button-to-close-modal]')]
let openedModal = ''

function showModal(event) {
  const targetButton = event.target
  const modalName = targetButton.dataset.buttonToCallModal

  if (!modalName) return

  const modal = document.querySelector(`[data-${modalName}`)

  openedModal = modal
  modal.classList.add('active')
  body.classList.add('overflow-hidden')

  document.addEventListener('keydown', hideModalByEscape)
  document.addEventListener('click', hideModalByBackgroundClick)
}

function hideModalByEscape(event) {
  if (event.key === 'Escape') hideModal()
}

function hideModalByBackgroundClick(event) {
  const target = event.target
  if (target.classList.contains('modal-wrapper')) hideModal()
}

function hideModal() {
  openedModal.classList.remove('active')
  openedModal = ''
  body.classList.remove('overflow-hidden')

  document.removeEventListener('keydown', hideModalByEscape)
  document.removeEventListener('click', hideModalByBackgroundClick)
}

buttonsToCallModal.forEach(button => button.addEventListener('click', showModal))
buttonsToCloseModal.forEach(button => button.addEventListener('click', hideModal))
/* Модальные окна - конец */

/* Пасхалка - начало */
const hourglass = document.querySelector('.days-timer__picture-wrapper')
const initialSideMenu = sideMenuElements.innerHTML
let changeContent

buttonToOpenSideMenu.addEventListener('click', () => {
  let count = 0

  if (changeContent) {
    sideMenuElements.innerHTML = initialSideMenu
    sideMenuElements.classList.remove('easter-egg')
    changeContent = false
  }

  function showEasterEgg() {
    count++

    if (count === 3) {
      sideMenuElements.innerHTML = 'ЧИКУНОВ one love <span style="color: red; margin-left: 10px; font-size: 32px;">♥️</span>'
      sideMenuElements.classList.add('easter-egg')
      openSideMenu()
      hourglass.removeEventListener('click', showEasterEgg)
      changeContent = true
    }
  }

  hourglass.addEventListener('click', showEasterEgg)
})
/* Пасхалка - конец */