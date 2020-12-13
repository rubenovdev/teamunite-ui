import axios from 'axios'
import { Dispatch } from 'redux'

import { URL } from '../../static'
import { LOGIN_SUCCESS, LOGIN_ERROR } from './constants'
import { IUserData, ILoginActionType } from './types'

export const login = (userData: IUserData) => (dispatch: Dispatch<ILoginActionType>): void => {
  axios({ url: `${URL}/auth/login`, data: userData, method: 'POST' })
    .then(response => {
      const accessToken = response.data.accessToken
      localStorage.setItem('accessToken', accessToken)
      dispatch({ type: LOGIN_SUCCESS, payload: accessToken })
    })
    .catch(err => {
      dispatch({ type: LOGIN_ERROR, payload: err.message })
    })
}
