import React, { useRef } from 'react'
import styles from './app.module.scss'
import Modal from '../modal'

const App = () => {
  const modalRef = useRef() as React.MutableRefObject<{
    openModal: () => void
    closeModal: () => void
  }>

  const openModal = (): void => {
    modalRef.current.openModal()
  }

  const closeModal = (): void => {
    modalRef.current.closeModal()
  }

  return (
    <div>
      <button type="button" onClick={openModal}>
        Добавить
      </button>
      <Modal ref={modalRef}>
        <h2 className={styles.modalTitle}>Hello</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In deserunt
          corrupti autem dolor nulla ipsam officia consequuntur, laborum porro
          aspernatur hic nostrum inventore unde ea tenetur alias aliquam
          eligendi itaque.
        </p>
        <span onClick={closeModal}>&#10005;</span>
      </Modal>
    </div>
  )
}

export default App
