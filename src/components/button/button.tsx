import React from 'react'
import styles from './button.module.scss'

interface Props {
  text: string
}

const Button = (props: Props) => {
  return (
    <button className={styles.button} type="button">
      {props.text}
    </button>
  )
}

export default Button
