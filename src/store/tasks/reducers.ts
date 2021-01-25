import { GET_TASKS_SUCCESS, GET_TASKS_ERROR } from './constants'
import { TasksState } from './types'
import type { TasksActionTypes } from './types'

const initialState = { data: null, errorMessage: null }

export const tasksReducer = (state: TasksState = initialState, action: TasksActionTypes): TasksState => {
  switch (action.type) {
    case GET_TASKS_SUCCESS:
      const data = action.payload
      return { ...state, data }
    case GET_TASKS_ERROR:
      const errorMessage = action.payload
      return { ...state, errorMessage }
    default:
      return state
  }
}
