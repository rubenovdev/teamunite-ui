import React, { FC } from 'react'
import classNames from 'classnames'

import styles from './CustomButton.module.scss'

const CustomButton: FC<Props> = ({ type, onClick, className, icon }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(styles.button, className)}
      style={{ backgroundImage: `url(${icon})` }}
    >Кнопка</button>
  )
}

export default CustomButton

interface Props {
  type: 'button' | 'submit' | 'reset'
  onClick?: () => void
  className?: string
  icon?: string
}
