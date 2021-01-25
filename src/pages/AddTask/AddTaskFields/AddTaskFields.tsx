import React, { FC } from 'react'
import { useFormContext, useFieldArray } from 'react-hook-form'
import Input from 'components/common/Input/Input'
import Select from 'components/common/Select/Select'
import Button from 'components/common/Button/Button'

import styles from './AddTaskFields.module.scss'
const OPTIONS = [
  { text: 'Input', value: 'input' },
  { text: 'Textarea', value: 'textarea' },
  { text: 'File', value: 'file' },
]

const AddTaskFields: FC = () => {
  const { register, control, errors } = useFormContext()
  const { fields, append, remove } = useFieldArray({ control, name: 'fields' })

  return (
    <div className={styles.box}>
      <h3 className={styles.boxTitle}>Поля для сдачи</h3>
      <p className={styles.boxMessage}>Создайте поля, которые необходимо заполнить студентам для сдачи проекта</p>
      {fields.map(({ id }, index) => {
        return (
          <div key={id} className={styles.boxBody}>
            <Input
              label="Наименование"
              name={`fields[${index}].title`}
              type="text"
              placeholder="Введите текст"
              ref={register()}
              error={errors?.fields?.[index]?.title?.message}
              inputGroupClassName={styles.mb24}
            />
            <Select label="Выберите тип" name={`fields[${index}].kind`} ref={register()} isLarge options={OPTIONS} />
          </div>
        )
      })}
      <div className={styles.boxButtons}>
        <Button
          type="button"
          style="delete"
          text="Удалить"
          isDisabled={fields.length === 1}
          onClick={() => remove(fields.length - 1)}
          className={styles.deleteButton}
        />
        <Button type="button" style="primary" text="Добавить" onClick={() => append({})} />
      </div>
    </div>
  )
}

export default AddTaskFields
