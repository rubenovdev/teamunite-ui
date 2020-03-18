import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './MenuCard.module.scss'

const MenuCard: FC<Props> = ({ title, href, src }: Props) => {
  const renderImgWrapperClassName = (): string | undefined => {
    switch (title) {
      case 'Поиск проектов':
        return styles.menuCardImgProjectsSearch
      case 'Инженерное проектирование':
        return styles.menuCardImgEngeneerActivity
      case 'Инициативный проект':
        return styles.menuCardImgInitiativeProject
      case 'Проекты партнеров':
        return styles.menuCardImgPartnersProjects
    }
  }

  return (
    <NavLink className={styles.menuCard} to={href}>
      <div className={styles.menuCardContent}>
        <h3 className={styles.menuCardTitle}>{title}</h3>
        <div className={renderImgWrapperClassName()}>
          <img className={styles.menuCardImg} src={src} alt={title} />
        </div>
      </div>
      <div className={styles.blackBorderBottom}>&nbsp;</div>
    </NavLink>
  )
}

export default MenuCard

interface Props {
  title: string
  src: string
  href: string
}
