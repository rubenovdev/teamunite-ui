import React, { FC } from 'react'
import classNames from 'classnames'

import styles from './CustomButton.module.scss'

const AddButton: FC<Props> = ({ type, onClick, className, children }) => {
  return <button type={type} onClick={onClick} className={classNames(styles.button, className)}>{children ? children : null}</button>
}

export default AddButton

interface Props {
  type: 'button' | 'submit' | 'reset'
  onClick?: () => void
  className?: string
}
