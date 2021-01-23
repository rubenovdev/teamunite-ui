import React, { FC, useEffect, useState } from 'react'

import CustomButton from 'components/common/CustomButton/CustomButton'
import Button from 'components/common/Button/Button'

import styles from './AdminCheckView.module.scss'

import layersIcon from '../../assets/images/layersIcon.svg'

import api from '../../utils/api'

const AdminCheckView: FC = () => {
  function getData() {
    const response = api
      .get('/tasks')
      .then(res => {
        return res.data
      })
      .catch(error => {
        console.log(error)
      })

    return response
  }

  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData()
      setData(data)
    }
    fetchData()
  }, [])

  console.log(data)

  return (
    <div className={styles.container}>
      <h2 className={styles.caption}>Очень сложный проект</h2>
      <div className={styles.buttons}>
        <Button text="Скачать в pdf" type="button" isDisabled style="primary" />
        <Button text="Редактировать" type="button" isDisabled style="primary" />
        <CustomButton type="button" icon={layersIcon} />
      </div>
      <div className={styles.description}>
        <ul>
          <li>
            <h3>Номера групп</h3>
          </li>
          <li>181-322,181-321</li>
        </ul>

        <ul>
          <li>
            <h3>Проверяющие</h3>
          </li>
          <li>Чикунов И.М</li>
        </ul>

        <ul>
          <li>
            <h3>Срок сдачи</h3>
          </li>
          <li>23.02.21</li>
        </ul>

        <ul>
          <h3>Раздача вариантов</h3>
        </ul>

        <ul>
          <h3>Возможность работать в команде</h3>
        </ul>
      </div>
    </div>
  )
}

export default AdminCheckView

interface Data {
  _id: string
  owner: string
  title: string
  groups: [] | any
  curators: [] | any
  retake: boolean
  description: string
  descriptionFile: string
  deadline: any
  comment: string
  quantity: number
  options: number
  fields: [] | any
  marks: [] | any
  criteriaGroups: [] | any
  archive: boolean
  createdAt: any
  updatedAt: any
}
