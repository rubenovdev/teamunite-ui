export interface LoginActionType {
  type: 'LOGIN_ERROR'
  payload: string
}

export interface UserData {
  email: string
  password: string
}

export interface AccountState {
  accessToken: string
  errorMessage: string
}
