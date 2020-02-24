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
      <Modal>
        <h1>Hello</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In deserunt
          corrupti autem dolor nulla ipsam officia consequuntur, laborum porro
          aspernatur hic nostrum inventore unde ea tenetur alias aliquam
          eligendi itaque.
        </p>
      </Modal>
    </div>
  )
}

export default App
