import React, { FC } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import resolver from '../../utils/addTaskValidationSchema'
import AddTaskMain from './AddTaskMain/AddTaskMain'
import AddTaskAdditional from './AddTaskAdditional/AddTaskAdditional'
import AddTaskFields from './AddTaskFields/AddTaskFields'
import AddTaskBlocks from './AddTaskBlocks/AddTaskBlocks'
import AddTaskMarks from './AddTaskMarks/AddTaskMarks'
import Toggle from 'components/common/Toggle/Toggle'
import Button from 'components/common/Button/Button'

import styles from './AddTask.module.scss'
const defaultValues = {
  quantity: 1,
  options: 2,
  commentToggle: true,
  fields: [{ title: '', kind: '' }],
  criteriaGroups: [{ title: '', criteria: [{ title: '', max: '' }] }],
  marks: [
    { mark: 'Отлично', max: '', min: '' },
    { mark: 'Хорошо', max: '', min: '' },
    { mark: 'Удовл.', max: '', min: '' },
  ],
}

const AddTask: FC = () => {
  const methods = useForm({
    defaultValues,
    mode: 'onBlur',
    shouldUnregister: false,
    resolver,
  })

  const { register, handleSubmit } = methods

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <FormProvider {...methods}>
      <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.pageHeader}>
          <h2 className={styles.pageTitle}>Добавление задания</h2>
          <Toggle label="Пересдача" name="retake" ref={register} />
        </div>
        <AddTaskMain />
        <AddTaskAdditional />
        <AddTaskFields />
        <AddTaskBlocks />
        <AddTaskMarks />
        <Button type="submit" style="primary" text="Создать задание" isLarge className={styles.createTaskButton} />
      </form>
    </FormProvider>
  )
}

export default AddTask
