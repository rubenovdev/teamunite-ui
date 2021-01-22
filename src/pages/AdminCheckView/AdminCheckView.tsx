import React, { FC, useEffect } from 'react'

import CustomButton from 'components/common/CustomButton/CustomButton'
import Button from 'components/common/Button/Button'

import styles from './AdminCheckView.module.scss'

import layersIcon from '../../assets/images/layersIcon.svg'

import api from '../../utils/api'
import axios from 'axios'

const AdminCheckView: FC = () => {
  useEffect(() => {
    axios.get('https://api.teamunite.ru/v1/tasks').then(response => {
      const data = response.data
      console.log(data)
    })
  }, [])

  return (
    <div className={styles.container}>
      <h2 className ={styles.caption}>Очень сложный проект</h2>
      <div className={styles.buttons}>
        <Button text="Скачать в pdf" type="button" isDisabled style="primary" />
        <Button text="Редактировать" type="button" isDisabled style="primary" />
        <CustomButton type="button" icon={layersIcon} />
      </div>
      <div className = {styles.description}>
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
