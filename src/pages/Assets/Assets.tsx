import React, { FC } from 'react'
import useInput from '../../hooks/useInput'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import AddButton from '../../components/AddButton/AddButton'
import DeleteButton from '../../components/DeleteButton/DeleteButton'
import Toggle from '../../components/Toggle/Toggle'
import Checkbox from '../../components/Checkbox/Checkbox'

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
          isDisabled
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
          isLarge
          className={styles.button}
        />
        <Button
          type="button"
          style="delete"
          text="Large delete"
          onClick={() => console.log('large delete')}
          isLarge
          className={styles.button}
        />
        <AddButton type="button" onClick={() => console.log('add button')} className={styles.button} />
        <DeleteButton type="button" onClick={() => console.log('delete button')} className={styles.button} />
      </div>
      <Toggle
        label="Текст"
        name="toggle1"
        onChange={() => console.log('toggle1')}
        toggleWrapperClassName={styles.toggle}
      />
      <Toggle
        label="Текст"
        name="toggle2"
        isChecked
        onChange={() => console.log('toggle2')}
        toggleWrapperClassName={styles.toggle}
      />
      <Toggle name="toggle3" onChange={() => console.log('toggle3')} toggleWrapperClassName={styles.toggle} />
      <Toggle name="toggle4" isChecked onChange={() => console.log('toggle4')} toggleWrapperClassName={styles.toggle} />
      <Checkbox name="checkbox1" onChange={() => console.log('checkbox1')} className={styles.checkbox} />
      <Checkbox name="checkbox2" isChecked onChange={() => console.log('checkbox2')} />
    </div>
  )
}

export default Assets
