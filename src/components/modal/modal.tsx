import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'
import styles from './modal.module.scss'
import CloseButton from '../close-button'

interface Props {
  title: string
  content: JSX.Element
  action: JSX.Element
  onEscape: (e: React.KeyboardEvent) => void
  ref: React.Ref<unknown>
}

const Modal: React.FC<Props> = forwardRef(
  ({ title, content, action, onEscape }, ref) => {
    const [display, setDisplay] = useState<boolean>(false)

    useImperativeHandle(ref, (): {
      openModal: () => void
      closeModal: () => void
    } => ({ openModal, closeModal }))

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
            <div
              className={styles.modalWrapper}
              tabIndex={0}
              onKeyDown={onEscape}
            >
              <div onClick={closeModal} className={styles.modalBackdrop} />
              <div className={styles.modalBox}>
                <span onClick={closeModal} className={styles.closeButton}>
                  <CloseButton />
                </span>
                <h2 className={styles.modalTitle}>{title}</h2>
                {content}
                {action}
              </div>
            </div>,
            document.querySelector('#modal-root') as HTMLElement
          )}
      </>
    )
  }
)

export default Modal
