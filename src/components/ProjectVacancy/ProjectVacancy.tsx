import React, { FC, useState } from 'react'
import classNames from 'classnames'

import styles from './ProjectVacancy.module.scss'
import { vacancies } from '../../fixtures'
import BlackUser from '../../assets/images/black-user.svg'
import WhiteUser from '../../assets/images/white-user.svg'
import RightChevron from '../../assets/images/right-chevron.svg'

const ProjectVacancy: FC = () => {
  const [activeVacancyIndex, setActiveVacancyIndex] = useState<number | null>(
    null
  )

  const renderSelectVancancyWarningOrSkills = (): JSX.Element | false => {
    return activeVacancyIndex === null ? (
      <div className={styles.selectVacancyWarningWrapper}>
        <h3 className={styles.selectVacancyWarning}>
          Выберите вакансию для просмотра
        </h3>
      </div>
    ) : (
      <div className={styles.separateSkills}>
        <h3 className={styles.skillsTitle}>Необходимые навыки</h3>
        <p className={styles.skillsDescription}>
          {vacancies[activeVacancyIndex].skills}
        </p>
      </div>
    )
  }

  const onVacancyClick = (id: number): void => {
    setActiveVacancyIndex(id)
  }

  const renderUserIcon = (id: number): JSX.Element => {
    const src = id === activeVacancyIndex ? WhiteUser : BlackUser

    return (
      <img className={styles.userIcon} src={src} alt="Иконка пользователя" />
    )
  }

  const renderRightChevron = (id: number): JSX.Element | false => {
    return (
      id === activeVacancyIndex && (
        <img
          className={styles.rightChevron}
          src={RightChevron}
          alt="Подробно"
        />
      )
    )
  }

  const renderVacancies = (): JSX.Element[] => {
    return vacancies.map(vacancy => {
      const vacancyContentClass = classNames(
        styles.vacancyContent,
        activeVacancyIndex === vacancy.id && styles.activeVacancyContent
      )

      return (
        <li className={styles.vacancy} key={vacancy.id}>
          <div
            className={vacancyContentClass}
            onClick={() => onVacancyClick(vacancy.id)}
          >
            <h3 className={styles.vacancyName}>{vacancy.name}</h3>
            <div className={styles.vacancyRateWrapper}>
              {renderUserIcon(vacancy.id)}
              <span className={styles.vacancyRate}>{vacancy.rate}</span>
              {renderRightChevron(vacancy.id)}
            </div>
          </div>
          {activeVacancyIndex === vacancy.id && (
            <div className={styles.skills}>
              <h3 className={styles.skillsTitle}>Необходимые навыки</h3>
              <p className={styles.skillsDescription}>{vacancy.skills}</p>
            </div>
          )}
        </li>
      )
    })
  }

  return (
    <div className={styles.vacanciesWrapper}>
      {renderSelectVancancyWarningOrSkills()}
      <ul className={styles.vacancies}>{renderVacancies()}</ul>
    </div>
  )
}

export default ProjectVacancy
