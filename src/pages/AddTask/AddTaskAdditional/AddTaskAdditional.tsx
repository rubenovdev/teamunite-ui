import React, { FC, useState, useEffect, ChangeEvent, FocusEvent } from 'react'
import { useFormContext } from 'react-hook-form'
import blockZeros from '../../../utils/blockZeros'
import normalizeMinMax from '../../../utils/normalizeMinMax'
import blockInvalidChar from '../../../utils/blockInvalidChar'
import Toggle from 'components/common/Toggle/Toggle'
import Input from 'components/common/Input/Input'
import TextArea from 'components/common/TextArea/Textarea'
import Button from 'components/common/Button/Button'

import styles from './AddTaskAdditional.module.scss'

const AddTaskAdditional: FC = () => {
  const { register, setValue, errors, trigger } = useFormContext()
  const [togglesState, setTogglesState] = useState({ quantity: false, options: false, comment: true })

  const onToggleChange = (name: string): void => {
    setTogglesState(prevValue => ({ ...prevValue, [name]: !prevValue[name] }))
  }

  useEffect(() => {
    if (!togglesState.quantity) setValue('quantity', '1', { shouldValidate: true })
    if (!togglesState.options) setValue('options', '2', { shouldValidate: true })
    if (!togglesState.comment) setValue('comment', '', { shouldValidate: true })
  }, [togglesState.quantity, togglesState.options, togglesState.comment, setValue])

  const onNumbersChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.target.value = blockZeros(event.target.value)
  }

  const onQuantityBlur = (event: FocusEvent<HTMLInputElement>): void => {
    event.target.value = normalizeMinMax(event.target.value, 1, 35)
  }

  const onOptionsBlur = (event: FocusEvent<HTMLInputElement>): void => {
    event.target.value = normalizeMinMax(event.target.value, 2, 100)
  }

  const onDescriptionFileChange = (): void => {
    trigger('description')
  }

  const onAddDescriptionFileButtonClick = (): void => {
    const element = document.querySelector('input[type="file"]') as HTMLElement
    element.click()
  }

  return (
    <>
      <div className={styles.box}>
        <div className={styles.boxHeader}>
          <h3 className={styles.boxTitle}>Возможность работать в команде</h3>
          <Toggle
            name="quantityToggle"
            toggleWrapperClassName={styles.boxToggler}
            onChange={() => onToggleChange('quantity')}
          />
        </div>
        <div className={styles.boxBody} style={{ display: togglesState.quantity ? 'block' : 'none' }}>
          <Input
            label="Максимальное количество участников"
            name="quantity"
            type="number"
            placeholder="Введите число"
            ref={register}
            onChange={onNumbersChange}
            onKeyDown={blockInvalidChar}
            onBlur={onQuantityBlur}
            error={errors?.quantity?.message}
            inputWidth={136}
          />
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.boxHeader}>
          <h3 className={styles.boxTitle}>Раздать варианты</h3>
          <Toggle
            name="optionsToggle"
            toggleWrapperClassName={styles.boxToggler}
            onChange={() => onToggleChange('options')}
            ref={register}
          />
        </div>
        <p className={styles.boxMessage}>Варианты будут назначены студентам в случайном порядке</p>
        <div className={styles.boxBody} style={{ display: togglesState.options ? 'block' : 'none' }}>
          <Input
            label="Количество вариантов задания"
            name="options"
            type="number"
            placeholder="Введите число"
            ref={register}
            onChange={onNumbersChange}
            onKeyDown={blockInvalidChar}
            onBlur={onOptionsBlur}
            error={errors?.options?.message}
            inputWidth={136}
          />
        </div>
      </div>
      <div className={styles.box}>
        <h3 className={styles.boxTitle}>Описание задания</h3>
        <p className={styles.boxMessage}>Добавьте текст задания с помощью текстового редактора или загрузите файл</p>
        <div className={styles.boxBody}>
          <TextArea
            label="Текст задания"
            name="description"
            placeholder="Введите текст"
            ref={register}
            error={errors?.description?.message}
          />
        </div>
        <div className={styles.boxButtons}>
          <Input
            type="file"
            name="descriptionFile"
            ref={register}
            onChange={onDescriptionFileChange}
            inputGroupClassName={styles.descriptionFileInput}
          />
          <Button type="button" style="primary" text="Добавить" onClick={onAddDescriptionFileButtonClick} />
        </div>
      </div>
      <div className={styles.box} style={{ marginBottom: '64px' }}>
        <div className={styles.boxHeader}>
          <h3 className={styles.boxTitle}>Поле для уточнения</h3>
          <Toggle
            name="commentToggle"
            isChecked
            toggleWrapperClassName={styles.boxToggler}
            ref={register}
            onChange={() => onToggleChange('comment')}
          />
        </div>
        <div className={styles.boxBody} style={{ display: togglesState.comment ? 'block' : 'none' }}>
          <Input
            label="Комментарий"
            name="comment"
            type="text"
            placeholder="Введите текст"
            ref={register}
            error={errors?.comment?.message}
          />
        </div>
      </div>
    </>
  )
}

export default AddTaskAdditional
