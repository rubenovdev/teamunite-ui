import React, { FC } from 'react'
import styles from './homepage.module.scss'
import hourglass from '../../assets/images/hourglass.svg'
import projectsSearch from '../../assets/images/projects-search.svg'
import createProject from '../../assets/images/create-project.svg'
import hackathon from '../../assets/images/hackathon.svg'
import projectActivity from '../../assets/images/project-activity.svg'
import MenuCard from '../menu-card'
import AnnouncementBoard from '../announcement-board'

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
            title="Создать проект"
            href="add-project"
            src={createProject}
          />
          <MenuCard title="Хакатоны" href="hackathon" src={hackathon} />
          <MenuCard
            title="О проектной деятельности"
            href="project-activity"
            src={projectActivity}
          />
        </div>
        <AnnouncementBoard />
      </div>
    </>
  )
}

export default Homepage
