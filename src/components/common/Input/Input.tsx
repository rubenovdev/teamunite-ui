import React, { ForwardRefRenderFunction, forwardRef, Ref, ChangeEvent, KeyboardEvent, FocusEvent } from 'react'
import classNames from 'classnames'

import styles from './Input.module.scss'

const Input: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  {
    label,
    name,
    type,
    placeholder,
    value,
    onChange,
    onKeyDown,
    onBlur,
    error,
    isError,
    inputGroupClassName,
    inputWidth,
  },
  ref
) => {
  return (
    <div className={classNames(styles.inputGroup, inputGroupClassName)}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <div className={styles.mainContent}>
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
          ref={ref}
          style={{ width: `${inputWidth || 480}px` }}
          className={classNames(styles.input, value && styles.inputActive, (error || isError) && styles.inputError)}
        />
        {error && <span className={styles.errorMessage}>* {error}</span>}
      </div>
    </div>
  )
}

type Props = {
  label?: string
  name?: string
  type: string
  placeholder?: string
  value?: string | number
  defaultValue?: string | number
  onChange?: (event?: ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (event?: KeyboardEvent<HTMLInputElement>) => void
  onBlur?: (event?: FocusEvent<HTMLInputElement>) => void
  isError?: boolean
  error?: string
  inputGroupClassName?: string
  inputWidth?: number
  ref?: Ref<HTMLInputElement>
}

export default forwardRef(Input)
