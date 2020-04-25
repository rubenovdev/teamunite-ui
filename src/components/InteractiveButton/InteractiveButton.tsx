import React from 'react'
import classNames from 'classnames'

import styles from './InteractiveButton.module.scss'

const InteractiveButton = ({
  text,
  icon = undefined,
  buttonStyle,
  isActive,
  setIsActive,
}: Props): JSX.Element => {
  const changeColor = () => (isActive ? setIsActive(false) : setIsActive(true))

  return (
    <button
      className={
        isActive
          ? classNames(styles[buttonStyle], styles.activeFilters)
          : styles[buttonStyle]
      }
      type="button"
      onClick={changeColor}
    >
      {icon ? <img className={styles.icon} src={icon} alt={text} /> : text}
    </button>
  )
}

export default InteractiveButton

interface Props {
  buttonStyle: string
  text: string
  icon?: string | undefined
  isActive: boolean
  setIsActive: Function
}
