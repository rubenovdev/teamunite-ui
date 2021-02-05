import React, { FC } from 'react'
import Table from 'components/common/Table/Table'
import Input from 'components/common/Input/Input'

import styles from './AdminCheckStudentCriterias.module.scss'
import { COLUMNS, REPORT1, REPORT2 } from '../../../static/AdminCheckStudentStatic'

const AdminCheckStudentCriterias: FC = () => {
  return (
    <div className={styles.box}>
      <h3 className={styles.boxTitle}>Критерии</h3>
      <div className={styles.boxBody}>
        <div className={styles.criteria}>
          <h4 className={styles.criteriaTitle}>1. Стуктура и реализация проекта</h4>
          <div className={styles.tables}>
            <Table columns={COLUMNS} data={REPORT1} isBig />
            <div className={styles.checkTable}>
              <p className={styles.checkTableTitle}>Ваш балл</p>
              <Input
                type="number"
                inputWidth={134}
                placeholder="Введите число"
                inputGroupClassName={styles.checkTableInput}
              />
              <Input
                type="number"
                inputWidth={134}
                placeholder="Введите число"
                inputGroupClassName={styles.checkTableInput}
              />
            </div>
          </div>
        </div>
        <div className={styles.criteria}>
          <h4 className={styles.criteriaTitle}>2. Документация</h4>
          <div className={styles.tables}>
            <Table columns={COLUMNS} data={REPORT2} isBig />
            <div className={styles.checkTable}>
              <p className={styles.checkTableTitle}>Ваш балл</p>
              <Input
                type="number"
                inputWidth={134}
                placeholder="Введите число"
                inputGroupClassName={styles.checkTableInput}
              />
              <Input
                type="number"
                inputWidth={134}
                placeholder="Введите число"
                inputGroupClassName={styles.checkTableInput}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminCheckStudentCriterias
