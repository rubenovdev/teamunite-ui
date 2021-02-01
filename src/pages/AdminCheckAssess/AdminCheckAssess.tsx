import React, { FC } from 'react'
import useInput from '../../hooks/useInput'
import AdminCheckAssessGroup from './AdminCheckAssessGroup/AdminCheckAssessGroup'
import Input from 'components/common/Input/Input'

import styles from './AdminCheckAssess.module.scss'
import { GROUPS } from '../../static/AdminCheckAssessStatic'

const AdminCheckAssess: FC = () => {
  const nameSearch = useInput('')

  return (
    <>
      <h2 className={styles.title}>Проверка очень сложный проект</h2>
      <Input
        type="text"
        placeholder="Поиск"
        value={nameSearch.value}
        onChange={nameSearch.onChange}
        inputGroupClassName={styles.searchStudentInput}
      />
      {GROUPS.map(({ group, students }, index) => {
        return <AdminCheckAssessGroup key={index} group={group} students={students} nameSearch={nameSearch.value} />
      })}
    </>
  )
}

export default AdminCheckAssess
