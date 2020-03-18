import React, { FC, useState } from 'react'
import styles from './project-search.module.scss'
import Button from '../button'
import CustomSelect from '../custom-select'
import { projects } from '../../fixtures'
import Project from '../project'

const ProjectSearch: FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>('Сначала новые')

  const selectData: Array<string> = [
    'Сначала новые',
    'Сначала старые',
    'Сначала долгосрочные',
    'Сначала краткосрочные',
  ]

  return (
    <>
      <h1 className={styles.tittle}>Поиск проектов</h1>
      <div className={styles.searchWrapper}>
        <label className={styles.searchLabel}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Поиск"
          />
        </label>
        <CustomSelect
          title={selectedItem}
          list={selectData}
          selectedItem={setSelectedItem}
          selectStyle={'searchProject'}
        />
        <Button buttonStyle={'filters'} text={'Фильтры'} />
      </div>
      <ul className={styles.projects}>
        {projects.map(project => (
          <Project
            key={project.id}
            company={project.company}
            places={project.places}
            description={project.description}
          />
        ))}
      </ul>
    </>
  )
}

export default ProjectSearch
