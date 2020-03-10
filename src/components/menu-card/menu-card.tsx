import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './menu-card.module.scss'

interface Props {
  title: string
  src: string
  href: string
}

const MenuCard: FC<Props> = ({ title, href, src }: Props) => {
  const renderImgWrapperClassName = (): string | undefined => {
    switch (title) {
      case 'Поиск проектов':
        return styles.menuCardImgProjectsSearch
      case 'Создать проект':
        return styles.menuCardImgCreateProject
      case 'Хакатоны':
        return styles.menuCardImgHackathon
      case 'О проектной деятельности':
        return styles.menuCardImgProjectActivity
    }
  }

  return (
    <NavLink className={styles.menuCard} to={href}>
      <h3 className={styles.menuCardTitle}>{title}</h3>
      <div className={renderImgWrapperClassName()}>
        <img className={styles.menuCardImg} src={src} alt={title} />
      </div>
    </NavLink>
  )
}

export default MenuCard
