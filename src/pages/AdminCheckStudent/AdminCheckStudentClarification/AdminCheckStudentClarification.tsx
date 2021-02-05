import React, { FC, useState } from 'react'
import Toggle from 'components/common/Toggle/Toggle'
import Input from 'components/common/Input/Input'

import styles from './AdminCheckStudentClarification.module.scss'

const AdminCheckStudentClarification: FC = () => {
  const [isNotApprovedOpen, setIsNotApprovedOpen] = useState(true)

  const onNotApprovedToggleChange = (): void => {
    setIsNotApprovedOpen(prevState => !prevState)
  }

  return (
    <div className={styles.box}>
      <div className={styles.boxHeader}>
        <h3 className={styles.boxTitle}>Вариант задания</h3>
        <Toggle
          name="not-approved"
          label="Не одобрено"
          isChecked
          toggleWrapperClassName={styles.notApprovedToggle}
          onChange={onNotApprovedToggleChange}
        />
      </div>
      <div className={styles.boxBody}>
        <p className={styles.projectName}>Магазин кактусов</p>
        {isNotApprovedOpen && (
          <Input label="Причине неодобрения" name="not-approved-input" type="text" placeholder="Введите текст" />
        )}
      </div>
    </div>
  )
}

export default AdminCheckStudentClarification
