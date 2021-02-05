import React, { FC } from 'react'
import classNames from 'classnames'
import AdminCheckStudentClarification from './AdminCheckStudentClarification/AdminCheckStudentClarification'
import AdminCheckStudentCriterias from './AdminCheckStudentCriterias/AdminCheckStudentCriterias'
import Button from 'components/common/Button/Button'

import styles from './AdminCheckStudent.module.scss'

const AdminCheckStudent: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.studentName}>Петров Иван Иванович</h2>
          <p className={styles.status}>
            Статус: <span className={styles.statusMessage}>отправлено на проверку</span>
          </p>
        </div>
        <Button type="button" style="secondary" text="Информация об активности" />
      </div>
      <div className={styles.box}>
        <h3 className={styles.boxTitle}>Команда</h3>
        <div className={styles.boxBody}>
          <ul>
            <li>Иванов Иван Иванович</li>
            <li>Петров Петр Петрович</li>
          </ul>
        </div>
      </div>
      <div className={styles.box}>
        <h3 className={styles.boxTitle}>Вариант задания</h3>
        <div className={styles.boxBody}>
          <p>10</p>
        </div>
      </div>
      <AdminCheckStudentClarification />
      <div className={styles.box}>
        <h3 className={styles.boxTitle}>Поля для сдачи</h3>
        <div className={styles.boxBody}>
          <ul>
            <li>Ссылка на GitHub</li>
            <li>Документация</li>
            <li>Ссылка на проект</li>
          </ul>
        </div>
      </div>
      <AdminCheckStudentCriterias />
      <div className={styles.box}>
        <h3 className={styles.boxTitle}>Итоговый балл</h3>
        <div className={classNames(styles.boxBody, styles.boxBodySmall)}>
          <p>
            <span className={styles.mark}>“отлично”</span> 100
          </p>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button type="button" style="primary" text="Проверено" isLarge className={styles.checkButton} />
        <Button type="button" style="secondary" text="Скачать отчет" isLarge />
      </div>
    </div>
  )
}

export default AdminCheckStudent
