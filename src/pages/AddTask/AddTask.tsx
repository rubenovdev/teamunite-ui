import React, { FC, useState } from 'react'
import Toggle from 'components/common/Toggle/Toggle'
import Input from 'components/common/Input/Input'
import Button from 'components/common/Button/Button'
import Select from 'components/common/Select/Select'
import AddButton from 'components/common/AddButton/AddButton'

import styles from './AddTask.module.scss'

const AddTask: FC = () => {
  const [isTeamPosibilityBoxOpen, setIsTeamPosibilityBoxOpen] = useState(false)
  const [isGiveVariantsBoxOpen, setIsGiveVariantsBoxOpen] = useState(false)
  const [isCommentBoxOpen, setIsCommentBoxOpen] = useState(false)

  const onBoxToggle = (boxName: string) => {
    switch (boxName) {
      case 'team-posibility':
        setIsTeamPosibilityBoxOpen(prevState => !prevState)
        break
      case 'give-variants':
        setIsGiveVariantsBoxOpen(prevState => !prevState)
        break
      case 'comment':
        setIsCommentBoxOpen(prevState => !prevState)
        break
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <h2 className={styles.pageTitle}>Добавление задания</h2>
        <Toggle label="Пересдача" name="retake-toggle" />
      </div>
      <div className={styles.box}>
        <Input
          label="Название"
          name="name"
          type="text"
          placeholder="Введите название"
          inputGroupClassName={styles.mb24}
        />
        <Input
          label="Номера групп"
          name="groups"
          type="text"
          placeholder="Введите номера групп"
          inputGroupClassName={styles.mb24}
        />
        <Input
          label="Добавить проверяющего"
          name="examiner"
          type="text"
          placeholder="Введите фамилию проверяющего"
          inputGroupClassName={styles.mb24}
        />
        <Input label="Срок сдачи" name="date" type="text" placeholder="Введите срок сдачи в формате дд.мм.гг" />
      </div>
      <div className={styles.box}>
        <div className={styles.boxHeader}>
          <h3 className={styles.boxTitle}>Возможность работать в команде</h3>
          <Toggle
            name="team-posibility-toggle"
            toggleWrapperClassName={styles.boxToggler}
            onChange={() => onBoxToggle('team-posibility')}
          />
        </div>
        <div className={styles.boxBody} style={{ display: isTeamPosibilityBoxOpen ? 'block' : 'none' }}>
          <Input
            label="Максимальное количество участников"
            name="max-members"
            type="number"
            placeholder="Введите число"
            inputWidth={136}
          />
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.boxHeader}>
          <h3 className={styles.boxTitle}>Раздать варианты</h3>
          <Toggle
            name="give-variants-toggle"
            toggleWrapperClassName={styles.boxToggler}
            onChange={() => onBoxToggle('give-variants')}
          />
        </div>
        <p className={styles.boxMessage}>Варианты будут назначены студентам в случайном порядке</p>
        <div className={styles.boxBody} style={{ display: isGiveVariantsBoxOpen ? 'block' : 'none' }}>
          <Input
            label="Количество вариантов задания"
            name="variants-qty"
            type="number"
            placeholder="Введите число"
            inputWidth={136}
          />
        </div>
      </div>
      <div className={styles.box}>
        <h3 className={styles.boxTitle}>Описание задания</h3>
        <p className={styles.boxMessage}>Добавьте текст задания с помощью текстового редактора или загрузите файл</p>
        <div className={styles.boxBody}>
          <Button type="button" style="primary" text="Добавить" />
        </div>
      </div>
      <div className={styles.box} style={{ marginBottom: '64px' }}>
        <div className={styles.boxHeader}>
          <h3 className={styles.boxTitle}>Поле для уточнения</h3>
          <Toggle
            name="comment-toggle"
            toggleWrapperClassName={styles.boxToggler}
            onChange={() => onBoxToggle('comment')}
          />
        </div>
        <div className={styles.boxBody} style={{ display: isCommentBoxOpen ? 'block' : 'none' }}>
          <Input label="Комментарий" name="comment" type="text" placeholder="Введите текст" />
        </div>
      </div>
      <div className={styles.box}>
        <h3 className={styles.boxTitle}>Поля для сдачи</h3>
        <p className={styles.boxMessage}>Создайте поля, которые необходимо заполнить студентам для сдачи проекта</p>
        <div className={styles.boxBody}>
          <Input
            label="Наименование"
            name="field-name"
            type="text"
            placeholder="Введите текст"
            inputGroupClassName={styles.mb24}
          />
          <Select label="Выберите тип" name="field-type" isLarge options={[{ text: 'Вариант', value: 'variant' }]} />
        </div>
        <div className={styles.boxButtons}>
          <Button type="button" style="delete" text="Удалить" className={styles.deleteButton} />
          <Button type="button" style="primary" text="Добавить" />
        </div>
      </div>
      <div className={styles.box} style={{ marginBottom: '56px' }}>
        <h3 className={styles.boxTitle}>Критерии оценивания</h3>
        <p className={styles.boxMessage}>
          Создайте критерии оценивания студенческих работ, разделив их на логические блоки.
        </p>
      </div>
      <div className={styles.blocks}>
        <div className={styles.block}>
          <h3 className={styles.blockTitle}>Блок 1</h3>
          <div className={styles.blockChooseTemplateSection}>
            <Select
              options={[{ text: 'Выбрать шаблон', value: 'choose-template' }]}
              selectGroupClassName={styles.templateSelect}
            />
            <AddButton type="button" />
          </div>
          <Input
            label="Название блока критериев"
            name="criterion-block"
            type="text"
            placeholder="Введите название"
            inputGroupClassName={styles.mb32}
          />
          <div className={styles.box} style={{ marginBottom: '56px' }}>
            <h3 className={styles.boxTitle}>Критерии</h3>
            <div className={styles.boxBody}>
              <Input
                label="Название критерия"
                name="criterion"
                type="text"
                placeholder="Введите название"
                inputGroupClassName={styles.mb32}
              />
              <Input
                label="Максимальный балл"
                name="max-points"
                type="number"
                placeholder="Введите число"
                inputWidth={136}
              />
            </div>
            <div className={styles.boxButtons}>
              <Button type="button" style="delete" text="Удалить критерий" className={styles.deleteButton} />
              <Button type="button" style="primary" text="Добавить критерий" />
            </div>
          </div>
          <div className={styles.blockButtons}>
            <Button type="button" style="delete" text="Удалить блок" isLarge className={styles.mb24} />
            <Button type="button" style="primary" text="Добавить блок" isLarge />
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.boxHeader}>
          <h3 className={styles.boxTitle}>Информация о разбалловке</h3>
          <Toggle label="Зачет" name="exam-toggle" toggleWrapperClassName={styles.boxTogglerWithLabel} />
        </div>
        <div className={styles.boxBody}>
          <div className={styles.mark}>
            <Input
              label="Оценка “Отлично”"
              name="excellent-mark"
              type="number"
              placeholder="От"
              inputGroupClassName={styles.markInput}
              inputWidth={136}
            />
            <Input type="number" placeholder="До" inputWidth={136} />
          </div>
          <div className={styles.mark}>
            <Input
              label="Оценка “Хорошо”"
              name="good-mark"
              type="number"
              placeholder="От"
              inputGroupClassName={styles.markInput}
              inputWidth={136}
            />
            <Input type="number" placeholder="До" inputWidth={136} />
          </div>
          <div className={styles.mark}>
            <Input
              label="Оценка “Удовл.”"
              name="satisfactory-mark"
              type="number"
              placeholder="От"
              inputGroupClassName={styles.markInput}
              inputWidth={136}
            />
            <Input type="number" placeholder="До" inputWidth={136} />
          </div>
        </div>
      </div>
      <Button type="button" style="primary" text="Создать задание" isLarge className={styles.createTask} />
    </div>
  )
}

export default AddTask
