import React, { ForwardRefRenderFunction, forwardRef, Ref } from 'react'
import classNames from 'classnames'

import styles from './Toggle.module.scss'

const Toggle: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { label, name, isChecked = false, onChange, toggleWrapperClassName },
  ref
) => {
  return (
    <div className={classNames(styles.toggleWrapper, toggleWrapperClassName)}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <label htmlFor={name} className={styles.toggle}>
        <input
          type="checkbox"
          id={name}
          name={name}
          defaultChecked={isChecked}
          ref={ref}
          onChange={onChange}
          className={styles.checkbox}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  )
}

interface Props {
  label?: string
  name: string
  isChecked?: boolean
  onChange?: () => void
  toggleWrapperClassName?: string
  ref?: Ref<HTMLInputElement>
}

export default forwardRef(Toggle)
