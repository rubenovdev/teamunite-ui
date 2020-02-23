import React from 'react'
import styles from './button.module.scss'

const Button = (props: any) => {
  return (
    <button className={styles.button} type="button">
      {props.text}
    </button>
  )
}

export default Button
