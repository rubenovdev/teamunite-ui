import { Dispatch } from 'redux'

import api from 'src/utils/api'
import { GET_TASKS_SUCCESS, GET_TASKS_ERROR } from './constants'
import type { TasksActionTypes } from './types'

export const getTasks = () => async (dispatch: Dispatch<TasksActionTypes>): Promise<void> => {
  try {
    const response = await api.get('/tasks')
    dispatch({ type: GET_TASKS_SUCCESS, payload: response.data })
  } catch (err) {
    dispatch({ type: GET_TASKS_ERROR, payload: err?.response?.data?.message ?? 'Ошибка!' })
  }
}
