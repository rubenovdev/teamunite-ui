import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'

import { token } from 'src/static'
import useInput from 'src/hooks/useInput'
import Input from 'components/common/Input/Input'
import Button from 'components/common/Button/Button'
import styles from './Authorization.module.scss'

interface Props {
  errorMessage: string
  loginCallback: ({ email, password: string }) => void
}

const AuthorizationView: FC<Props> = ({ errorMessage, loginCallback }) => {
  const history = useHistory()

  const email = useInput('')
  const password = useInput('')

  const buttonDisabled = !email.value || !password.value

  const handleSubmit = e => {
    e.preventDefault()
    loginCallback({ email: email.value, password: password.value })
  }

  if (Cookies.get(token)) {
    history.push('/tasks')
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Вход</h2>
      <p className={styles.prompt}>Введите данные для входа на e.mospolytech</p>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <Input
          value={email.value}
          onChange={email.onChange}
          label="Логин"
          name="email"
          type="email"
          placeholder="Введите логин"
          inputGroupClassName={styles.inputGutter}
          required
        />
        <Input
          value={password.value}
          onChange={password.onChange}
          label="Пароль"
          name="password"
          type="password"
          placeholder="Введите пароль"
          inputGroupClassName={styles.inputGutter}
          required
        />
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        <Button text="Войти" type="submit" style="primary" isDisabled={buttonDisabled} />
      </form>
    </div>
  )
}

export default AuthorizationView
