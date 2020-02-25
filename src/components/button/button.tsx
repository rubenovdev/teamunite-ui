import React from 'react'
import styles from './button.module.scss'

interface Props {
  text: string
}

const Button = ({ text }: Props) => {
  return (
    <button className={styles.button} type="button">
      {text}
    </button>
  )
}

export default Button
