import { combineReducers } from 'redux'

import { accountReducer } from './auth/reducers'
import { addTaskReducer } from './addTask/reducers'

export const rootReducer = combineReducers({
  account: accountReducer,
  addTask: addTaskReducer,
})

export type RootState = ReturnType<typeof rootReducer>
