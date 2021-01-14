import React, { ForwardRefRenderFunction, forwardRef, Ref, ChangeEvent } from 'react'
import classNames from 'classnames'

import styles from './Select.module.scss'

const Select: ForwardRefRenderFunction<HTMLSelectElement, Props> = (
  { label, name, value, onChange, isLarge = false, options, selectGroupClassName },
  ref
) => {
  return (
    <div className={classNames(styles.selectGroup, selectGroupClassName)}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        ref={ref}
        style={{ width: isLarge ? '480px' : '240px' }}
        className={styles.select}
      >
        {options.map(({ text, value: optionValue }) => {
          return (
            <option key={optionValue} value={optionValue} disabled={!optionValue} defaultChecked={!optionValue}>
              {text}
            </option>
          )
        })}
      </select>
    </div>
  )
}

interface Props {
  label?: string
  name?: string
  value?: string | number
  onChange?: (event?: ChangeEvent<HTMLSelectElement>) => void
  isLarge?: boolean
  options: {
    text: string
    value: string
  }[]
  selectGroupClassName?: string
  ref?: Ref<HTMLSelectElement>
}

export default forwardRef(Select)
