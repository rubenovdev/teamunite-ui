import React, { FC } from 'react'
import classNames from 'classnames'

import styles from './Button.module.scss'

const Button: FC<Props> = ({ type, style, isDisabled = false, text, onClick, isLarge = false, className }) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      style={{ width: isLarge && '480px' }}
      className={classNames(styles.button, styles[style], className)}
    >
      {text}
    </button>
  )
}

export default Button

interface Props {
  type: 'button' | 'submit' | 'reset'
  style: 'primary' | 'secondary' | 'delete'
  isDisabled?: boolean
  text: string
  onClick?: () => void
  isLarge?: boolean
  className?: string
}
