import { combineReducers } from 'redux'

import { accountReducer } from './auth/reducers'

export const rootReducer = combineReducers({
  account: accountReducer,
})

export type RootState = ReturnType<typeof rootReducer>
