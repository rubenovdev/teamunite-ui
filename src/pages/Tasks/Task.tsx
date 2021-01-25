import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import Button from 'components/common/Button/Button'
import { Task } from 'src/store/tasks/types'
import styles from './Task.module.scss'

interface Props {
  task: Task
}

const Task: FC<Props> = ({ task }) => {
  const { title, groups, description } = task
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.groups}>{groups.join(', ')}</p>
      <p className={styles.description}>{description}</p>
      <NavLink to="/" className={styles.viewButton}>
        <Button type={'button'} style={'secondary'} text={'Просмотреть'} />
      </NavLink>
      <NavLink to="/">
        <Button type={'button'} style={'primary'} text={'Оценить'} />
      </NavLink>
    </div>
  )
}

export default Task
