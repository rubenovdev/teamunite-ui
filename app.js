'use strict'

const body = document.body
let desktop = document.documentElement.clientWidth > 1024

window.addEventListener('resize', () => {
  desktop = document.documentElement.clientWidth > 1024
})

/* Боковое меню - начало */
const buttonToOpenSideMenu = document.querySelector('.sitetoolbar__button')
const linesOfbuttonToOpenSideMenu = document.querySelector('.sitetoolbar__button-line')
const backgroundCircle = document.querySelector('.sitetoolbar__circle-background')
const sideMenu = document.querySelector('.sitetoolbar__sections')
const sideMenuElements = document.querySelector('.sitetoolbar__sections-list')
const buttonToCloseSideMenu = document.querySelector('.sitetoolbar__close-button')
let timerId = undefined

function openSideMenu() {
  if (desktop) {
    linesOfbuttonToOpenSideMenu.classList.add('sitetoolbar__button-line--active')
    sideMenu.classList.add('sitetoolbar__sections--active')

    clearTimeout(timerId)
    timerId = setTimeout(() => {
      sideMenuElements.classList.add('sitetoolbar__sections-list--active')
    }, 10)
  } else {
    linesOfbuttonToOpenSideMenu.classList.add('sitetoolbar__button-line--active')
    backgroundCircle.classList.add('sitetoolbar__circle-background--active')
    sideMenu.classList.add('sitetoolbar__sections--active')
    body.classList.add('overflow-hidden')

    clearTimeout(timerId)
    timerId = setTimeout(() => {
      sideMenuElements.classList.add('sitetoolbar__sections-list--active')
      buttonToCloseSideMenu.classList.add('sitetoolbar__close-button--active')
    }, 300)
  }

  document.addEventListener('keydown', hideSideMenuByEscape)
  setTimeout(() => {document.addEventListener('click', hideSideMenuByBackgroundClick)}, 10)
}

function hideSideMenuByEscape() {
  if (event.key === 'Escape') closeSideMenu()
}

function hideSideMenuByBackgroundClick(event) {
  const target = event.target
  if (!target.closest('[data-side-menu-element]')) closeSideMenu()
}

function closeSideMenu() {
  if (desktop) {
    linesOfbuttonToOpenSideMenu.classList.remove('sitetoolbar__button-line--active')
    sideMenuElements.classList.remove('sitetoolbar__sections-list--active')
    
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      sideMenu.classList.remove('sitetoolbar__sections--active')
    }, 200)
  } else {
    linesOfbuttonToOpenSideMenu.classList.remove('sitetoolbar__button-line--active')
    buttonToOpenSideMenu.classList.remove('sitetoolbar__button--active')
    sideMenuElements.classList.remove('sitetoolbar__sections-list--active')
    buttonToCloseSideMenu.classList.remove('sitetoolbar__close-button--active')
    body.classList.remove('overflow-hidden')
  
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      sideMenu.classList.remove('sitetoolbar__sections--active')
      backgroundCircle.classList.remove('sitetoolbar__circle-background--active')
    }, 200)
  }

  document.removeEventListener('keydown', hideSideMenuByEscape)
  document.removeEventListener('click', hideSideMenuByBackgroundClick)
}

buttonToOpenSideMenu.addEventListener('click', openSideMenu)
buttonToCloseSideMenu.addEventListener('click', closeSideMenu)
/* Side menu - конец */

/* Модальные окна - начало */
// временно
const buttonToSentForm = document.querySelector('.modal__button') || undefined
buttonToSentForm && buttonToSentForm.addEventListener('click', () => { event.preventDefault() })
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
const hourglass = document.querySelector('.days-timer__picture-wrapper') || undefined
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

  hourglass && hourglass.addEventListener('click', showEasterEgg)
})
/* Пасхалка - конец */