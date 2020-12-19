import { Dispatch } from 'redux'
import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'

import api from 'src/utils/api'
import { LOGIN_ERROR } from './constants'
import { UserData, LoginActionType } from './types'
import { token } from 'src/static'

export const login = (userData: UserData) => async (dispatch: Dispatch<LoginActionType>): Promise<void> => {
  try {
    const response = await api.post('/auth/login', userData)
    const accessToken = response.data.accessToken
    Cookies.set(token, accessToken)
    const history = useHistory()
    history.push('/tasks')
  } catch (err) {
    dispatch({ type: LOGIN_ERROR, payload: err.message })
  }
}
