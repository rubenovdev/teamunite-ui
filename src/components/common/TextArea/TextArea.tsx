import React, { ForwardRefRenderFunction, forwardRef, Ref, ChangeEvent } from 'react'
import classNames from 'classnames'

import styles from './TextArea.module.scss'

const TextArea: ForwardRefRenderFunction<HTMLTextAreaElement, Props> = (
  { label, name, placeholder, value, onChange, error, textAreaGroupClassName, textAreaWidth },
  ref
) => {
  return (
    <div className={classNames(styles.textAreaGroup, textAreaGroupClassName)}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <div className={styles.mainContent}>
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          ref={ref}
          onChange={onChange}
          style={{ width: `${textAreaWidth || 480}px` }}
          className={classNames(styles.textArea, value && styles.textAreaActive, error && styles.textAreaError)}
        ></textarea>
        {error && <span className={styles.errorMessage}>* {error}</span>}
      </div>
    </div>
  )
}

interface Props {
  label?: string
  name?: string
  placeholder?: string
  value?: string | number
  onChange?: (event?: ChangeEvent<HTMLTextAreaElement>) => void
  error?: string
  textAreaGroupClassName?: string
  textAreaWidth?: number
  ref?: Ref<HTMLTextAreaElement>
}

export default forwardRef(TextArea)
