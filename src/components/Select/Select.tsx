import React, { FC, ChangeEvent } from 'react'
import classNames from 'classnames'

import styles from './Select.module.scss'

const Select: FC<Props> = ({ label, name, value, onChange, isLarge = false, options, selectGroupClassName }) => {
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
        style={{ width: isLarge ? '480px' : '240px' }}
        className={styles.select}
      >
        {options.map(({ text, value: optionValue }) => {
          return (
            <option key={optionValue} value={optionValue} selected={!optionValue} disabled={!optionValue}>
              {text}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Select

interface Props {
  label?: string
  name?: string
  value: string | number
  onChange: (e?: ChangeEvent<HTMLSelectElement>) => void
  isLarge?: boolean
  options: {
    text: string
    value: string
  }[]
  selectGroupClassName?: unknown
}
