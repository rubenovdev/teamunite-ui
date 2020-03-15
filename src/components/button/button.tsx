import React from 'react'
import styles from './button.module.scss'

interface Props {
  buttonStyle: string
  text: string
}

const Button = ({ text, buttonStyle }: Props): JSX.Element => {
  return (
    <button className={styles[buttonStyle]} type="button">
      {text}
    </button>
  )
}

export default Button
