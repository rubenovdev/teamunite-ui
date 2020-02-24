import React from 'react'
import styles from './modal.module.scss'

interface Props {
  children: React.HTMLAttributes<HTMLDivElement>
}

const Modal: React.FC = () => {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalBackdrop} />
      <div className={styles.modalBox}></div>
    </div>
  )
}

export default Modal
