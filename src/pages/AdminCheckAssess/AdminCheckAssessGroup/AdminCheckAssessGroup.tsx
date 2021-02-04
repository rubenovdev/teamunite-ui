import React, { FC, useState, useEffect, ChangeEvent } from 'react'
import generatePDFTable from '../../../utils/generatePDFTable'
import Select from 'components/common/Select/Select'
import Button from 'components/common/Button/Button'
import Table from 'components/common/Table/Table'

import styles from './AdminCheckAssessGroup.module.scss'
import { OPTIONS, COLUMNS } from '../../../static/AdminCheckAssessStatic'

const AdminCheckAssessGroup: FC<Props> = ({ group, students, nameSearch }) => {
  const [filteredStudents, setFilteredStudents] = useState(students)
  const [verifiedStatus, setVerifiedStatus] = useState('')

  const onVerifiedSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setVerifiedStatus(event.target.value)
  }

  useEffect(() => {
    setFilteredStudents(
      students.filter(student => {
        if (
          (verifiedStatus === 'verified' && student.mark === 'Отсутствует') ||
          (verifiedStatus === 'not-verified' && student.mark !== 'Отсутствует')
        ) {
          return false
        }
        return student.name.toLowerCase().includes(nameSearch.toLowerCase())
      })
    )
  }, [nameSearch, verifiedStatus])

  const onDownloadListButtonClick = (): void => {
    generatePDFTable(
      ['ФИО', 'Балл', 'Оценка'],
      students.map(({ name, points, mark }) => [name, points, mark]),
      `ведомости_${group}.pdf`
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.groupMeta}>
        <p className={styles.groupNumber}>{group}</p>
        <Select
          options={OPTIONS}
          value={verifiedStatus}
          onChange={onVerifiedSelectChange}
          selectGroupClassName={styles.verifiedSelector}
        />
        <Button type="button" style="primary" text="Скачать ведомость" onClick={onDownloadListButtonClick} />
      </div>
      {filteredStudents.length ? <Table columns={COLUMNS} data={filteredStudents} /> : <p>Нет данных</p>}
    </div>
  )
}

interface Props {
  group: string
  students: any[]
  nameSearch: string
}

export default AdminCheckAssessGroup
