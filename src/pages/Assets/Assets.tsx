import React, { FC } from 'react'
import useInput from '../../hooks/useInput'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import AddButton from '../../components/AddButton/AddButton'
import DeleteButton from '../../components/DeleteButton/DeleteButton'

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
        inputGroupClassName={styles.inputGroup}
      />
      <div className={styles.buttons}>
        <Button
          type="button"
          style="primary"
          text="Primary"
          onClick={() => console.log('primary')}
          className={styles.button}
        />
        <Button
          type="button"
          isDisabled={true}
          style="primary"
          text="Disabled"
          onClick={() => console.log('disabled')}
          className={styles.button}
        />
        <Button
          type="button"
          style="secondary"
          text="Secondary"
          onClick={() => console.log('secondary')}
          className={styles.button}
        />
        <Button
          type="button"
          style="delete"
          text="Delete"
          onClick={() => console.log('delete')}
          className={styles.button}
        />
        <Button
          type="button"
          style="primary"
          text="Large primary"
          onClick={() => console.log('large primary')}
          isLarge={true}
          className={styles.button}
        />
        <Button
          type="button"
          style="delete"
          text="Large delete"
          onClick={() => console.log('large delete')}
          isLarge={true}
          className={styles.button}
        />
        <AddButton type="button" onClick={() => console.log('add button')} className={styles.button} />
        <DeleteButton type="button" onClick={() => console.log('delete button')} className={styles.button} />
      </div>
    </div>
  )
}

export default Assets
