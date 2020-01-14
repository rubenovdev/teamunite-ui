'use strict'

// временно
const buttonToSentForm = document.querySelector('.modal__button')
buttonToSentForm.addEventListener('click', () => {event.preventDefault()})
//


const buttonsToCallModal = [...document.querySelectorAll('[data-button-to-call-modal]')]
const buttonsToCloseModal = [...document.querySelectorAll('[data-button-to-close-modal]')]
const body = document.body
let openedModal = ''

function showModal(event) {
    const targetButton = event.target
    const modalName = targetButton.dataset.buttonToCallModal

    if (!modalName) return

    const modal = document.querySelector(`[data-${ modalName }`)

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