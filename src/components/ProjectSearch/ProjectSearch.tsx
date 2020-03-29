import React, { FC, useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchProjects } from '../../store/action-creators'
import styles from './ProjectSearch.module.scss'
import Button from '../Button/Button'
import CustomSelect from '../CustomSelect/CustomSelect'
import Project from '../Project/Project'

const ProjectSearch: FC<Props> = ({
  projects,
  projectsLoading,
  projectsLoaded,
  fetchProjects,
}) => {
  useEffect(() => {
    !projectsLoading && !projectsLoaded && fetchProjects()
  }, [fetchProjects, projectsLoading, projectsLoaded])

  const [selectedItem, setSelectedItem] = useState<string>('Сначала новые')

  const selectData: Array<string> = [
    'Сначала новые',
    'Сначала старые',
    'Сначала долгосрочные',
    'Сначала краткосрочные',
  ]

  const countPlaces = (): number => {
    let places = 0
    for (let i = 0; i < projects.length; i++) {
      for (let j = 0; i < projects[i].vacancies.length; i++) {
        places += projects[i].vacancies[j].quantity
      }
    }
    return places
  }

  if (!projects && projectsLoaded) {
    return <div>Данные отсутствуют</div>
  }

  if (projectsLoading) {
    return <div>Загрузка...</div>
  }

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
            key={project._id}
            company={project.company.name}
            places={countPlaces()}
            description={project.description}
          />
        ))}
      </ul>
    </>
  )
}

interface Props {
  projects: Array<any>
  projectsLoading: boolean
  projectsLoaded: boolean
  fetchProjects: Function
}

const mapStateToProps = (state: any): Record<string, any> => ({
  projects: state.projects.entities,
  projectsLoading: state.projects.loading,
  projectsLoaded: state.projects.loaded,
})

const mapDispatchToProps = {
  fetchProjects,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSearch)
