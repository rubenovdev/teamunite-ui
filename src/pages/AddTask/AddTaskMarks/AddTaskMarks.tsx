import React, { FC, useState, useEffect, ChangeEvent, FocusEvent } from 'react'
import { useFormContext, useFieldArray } from 'react-hook-form'
import blockInvalidChar from '../../../utils/blockInvalidChar'
import blockZeros from '../../../utils/blockZeros'
import normalizeMinMax from '../../../utils/normalizeMinMax'
import Toggle from 'components/common/Toggle/Toggle'
import Input from 'components/common/Input/Input'

import styles from './AddTaskMarks.module.scss'
const DEFAULT_MARKS_FIRST = [{ mark: 'Зачет', max: '', min: '' }]
const DEFAULT_MARKS_SECOND = [
  { mark: 'Отлично', max: '', min: '' },
  { mark: 'Хорошо', max: '', min: '' },
  { mark: 'Удовл.', max: '', min: '' },
]

const AddTaskMarks: FC = () => {
  const { register, control, setValue, getValues, errors, clearErrors } = useFormContext()
  const { fields: marks } = useFieldArray({ control, name: 'marks' })
  const [isMarkToggle, setIsMarkToggle] = useState(false)

  const onMarkToggleChange = (): void => {
    setIsMarkToggle(prevValue => !prevValue)
    clearErrors('marks')
  }

  useEffect(() => {
    isMarkToggle ? setValue('marks', DEFAULT_MARKS_FIRST) : setValue('marks', DEFAULT_MARKS_SECOND)
  }, [isMarkToggle, setValue])

  const onMinMaxChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.target.value = blockZeros(event.target.value)
  }

  const onMinBlur = (event: FocusEvent<HTMLInputElement>, index: number): void => {
    event.target.value = normalizeMinMax(
      event.target.value,
      index !== marks.length - 1 && getValues().marks[index + 1].max && +getValues().marks[index + 1].max + 1,
      getValues().marks[index].max && +getValues().marks[index].max - 1
    )

    if (index !== marks.length - 1 && +event.target.value - 1 > +getValues().marks[index + 1].max) {
      setValue(`marks[${index + 1}].max`, +event.target.value - 1)
    }
  }

  const onMaxBlur = (event: FocusEvent<HTMLInputElement>, index: number): void => {
    event.target.value = normalizeMinMax(
      event.target.value,
      getValues().marks[index].min && +getValues().marks[index].min + 1,
      index !== 0 && getValues().marks[index - 1].min && +getValues().marks[index - 1].min - 1
    )

    if (index !== 0 && +event.target.value + 1 < +getValues().marks[index - 1].min) {
      setValue(`marks[${index - 1}].min`, +event.target.value + 1)
    }
  }

  return (
    <div className={styles.box}>
      <div className={styles.boxHeader}>
        <h3 className={styles.boxTitle}>Информация о разбалловке</h3>
        <Toggle
          label="Зачет"
          name="markToggle"
          onChange={onMarkToggleChange}
          toggleWrapperClassName={styles.boxTogglerWithLabel}
        />
      </div>
      <div className={styles.boxBody}>
        {marks.map(({ mark, id }, index) => {
          return (
            <div key={id} className={styles.mark}>
              <Input
                label={`Оценка ”${mark}”`}
                name={`marks[${index}].min`}
                type="number"
                placeholder="От"
                ref={register()}
                onChange={onMinMaxChange}
                onBlur={(event: FocusEvent<HTMLInputElement>) => onMinBlur(event, index)}
                onKeyDown={blockInvalidChar}
                inputGroupClassName={styles.markInput}
                isError={Boolean(errors?.marks?.[index]?.min?.message)}
                inputWidth={136}
              />
              <Input
                type="number"
                name={`marks[${index}].max`}
                placeholder="До"
                ref={register()}
                onChange={onMinMaxChange}
                onBlur={(event: FocusEvent<HTMLInputElement>) => onMaxBlur(event, index)}
                onKeyDown={blockInvalidChar}
                error={errors?.marks?.[index]?.max?.message || errors?.marks?.message}
                inputWidth={136}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AddTaskMarks
