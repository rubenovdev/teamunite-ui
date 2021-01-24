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
      setData(data[0])
    }
    fetchData()
  }, [])

  function renderItems(list) {
    return list.map(item => {
      return <li key={`${data._id}_${item}`}>{item}</li>
    })
  }

  function getTime(time) {
    const date = new Date(time)
    return date
  }

  return data ? (
    <div className={styles.container}>
      <h2 className={styles.caption}>{data.title}</h2>
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
          {renderItems(data.groups)}
        </ul>

        <ul>
          <li>
            <h3>Проверяющие</h3>
          </li>
          {renderItems(data.curators)}
        </ul>

        <ul>
          <li>
            <h3>Срок сдачи</h3>
          </li>
          <li>{`${getTime(data.deadline).getDate() - 1}
          .${getTime(data.deadline).getMonth() + 1}
          .${getTime(data.deadline).getFullYear()}`}</li>
        </ul>

        <ul>
          <li>
            <h3>Раздача вариантов</h3>
          </li>
          <li>Количество вариантов</li>
          <li>{data.quantity}</li>
        </ul>

        <ul>
          <li>
            <h3>Возможность работать в команде</h3>
          </li>
          <li>Максимальное количество участников</li>
          <li>{data.options}</li>
        </ul>
      </div>
    </div>
  ) : (
    <Loading />
  )
}

export default AdminCheckView

const Loading: FC = () => {
  return <div>Загрузка</div>
}