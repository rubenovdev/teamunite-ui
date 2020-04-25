import React, { FC, useState, useMemo, CSSProperties } from 'react'

import styles from './CustomCheckbox.module.scss'

const CustomCheckbox: FC<Props> = ({ text }) => {
  const [isChecked, setIsChecked] = useState(false)

  const labelStyles = useMemo<CSSProperties>(
    () => ({
      color: '#ffffff',
      backgroundColor: '#242424',
      boxShadow: '0 3px 6px rgba(#000000)',
    }),
    [isChecked]
  )

  const handleChange = () =>
    isChecked ? setIsChecked(false) : setIsChecked(true)

  return (
    <label className={styles.check} style={isChecked ? labelStyles : {}}>
      <input
        type="checkbox"
        className={styles.checkInput}
        checked={isChecked}
        onChange={handleChange}
      />
      {text}
    </label>
  )
}

interface Props {
  text: string
}

export default CustomCheckbox
