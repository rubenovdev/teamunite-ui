import React, { FC } from 'react'
import styles from './announcement-board.module.scss'
import { NavLink } from 'react-router-dom'
import Button from '../button'

const AnnouncementBoard: FC = () => {
  const announcements = [
    {
      id: 0,
      text: 'Открыта регистрация на хакатон',
      author: 'Даньшина М.В.',
    },
    {
      id: 1,
      text: 'Открыта регистрация на хакатон',
      author: 'Даньшина М.В.',
    },
    {
      id: 2,
      text: 'Открыта регистрация на хакатон',
      author: 'Даньшина М.В.',
    },
  ]

  const renderAnnouncements = (): JSX.Element[] => {
    return announcements.map(announcement => {
      return (
        <button
          key={announcement.id}
          type="button"
          className={styles.announcement}
        >
          <p className={styles.announcementText}>{announcement.text}</p>
          <NavLink to="/author" className={styles.announcementAuthor}>
            {announcement.author}
          </NavLink>
        </button>
      )
    })
  }

  return (
    <div className={styles.announcementBoard}>
      <div className={styles.announcementBoardTitleWrapper}>
        <h3 className={styles.announcementBoardTitle}>Доска объявлений</h3>
      </div>
      <div className={styles.announcementsWrapper}>
        <div className={styles.announcements}>{renderAnnouncements()}</div>
        <div className={styles.announcementsButtonWrapper}>
          <Button text={'Добавить'} />
        </div>
      </div>
    </div>
  )
}

export default AnnouncementBoard
