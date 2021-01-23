import React, { FC, ChangeEvent } from 'react'
import { useFormContext } from 'react-hook-form'
import normalizeDeadline from '../../../utils/normalizeDeadline'
import Input from 'components/common/Input/Input'

import styles from './AddTaskMain.module.scss'

const AddTaskMain: FC = () => {
  const { register, errors } = useFormContext()

  const onDeadLineChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.target.value = normalizeDeadline(event.target.value)
  }

  return (
    <div className={styles.box}>
      <Input
        label="Название"
        name="title"
        type="text"
        placeholder="Введите название"
        ref={register}
        error={errors?.title?.message}
        inputGroupClassName={styles.mb24}
      />
      <Input
        label="Номера групп"
        name="groups"
        type="text"
        placeholder="Введите номера групп"
        ref={register}
        error={errors?.groups?.message}
        inputGroupClassName={styles.mb24}
      />
      <Input
        label="Добавить проверяющего"
        name="curators"
        type="text"
        placeholder="Введите фамилию проверяющего"
        ref={register}
        error={errors?.curators?.message}
        inputGroupClassName={styles.mb24}
      />
      <Input
        label="Срок сдачи"
        name="deadline"
        type="text"
        placeholder="Введите срок сдачи в формате дд.мм.гг"
        ref={register}
        onChange={onDeadLineChange}
        error={errors?.deadline?.message}
      />
    </div>
  )
}

export default AddTaskMain
