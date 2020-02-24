import React, { useState } from 'react'
import ReactDOM, { createPortal } from 'react-dom'
import styles from './modal.module.scss'

interface Props {
  children: React.HTMLAttributes<HTMLElement>
}

const Modal: React.FC<Props> = ({ children }) => {
  const [display, setDisplay] = useState<boolean>(true)

  const openModal = () => {
    setDisplay(true)
  }

  const closeModal = () => {
    setDisplay(false)
  }

  return (
    <>
      {display &&
        createPortal(
          <div className={styles.modalWrapper}>
            <div onClick={closeModal} className={styles.modalBackdrop} />
            <div className={styles.modalBox}>{children}</div>
          </div>,
          document.querySelector('#modal-root') as HTMLElement
        )}
    </>
  )
}

export default Modal
