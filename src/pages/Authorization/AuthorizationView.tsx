import React, { FC, ChangeEvent, FormEvent } from 'react'
import styles from './Authorization.module.scss'

import Input from 'components/common/Input/Input'
import Button from 'components/common/Button/Button'

interface IProps {
  userData: { email: string; password: string }
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (event: FormEvent<EventTarget>) => void
  errorMessage: string
}

const AuthorizationView: FC<IProps> = ({ userData, handleInputChange, handleSubmit, errorMessage }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Вход</h2>
      <p className={styles.prompt}>Введите данные для входа на e.mospolytech</p>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <Input
          value={userData.email}
          onChange={handleInputChange}
          label="Логин"
          name="email"
          type="email"
          placeholder="Введите логин"
          inputGroupClassName={styles.inputGutter}
          required={true}
        />
        <Input
          value={userData.password}
          onChange={handleInputChange}
          label="Пароль"
          name="password"
          type="password"
          placeholder="Введите пароль"
          inputGroupClassName={styles.inputGutter}
          required={true}
        />
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        <Button text="Войти" type="submit" style="primary" />
      </form>
    </div>
  )
}

export default AuthorizationView
