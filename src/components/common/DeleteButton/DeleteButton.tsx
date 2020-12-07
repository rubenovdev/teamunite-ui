import React, { FC } from 'react'
import classNames from 'classnames'

import styles from './DeleteButton.module.scss'

const DeleteButton: FC<Props> = ({ type, onClick, className }) => {
  return <button type={type} onClick={onClick} className={classNames(styles.button, className)}></button>
}

export default DeleteButton

interface Props {
  type: 'button' | 'submit' | 'reset'
  onClick?: () => void
  className?: string
}
