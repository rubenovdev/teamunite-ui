import React, { FC } from 'react'
import classNames from 'classnames'

import styles from './Toggle.module.scss'

const Toggle: FC<Props> = ({ label, name, isChecked = false, onChange, toggleWrapperClassName }) => {
  return (
    <div className={classNames(styles.toggleWrapper, toggleWrapperClassName)}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <label htmlFor={name} className={styles.toggle}>
        <input type="checkbox" id={name} defaultChecked={isChecked} onChange={onChange} className={styles.checkbox} />
        <span className={styles.slider}></span>
      </label>
    </div>
  )
}

export default Toggle

interface Props {
  label?: string
  name: string
  isChecked?: boolean
  onChange?: () => void
  toggleWrapperClassName?: string
}
