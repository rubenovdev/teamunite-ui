import { ADD_TASK_REQUEST, ADD_TASK_SUCCESS, ADD_TASK_FAIL, AddTaskActionType, Task } from './types'
import { Dispatch } from 'redux'
import api from 'src/utils/api'

export const addTask = (task: Task) => async (dispatch: Dispatch<AddTaskActionType>): Promise<void> => {
  dispatch({
    type: ADD_TASK_REQUEST,
  })

  try {
    await api.post('/tasks', task)
    dispatch({ type: ADD_TASK_SUCCESS })
  } catch (error) {
    dispatch({ type: ADD_TASK_FAIL, payload: error.message })
  }
}
