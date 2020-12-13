import { LOGIN_SUCCESS, LOGIN_ERROR } from './constants'
import { IAccountState, ILoginActionType } from './types'

const initialState = { accessToken: localStorage.getItem('accessToken') || '', errorMessage: null }

export const accountReducer = (state: IAccountState = initialState, action: ILoginActionType): IAccountState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const accessToken = action.payload
      return { ...state, accessToken }
    case LOGIN_ERROR:
      const errorMessage = action.payload
      return { ...state, errorMessage }
    default:
      return state
  }
}
