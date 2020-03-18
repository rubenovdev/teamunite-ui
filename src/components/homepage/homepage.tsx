import React, { FC } from 'react'
import styles from './homepage.module.scss'
import hourglass from '../../assets/images/hourglass.svg'
import projectsSearch from '../../assets/images/projects-search.svg'
import initiativeProject from '../../assets/images/initiative-project.svg'
import engeneerActivity from '../../assets/images/engeneer-activity.svg'
import partnersProjects from '../../assets/images/partners-projects.svg'
import MenuCard from '../menu-card'
import AnnouncementBoard from '../AnnouncementBoard/AnnouncementBoard'

const Homepage: FC = () => {
  return (
    <>
      <h3 className={styles.homeTitle}>Главная</h3>

      <div className={styles.mainContent}>
        <div className={styles.daysTimer}>
          <p className={styles.daysTimerText}>До защиты осталось</p>
          <div className={styles.daysTimerCounter}>
            <p className={styles.daysTimerCounterText}>15 дней</p>
            <div className={styles.daysTimerCounterImg}>
              <img src={hourglass} alt="песочные часы" />
            </div>
          </div>
        </div>
        <div className={styles.mainMenu}>
          <MenuCard
            title="Поиск проектов"
            href="projects-search"
            src={projectsSearch}
          />
          <MenuCard
            title="Инженерное проектирование"
            href="engeneer-activity"
            src={engeneerActivity}
          />
          <MenuCard
            title="Инициативный проект"
            href="initiative-project"
            src={initiativeProject}
          />
          <MenuCard
            title="Проекты партнеров"
            href="partners-projects"
            src={partnersProjects}
          />
        </div>
        <AnnouncementBoard />
      </div>
    </>
  )
}

export default Homepage
