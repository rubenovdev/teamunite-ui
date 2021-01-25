import React, { FC } from 'react'
import { useFormContext, useFieldArray } from 'react-hook-form'
import AddTaskCriteria from './AddTaskCriteria/AddTaskCriteria'
import Select from 'components/common/Select/Select'
import AddButton from 'components/common/AddButton/AddButton'
import Input from 'components/common/Input/Input'
import Button from 'components/common/Button/Button'

import styles from './AddTaskBlocks.module.scss'

const AddTaskBlocks: FC = () => {
  const { register, control, setValue, getValues, errors } = useFormContext()
  const { fields: criteriaGroups, remove } = useFieldArray({ control, name: 'criteriaGroups' })

  const appendNestedCriteriaGroup = (): void => {
    setValue('criteriaGroups', [...getValues().criteriaGroups, { title: '', criteria: [{ title: '', max: '' }] }])
  }

  return (
    <>
      <div className={styles.box} style={{ marginBottom: '56px' }}>
        <h3 className={styles.boxTitle}>Критерии оценивания</h3>
        <p className={styles.boxMessage}>
          Создайте критерии оценивания студенческих работ, разделив их на логические блоки.
        </p>
      </div>
      <div className={styles.blocks}>
        {criteriaGroups.map(({ id }, index) => {
          return (
            <div key={id} className={styles.block}>
              <h3 className={styles.blockTitle}>Блок {index + 1}</h3>
              <div className={styles.blockChooseTemplateSection}>
                <Select
                  options={[{ text: 'Выбрать шаблон', value: '' }]}
                  selectGroupClassName={styles.templateSelect}
                />
                <AddButton type="button" />
              </div>
              <Input
                label="Название блока критериев"
                name={`criteriaGroups[${index}].title`}
                type="text"
                placeholder="Введите название"
                ref={register()}
                error={errors?.criteriaGroups?.[index]?.title?.message}
                inputGroupClassName={styles.mb32}
              />
              <AddTaskCriteria nestIndex={index} />
            </div>
          )
        })}
        <div className={styles.blockButtons}>
          <Button
            type="button"
            style="delete"
            text="Удалить блок"
            onClick={() => remove(criteriaGroups.length - 1)}
            isLarge
            isDisabled={criteriaGroups.length === 1}
            className={styles.mb24}
          />
          <Button type="button" style="primary" text="Добавить блок" onClick={appendNestedCriteriaGroup} isLarge />
        </div>
      </div>
    </>
  )
}

export default AddTaskBlocks
