import React, { FC, ChangeEvent } from 'react'
import { useFormContext, useFieldArray } from 'react-hook-form'
import blockInvalidChar from '../../../../utils/blockInvalidChar'
import blockZeros from '../../../../utils/blockZeros'
import Input from 'components/common/Input/Input'
import Button from 'components/common/Button/Button'

import styles from './AddTaskCriteria.module.scss'

const AddTaskCriteria: FC<Props> = ({ nestIndex }) => {
  const { register, control, errors } = useFormContext()
  const { fields: criteria, append, remove } = useFieldArray({ control, name: `criteriaGroups[${nestIndex}].criteria` })

  const onMaxChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.target.value = blockZeros(event.target.value)
  }

  return (
    <div className={styles.box} style={{ marginBottom: '56px' }}>
      <h3 className={styles.boxTitle}>Критерии</h3>
      {criteria.map(({ id }, index) => {
        return (
          <div key={id} className={styles.boxBody}>
            <Input
              label="Название критерия"
              name={`criteriaGroups[${nestIndex}].criteria[${index}].title`}
              type="text"
              ref={register()}
              placeholder="Введите название"
              error={errors?.criteriaGroups?.[nestIndex]?.criteria?.[index]?.title?.message}
              inputGroupClassName={styles.mb32}
            />
            <Input
              label="Максимальный балл"
              name={`criteriaGroups[${nestIndex}].criteria[${index}].max`}
              type="number"
              ref={register()}
              onChange={onMaxChange}
              onKeyDown={blockInvalidChar}
              placeholder="Введите число"
              error={errors?.criteriaGroups?.[nestIndex]?.criteria?.[index]?.max?.message}
              inputWidth={136}
            />
          </div>
        )
      })}
      <div className={styles.boxButtons}>
        <Button
          type="button"
          style="delete"
          text="Удалить критерий"
          onClick={() => remove(criteria.length - 1)}
          isDisabled={criteria.length === 1}
          className={styles.deleteButton}
        />
        <Button type="button" style="primary" text="Добавить критерий" onClick={() => append({})} />
      </div>
    </div>
  )
}

interface Props {
  nestIndex: number
}

export default AddTaskCriteria
