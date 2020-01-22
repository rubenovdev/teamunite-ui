'use strict'

/* Переключение шагов в создании проекта - начало */
let currentStep = 1
const firstStepInterface = document.querySelector('.add-project__project-introduction')
const secondStepInterface = document.querySelector('.add-project__project-description')
const thirdStepInterface = document.querySelector('.add-project__vacancies')
const stepsNumbers = [...document.querySelectorAll('.steps__step-number')]
const [buttonToPreviousStep, buttonToNextStep] = [...document.querySelectorAll('.steps__switch-step-button-wrapper')]
const [buttonToPreviousStepTitle, buttonToNextStepTitle] = [...document.querySelectorAll('.steps__switch-step-button-title')]

function switchToNextStep() {
    if (currentStep === 1) {
        firstStepInterface.style.display = 'none'
        secondStepInterface.style.display = 'block'
        buttonToPreviousStepTitle.textContent = 'Назад'
    } else if (currentStep === 2) {
        secondStepInterface.style.display = 'none'
        thirdStepInterface.style.display = 'block'
        buttonToPreviousStepTitle.textContent = 'Назад'
        buttonToNextStepTitle.textContent = 'Завершить'
    } else if (currentStep === 3) {
        window.location.href = '../'
    }

    if (currentStep < 3) currentStep++

    stepsNumbers[currentStep - 1].classList.add('steps__step-number--current')
}

function switchToPreviousStep() {
    if (currentStep === 1) {
        return window.location.href = '../'
    } else if (currentStep === 2) {
        firstStepInterface.style.display = 'block'
        secondStepInterface.style.display = 'none'
        buttonToPreviousStepTitle.textContent = 'Выйти'
    } else if (currentStep === 3) {
        thirdStepInterface.style.display = 'none'
        secondStepInterface.style.display = 'block'
        buttonToPreviousStepTitle.textContent = 'Назад'
        buttonToNextStepTitle.textContent = 'Далее'
    }

    stepsNumbers[currentStep - 1].classList.remove('steps__step-number--current')

    if (currentStep > 1) currentStep--
}

function switchToPreviousStepByEscape(event) {
    if (event.key === 'Escape') switchToPreviousStep()
}

function switchToNextStepByEnter(event) {
    if (event.keyCode === 13) switchToNextStep()
}

buttonToNextStep.addEventListener('click', switchToNextStep)
buttonToPreviousStep.addEventListener('click', switchToPreviousStep)
document.addEventListener('keydown', switchToPreviousStepByEscape)
document.addEventListener('keydown', switchToNextStepByEnter)
/* Переключение шагов в создании проекта - конец */