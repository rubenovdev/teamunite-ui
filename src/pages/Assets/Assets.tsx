import React, { FC } from 'react'
import Input from '../../components/Input/Input'
import useInput from '../../hooks/useInput'

import styles from './Assets.module.scss'

const Assets: FC = () => {
  const test1 = useInput('')
  const test2 = useInput('Самый лучший из армян – это Генрих Мхитарян')
  const test3 = useInput('')

  return (
    <div className={styles.container}>
      <Input
        type="text"
        placeholder="Введите текст"
        value={test1.value}
        onChange={test1.onChange}
        inputGroupClassName={styles.inputGroup}
      />
      <Input
        label="Лейбл 1"
        name="test2"
        type="text"
        placeholder="Введите текст"
        value={test2.value}
        onChange={test2.onChange}
        inputGroupClassName={styles.inputGroup}
      />
      <Input
        label="Лейбл 2"
        name="test3"
        type="text"
        placeholder="Введите лейбл"
        value={test3.value}
        onChange={test3.onChange}
        error="Поле не должно быть пустым"
      />
    </div>
  )
}

export default Assets
