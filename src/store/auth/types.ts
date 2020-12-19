import { LOGIN_ERROR } from './constants'

export interface LoginActionType {
  type: typeof LOGIN_ERROR
  payload: string
}

export interface UserData {
  email: string
  password: string
}

export interface AccountState {
  accessToken: string
  errorMessage: null | string
}
