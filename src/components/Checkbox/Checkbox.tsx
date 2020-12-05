import React, { FC } from 'react'
import classNames from 'classnames'

import styles from './Checkbox.module.scss'

const Checkbox: FC<Props> = ({ name, isChecked = false, onChange, className }) => {
  return (
    <label htmlFor={name} className={classNames(styles.checkboxWrapper, className)}>
      <input type="checkbox" id={name} defaultChecked={isChecked} onChange={onChange} className={styles.checkbox} />
      <span className={styles.box}></span>
    </label>
  )
}

export default Checkbox

interface Props {
  name: string
  isChecked?: boolean
  onChange: () => void
  className?: unknown
}
