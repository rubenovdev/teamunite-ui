import { combineReducers } from 'redux'

import { accountReducer } from './auth/reducers'
import { addTaskReducer } from './addTask/reducers'
import { tasksReducer } from './tasks/reducers'

export const rootReducer = combineReducers({
  account: accountReducer,
  tasks: tasksReducer,
  addTask: addTaskReducer,
})

export type RootState = ReturnType<typeof rootReducer>
