import React, { FC } from './node_modules/react'
import styles from './project.module.scss'
import logo from '../../assets/images/companyLogo.svg'

interface Props {
  company: string
  places: number
  description: string
}

const Project: FC<Props> = ({ company, places, description }) => {
  const placesCase = (count: number): string => {
    if (
      count % 10 === 0 ||
      count % 10 === 5 ||
      count % 10 === 6 ||
      count % 10 === 7 ||
      count % 10 === 8 ||
      count % 10 === 9 ||
      count === 11 ||
      count === 12 ||
      count === 13 ||
      count === 14
    )
      return 'мест'
    else if (count % 10 === 1 && count !== 11) return 'место'
    else return 'места'
  }

  return (
    <>
      <li className={styles.project}>
        <div className={styles.logoAndPlaces}>
          {logo ? (
            <button className={styles.logo}>
              <img src={logo} alt={company} />
            </button>
          ) : (
            <div className={styles.companyName}>@{company}</div>
          )}
          <span className={styles.places}>
            {places} {placesCase(places)}
          </span>
        </div>
        <p className={styles.description}>{description}</p>
        <button className={styles.detailed}>Подробнее</button>
      </li>
    </>
  )
}

export default Project
