import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getTasks } from 'src/store/tasks/actions'
import { selectTasks, selectError } from 'src/store/tasks/selectors'
import TasksView from './TasksView'

const Tasks: FC = () => {
  const dispatch = useDispatch()

  const errorMessage = useSelector(state => selectError(state))
  const tasks = useSelector(state => selectTasks(state))

  const getTasksCallback = () => dispatch(getTasks())

  return <TasksView getTasksCallback={getTasksCallback} tasks={tasks} errorMessage={errorMessage} />
}

export default Tasks
