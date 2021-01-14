import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  test: () => 5,
})

export type RootState = ReturnType<typeof rootReducer>
