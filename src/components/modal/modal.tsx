import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'
import styles from './modal.module.scss'

interface Props {
  children: React.HTMLAttributes<HTMLElement>
  ref: React.Ref<unknown>
}

const Modal: React.FC<Props> = forwardRef(({ children }, ref) => {
  const [display, setDisplay] = useState<boolean>(false)

  useImperativeHandle(ref, (): {
    openModal: () => void
    closeModal: () => void
  } => ({
    openModal,
    closeModal,
  }))

  const openModal = (): void => {
    setDisplay(true)
  }

  const closeModal = (): void => {
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
})

export default Modal
