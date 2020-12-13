import { LOGIN_SUCCESS, LOGIN_ERROR } from './constants'

export interface ILoginActionType {
  type: typeof LOGIN_ERROR | typeof LOGIN_SUCCESS
  payload: string
}

export interface IUserData {
  email: string
  password: string
}

export interface IAccountState {
  accessToken: string
  errorMessage: null | string
}
