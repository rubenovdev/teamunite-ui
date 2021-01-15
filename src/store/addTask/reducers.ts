import { ADD_TASK_REQUEST, ADD_TASK_SUCCESS, ADD_TASK_FAIL, AddTaskActionType, AddTaskState } from './types'

const addTaskInitialState: AddTaskState = {
  loading: false,
  loaded: false,
  error: null,
}

export const addTaskReducer = (state = addTaskInitialState, action: AddTaskActionType): AddTaskState => {
  switch (action.type) {
    case ADD_TASK_REQUEST:
      return { ...state, loading: true, loaded: false, error: null }
    case ADD_TASK_SUCCESS:
      return { ...state, loading: false, loaded: true, error: null }
    case ADD_TASK_FAIL:
      return { ...state, loading: false, loaded: true, error: action.payload }
    default:
      return state
  }
}
