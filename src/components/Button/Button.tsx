import React from 'react'
import styles from './Button.module.scss'

const Button = ({ text, buttonStyle }: Props): JSX.Element => {
  return (
    <button className={styles[buttonStyle]} type="button">
      {text}
    </button>
  )
}

export default Button

interface Props {
  buttonStyle: string
  text: string
}
