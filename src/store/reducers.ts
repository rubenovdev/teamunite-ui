import { combineReducers } from 'redux'

import { accountReducer } from './auth/reducers'
import { tasksReducer } from './tasks/reducers'

export const rootReducer = combineReducers({
  account: accountReducer,
  tasks: tasksReducer,
})

export type RootState = ReturnType<typeof rootReducer>
