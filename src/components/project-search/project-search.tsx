import React, { FC } from 'react'
import styles from './project-search.module.scss'
import Wrapper from '../wrapper'
import Button from '../button'
import { projects } from '../../fixtures'
import logo from '../../assets/images/companyLogo.svg'

const ProjectSearch: FC = () => {
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
    <Wrapper>
      <h1 className={styles.tittle}>Поиск проектов</h1>
      <div className={styles.searchWrapper}>
        <label className={styles.searchLabel}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Поиск"
          />
        </label>
        <label style={{ display: 'block' }} className={styles.sortingLabel}>
          <div>
            <select className={styles.sortingSelect} name="select">
              <option value="value1">Сначала новые</option>
              <option value="value2">2</option>
              <option value="value3">3</option>
            </select>
          </div>
        </label>
        <Button buttonStyle={'filters'} text={'Фильтры'} />
      </div>
      <div className={styles.projects}>
        {projects.map(project => (
          <div className={styles.project} key={project.id}>
            <div className={styles.logoAndPlaces}>
              {logo ? (
                <div className={styles.logo}>
                  <img src={logo} alt={project.company} />
                </div>
              ) : (
                <div className={styles.companyName}>@{project.company}</div>
              )}
              <span className={styles.places}>
                {project.places} {placesCase(project.places)}
              </span>
            </div>
            <p className={styles.description}>{project.description}</p>
            <button className={styles.detailed}>Подробнее</button>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default ProjectSearch
