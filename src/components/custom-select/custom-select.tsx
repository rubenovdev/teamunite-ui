import React, { FC, useState, useMemo, useRef, useEffect } from 'react'
import classNames from 'classnames'
import styles from './custom-select.module.scss'
import arrow from '../../assets/images/select-arrow.svg'

interface Props {
  title: string
  list: Array<string>
  selectStyle: string
  selectedItem(title: string): void
}

const CustomSelect: FC<Props> = ({
  title,
  list,
  selectedItem,
  selectStyle,
}) => {
  const [listOpen, setListOpen] = useState<boolean>(false)
  const [headerTitle, setHeaderTitle] = useState<string>(title)
  const optionList = useMemo(
    (): Array<string> => list.filter(item => item !== headerTitle),
    [headerTitle]
  )

  const toggleList = (): void => setListOpen(!listOpen)

  const selectRef = useRef<HTMLLabelElement>(null)

  const handleClickOutside = (event: any): void => {
    if (selectRef.current !== null && !selectRef.current.contains(event.target))
      setListOpen(false)
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return function cleanup() {
      document.removeEventListener('click', handleClickOutside)
    }
  })

  return (
    <label
      ref={selectRef}
      className={classNames(styles.selectWrapper, styles[selectStyle])}
    >
      <div
        className={
          listOpen
            ? classNames(styles.selectHeader, styles.selectHeaderOpen)
            : styles.selectHeader
        }
        onClick={() => toggleList()}
      >
        <div className={styles.selectHeaderTitle}>{headerTitle}</div>
        {listOpen ? (
          <div className={styles.arrow}>
            <img
              style={{ transform: 'rotate(180deg)' }}
              src={arrow}
              alt="стрелка вверх"
            />
          </div>
        ) : (
          <div className={styles.arrow}>
            <img src={arrow} alt="стрелка вниз" />
          </div>
        )}
      </div>
      {listOpen && (
        <ul className={styles.selectList}>
          {optionList.map((item, index) => (
            <li
              key={index}
              className={styles.selectListItem}
              onClick={() => {
                setHeaderTitle(item)
                selectedItem(item)
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </label>
  )
}

export default CustomSelect
