import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './ProjectDescription.module.scss'
import Danshina from '../../../assets/images/authors/danshina.svg'
import { curators } from '../../../fixtures'

const ProjectDescription: FC = () => {
  const renderCurators = (): JSX.Element[] => {
    return curators.map(curator => {
      return (
        <li className={styles.curator} key={curator.id}>
          <NavLink to="/curators" className={styles.curatorWrapper}>
            <img
              className={styles.curatorImg}
              src={Danshina}
              alt="Фото куратора"
            />
            <h3 className={styles.curatorName}>{curator.name}</h3>
            <span className={styles.curatorStatus}>{curator.status}</span>
          </NavLink>
        </li>
      )
    })
  }

  return (
    <div className={styles.description}>
      <p className={styles.descriptionContent}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
      </p>
      <ul className={styles.curators}>{renderCurators()}</ul>
    </div>
  )
}

export default ProjectDescription
