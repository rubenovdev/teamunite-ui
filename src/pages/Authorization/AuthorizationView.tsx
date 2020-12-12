import React, { FC } from 'react'
import styles from './Authorization.module.scss'

import Input from 'components/common/Input/Input'
import Button from 'components/common/Button/Button'

const AuthorizationView: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Вход</h2>
      <p className={styles.prompt}>Введите данные для входа на e.mospolytech</p>
      <form action="" className={styles.loginForm}>
        <Input
          label="Логин"
          name="login"
          type="email"
          placeholder="Введите логин"
          inputGroupClassName={styles.inputGutter}
        />
        <Input
          label="Пароль"
          name="password"
          type="password"
          placeholder="Введите пароль"
          inputGroupClassName={styles.inputGutter}
        />
        <Button text="Войти" type="submit" style="primary" />
      </form>
    </div>
  )
}

export default AuthorizationView
