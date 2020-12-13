import React, { FC, ChangeEvent } from 'react'
import classNames from 'classnames'

import styles from './Input.module.scss'

const Input: FC<Props> = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
  inputGroupClassName,
  inputWidth,
  required,
}) => {
  return (
    <div className={classNames(styles.inputGroup, inputGroupClassName)}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <div className={styles.mainContent}>
        <input
          required={required}
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={{ width: `${inputWidth || 480}px` }}
          className={classNames(styles.input, value && styles.inputActive, error && styles.inputError)}
        />
        {error && <span className={styles.errorMessage}>* {error}</span>}
      </div>
    </div>
  )
}

export default Input

interface Props {
  label?: string
  name?: string
  type: string
  placeholder?: string
  value?: string | number
  onChange?: (e?: ChangeEvent<HTMLInputElement>) => void
  error?: string
  inputGroupClassName?: string
  inputWidth?: number
  required?: boolean
}
