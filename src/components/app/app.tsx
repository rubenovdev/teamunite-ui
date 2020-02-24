import React from 'react'
import styles from './app.module.scss'
import Modal from '../modal'

const App = () => {
  const openModal = () => {
    console.log('open modal')
  }

  return (
    <div>
      <button type="button" onClick={openModal}>
        Добавить
      </button>
      <Modal />
    </div>
  )
}

export default App
