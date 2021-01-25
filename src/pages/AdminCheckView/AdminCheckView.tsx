import React, { FC, useEffect, useState } from 'react'
import api from '../../utils/api'
import CustomButton from 'components/common/CustomButton/CustomButton'
import Button from 'components/common/Button/Button'

import styles from './AdminCheckView.module.scss'
import layersIcon from '../../assets/images/layersIcon.svg'
import { TimeHandler } from 'src/utils/timeHandler'

const AdminCheckView: FC = () => {
  const [tasks, setTasks] = useState(null)

  const fetchTasks = async () => {
    try {
      const { data } = await api.get('/tasks')
      setTasks(data[0])
    } catch (err) {
      return (
        <div>
          <p>Что-то пошло не так</p>
          <p>{err.mesage}</p>
        </div>
      )
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const renderItems = list => {
    return list.map(item => {
      return <li key={`${tasks._id}_${item}`}>{item}</li>
    })
  }

  return tasks ? (
    <div className={styles.container}>
      <h2 className={styles.caption}>{tasks.title}</h2>
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
          {renderItems(tasks.groups)}
        </ul>

        <ul>
          <li>
            <h3>Проверяющие</h3>
          </li>
          {renderItems(tasks.curators)}
        </ul>

        <ul>
          <li>
            <h3>Срок сдачи</h3>
          </li>
          <li>{<TimeHandler time={tasks.deadline} />}</li>
        </ul>

        <ul>
          <li>
            <h3>Раздача вариантов</h3>
          </li>
          <li>Количество вариантов</li>
          <li>{tasks.quantity}</li>
        </ul>

        <ul>
          <li>
            <h3>Возможность работать в команде</h3>
          </li>
          <li>Максимальное количество участников</li>
          <li>{tasks.options}</li>
        </ul>
      </div>

      <div className={styles.taskDescription}>
        <h3>Описание задания</h3>
        <p>{tasks.description}</p>
      </div>

      {tasks.comment && (
        <div className={styles.clarification}>
          <h3>Поле для уточнения</h3>
          <p>комментарий</p>
          <p>{tasks.comment}</p>
        </div>
      )}

      <div className={styles.linksBreakdown}>
        <ul className={styles.links}>
          <li>
            <h3>Поля для сдачи</h3>
          </li>

          {tasks.fields.map(item => {
            const { title } = item
            return (
              <li key={`${tasks._id}_${title}`}>
                <a href="#">{title}</a>{' '}
              </li>
            )
          })}
        </ul>

        <ul className={styles.breakdown}>
          <li>
            <h3>Информация о разбалловке</h3>
          </li>
          {tasks.marks.map(item => {
            const { mark, max, min } = item
            return <li key={`${tasks._id}_${mark}`}>{`${mark} ${min}-${max}`}</li>
          })}
        </ul>
      </div>

      <div className={styles.criteria}>
        {tasks.criteriaGroups.map(item => {
          const { title } = item
          return (
            <ul>
              <li key = {title}>{title}</li>
              {item.criteria.map(crit => {
                const { title, max } = crit
                return (
                  <ul>
                    <li key = {title} >{title}</li>
                    <li key = {`${title}_${max}`} >{max}</li>
                  </ul>
                )
              })}
            </ul>
          )
        })}
      </div>
    </div>
  ) : (
    <p>Загрузка</p>
  )
}

export default AdminCheckView
