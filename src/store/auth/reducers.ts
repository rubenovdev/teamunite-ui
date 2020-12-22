import Cookies from 'js-cookie'

import { LOGIN_ERROR } from './constants'
import { AccountState, LoginActionType } from './types'
import { token } from 'src/static'

const initialState = { accessToken: Cookies.get(token) || '', errorMessage: null }

export const accountReducer = (state: AccountState = initialState, action: LoginActionType): AccountState => {
  switch (action.type) {
    case LOGIN_ERROR:
      const errorMessage = action.payload
      return { ...state, errorMessage }
    default:
      return state
  }
}
