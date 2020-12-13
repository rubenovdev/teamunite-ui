import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { login } from '../../store/auth/actions'
import AuthorizationView from './AuthorizationView'

const Authorization: FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const accessToken = useSelector(state => state.account.accessToken)
  const errorMessage = useSelector(state => state.account.errorMessage)
  const initialFormState = { email: '', password: '' }
  const [userData, setUserData] = useState(initialFormState)

  if (accessToken) {
    history.push('/tasks')
  }

  const handleInputChange = event => {
    const name = event.currentTarget.name
    const value = event.currentTarget.value

    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    dispatch(login(userData))
  }

  return (
    <AuthorizationView
      userData={userData}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      errorMessage={errorMessage}
    />
  )
}

export default Authorization
