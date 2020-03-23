import React, { FC } from 'react'

import styles from './ProjectDescription.module.scss'
import Danshina from '../../assets/images/authors/danshina.svg'

const ProjectDescription: FC = () => {
  return (
    <div className={styles.description}>
      <p className={styles.descriptionContent}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
        <div style={{ padding: '10px' }}></div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
      </p>
      <div className={styles.authorWrapper}>
        <img className={styles.authorImg} src={Danshina} alt="Даньшина" />
        <h3 className={styles.authorName}>Даньшина Марина</h3>
        <span className={styles.authorStatus}>Куратор</span>
      </div>
    </div>
  )
}

export default ProjectDescription
