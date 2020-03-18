import React, { FC } from 'react'
import styles from './announcement-board.module.scss'
import { announcements } from '../../fixtures'
import { NavLink } from 'react-router-dom'
import Button from '../button'

const AnnouncementBoard: FC = () => {
  const renderAnnouncements = (): JSX.Element[] => {
    return announcements.map(announcement => {
      return (
        <NavLink
          to={{
            pathname: '/announcements',
            state: {
              selectedIndex: announcement.id,
            },
          }}
          key={announcement.id}
          type="button"
          className={styles.announcement}
        >
          <p className={styles.announcementText}>{announcement.text}</p>
          <button className={styles.announcementAuthor}>
            {announcement.author}
          </button>
        </NavLink>
      )
    })
  }

  const renderButton = (): JSX.Element | false => {
    return (
      announcements.length >= 6 && (
        <div className={styles.announcementsButtonWrapper}>
          <Button buttonStyle={'detailed'} text={'Посмотреть все'} />
        </div>
      )
    )
  }

  const renderAnnouncementsWrapperContent = (): JSX.Element => {
    return announcements.length ? (
      <div className={styles.announcementsWrapper}>
        <div className={styles.announcements}>{renderAnnouncements()}</div>
        {renderButton()}
      </div>
    ) : (
      <div className={styles.noAnnouncementsWrapper}>
        <h3 className={styles.noAnnouncementsTitle}>Объявления отсутствуют</h3>
      </div>
    )
  }

  return (
    <div className={styles.announcementBoard}>
      <div className={styles.announcementBoardTitleWrapper}>
        <h3 className={styles.announcementBoardTitle}>Доска объявлений</h3>
      </div>
      {renderAnnouncementsWrapperContent()}
    </div>
  )
}

export default AnnouncementBoard
