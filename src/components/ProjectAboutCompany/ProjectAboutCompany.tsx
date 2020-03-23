import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './ProjectAboutCompany.module.scss'
import Tinkoff from '../../assets/images/tinkoff.svg'
import Layers from '../../assets/images/layers.svg'
import Case from '../../assets/images/case.svg'

const ProjectAboutCompany: FC = () => {
  return (
    <div className={styles.aboutCompany}>
      <div className={styles.aboutCompanyInfo}>
        <NavLink to="/company" className={styles.aboutCompanyLogo}>
          <img src={Tinkoff} alt="Тинкофф" />
        </NavLink>
        <h3 className={styles.companyDescription}>
          Онлайн-экосистема, основанная на финансовых и лайфстайл-услугах
        </h3>
        <ul className={styles.benefits}>
          <li className={styles.benefit}>
            <NavLink to="/company-skills" className={styles.benefitWrapper}>
              <img
                className={styles.benefitIcon}
                src={Layers}
                alt="Доступные проекты"
              />
              <span className={styles.benefitTitle}>Доступные проекты: 5</span>
            </NavLink>
          </li>
          <li className={styles.benefit}>
            <NavLink to="/company-skills" className={styles.benefitWrapper}>
              <img className={styles.benefitIcon} src={Case} alt="Стажировка" />
              <span className={styles.benefitTitle}>Возможна стажировка</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <p className={styles.addInfo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
      </p>
    </div>
  )
}

export default ProjectAboutCompany
