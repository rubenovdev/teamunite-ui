import React, { FC, useState } from 'react'

import CustomCheckbox from '../CustomCheckbox/CustomCheckbox'
import styles from './ProjectSearchFilterItems.module.scss'

const ProjectSearchFilterItems: FC<Props> = ({ items }) => {
  const preview = items.length > 5 ? items.slice(0, 5) : []

  const [isFull, setIsFull] = useState(false)

  return (
    <div className={styles.items}>
      {(isFull ? items : preview).map((item, index) => (
        <CustomCheckbox key={index} text={item} />
      ))}
      {preview.length > 0 ? (
        <button
          className={styles.allFiltersButton}
          onClick={() => (isFull ? setIsFull(false) : setIsFull(true))}
        >
          {isFull ? 'Скрыть' : 'Показать еще'}
        </button>
      ) : null}
    </div>
  )
}

export default ProjectSearchFilterItems

interface Props {
  items: Array<string>
}
