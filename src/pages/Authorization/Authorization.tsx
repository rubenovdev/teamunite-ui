import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { login } from 'src/store/auth/actions'
import { selectError } from 'src/store/auth/selectors'
import AuthorizationView from './AuthorizationView'

const Authorization: FC = () => {
  const dispatch = useDispatch()
  const errorMessage = useSelector(state => selectError(state))

  const loginCallback = data => dispatch(login(data))

  return <AuthorizationView loginCallback={loginCallback} errorMessage={errorMessage} />
}

export default Authorization
