import React, { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

import styles from './ProjectPage.module.scss'
import Tinkoff from '../../assets/images/tinkoff.svg'
import Danshina from '../../assets/images/authors/danshina.svg'
import Layers from '../../assets/images/layers.svg'
import Case from '../../assets/images/case.svg'
import BlackUser from '../../assets/images/black-user.svg'
import WhiteUser from '../../assets/images/white-user.svg'
import RightChevron from '../../assets/images/right-chevron.svg'
import { vacancies } from '../../fixtures'
import Button from '../Button/Button'
import Tabs from '../Tabs/Tabs'

const ProjectPage: FC = () => {
  const [activeVacancyIndex, setActiveVacancyIndex] = useState<number | null>(
    null
  )

  const onVacancyClick = (id: number): void => {
    setActiveVacancyIndex(id)
  }

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

  const renderUserIcon = (id: number): JSX.Element => {
    return id === activeVacancyIndex ? (
      <img
        className={styles.userIcon}
        src={WhiteUser}
        alt="Иконка пользователя"
      />
    ) : (
      <img
        className={styles.userIcon}
        src={BlackUser}
        alt="Иконка пользователя"
      />
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
    <div className={styles.mainContent}>
      {/* Хедер */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoAndTitle}>
            <NavLink to="/company" className={styles.headerCompanyLogo}>
              <img src={Tinkoff} alt="Тинкофф" />
            </NavLink>

            <h1 className={styles.headerTitle}>
              Разработка мобильного приложения на базе Android
            </h1>
          </div>

          <h6 className={styles.headerSubtitle}>
            Факультет информационных технологий
          </h6>
        </div>

        <NavLink to="/sign" className={styles.signBtn}>
          <Button text="Записаться" buttonStyle="enter" />
        </NavLink>
      </div>
      {/* ---------- */}

      <Tabs>
        {/* Описание проекта */}
        <div data-tabname="Описание" className={styles.description}>
          <p className={styles.descriptionContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
            <div style={{ padding: '10px' }}></div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
          <div className={styles.authorWrapper}>
            <img className={styles.authorImg} src={Danshina} alt="Даньшина" />
            <h3 className={styles.authorName}>Даньшина Марина</h3>
            <span className={styles.authorStatus}>Куратор</span>
          </div>
        </div>
        {/* ---------- */}

        {/* Вакансии */}
        <div data-tabname="Вакансии" className={styles.vacanciesWrapper}>
          {renderSelectVancancyWarningOrSkills()}
          <ul className={styles.vacancies}>{renderVacancies()}</ul>
        </div>
        {/* ---------- */}

        {/* О компании */}
        <div data-tabname="О компании" className={styles.aboutCompany}>
          <div className={styles.aboutCompanyInfo}>
            <NavLink to="/company" className={styles.aboutCompanyLogo}>
              <img src={Tinkoff} alt="Тинкофф" />
            </NavLink>
            <h6 className={styles.companyDescription}>
              Онлайн-экосистема, основанная на финансовых и лайфстайл-услугах
            </h6>
            <ul className={styles.benefits}>
              <li className={styles.benefit}>
                <img
                  className={styles.benefitIcon}
                  src={Layers}
                  alt="Доступные проекты"
                />
                <span className={styles.benefitTitle}>
                  Доступные проекты: 5
                </span>
              </li>
              <li className={styles.benefit}>
                <img
                  className={styles.benefitIcon}
                  src={Case}
                  alt="Стажировка"
                />
                <span className={styles.benefitTitle}>Возможна стажировка</span>
              </li>
            </ul>
          </div>
          <p className={styles.addInfo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
        </div>
        {/* ---------- */}
      </Tabs>
    </div>
  )
}

export default ProjectPage
