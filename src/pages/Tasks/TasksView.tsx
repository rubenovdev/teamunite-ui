import React, { FC, useEffect } from 'react'

import Input from 'components/common/Input/Input'
import useInput from 'src/hooks/useInput'
import TaskItem from './Task'
import { Task } from 'src/store/tasks/types'
import styles from './Tasks.module.scss'

interface Props {
  getTasksCallback: () => void
  tasks: Array<Task>
  errorMessage: string
}

const TasksView: FC<Props> = ({ getTasksCallback, tasks, errorMessage }) => {
  const search = useInput('')

  useEffect(() => {
    !tasks && getTasksCallback()
  }, [tasks, getTasksCallback])

  const filter = arr =>
    arr.filter(task => task.title.toLowerCase().includes(search.value.toString().toLowerCase().trim()))

  if (errorMessage) {
    return (
      <div className={styles.container}>
        <p>{errorMessage}</p>
      </div>
    )
  }

  if (tasks?.length === 0) {
    return (
      <div className={styles.container}>
        <p>Задач нет</p>
      </div>
    )
  }

  if (!tasks && !errorMessage) {
    return (
      <div className={styles.container}>
        <p>Загрузка...</p>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Проверка</h2>
      <Input
        value={search.value}
        onChange={search.onChange}
        name="search"
        type="text"
        placeholder="Поиск"
        inputGroupClassName={styles.search}
        required
      />
      <div>
        {filter(tasks).map(task => (
          <TaskItem key={task._id} task={task} />
        ))}
      </div>
    </div>
  )
}

export default TasksView
