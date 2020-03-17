import React, { FC, useState } from 'react'
import styles from './announcements-page.module.scss'
import { NavLink } from 'react-router-dom'
import { announcements } from '../../fixtures'
import StarButton from '../star-button'
import RightArrowButton from '../right-arrow-button'
import leftArrow from '../../assets/images/arrows/left-arrow.svg'
import danshina from '../../assets/images/authors/danshina.svg'

const AnnouncementsPage: FC = () => {
  const [selectedAnnouncementIndex, setSelectedAnnouncementIndex] = useState(0)
  const { text, author, date } = announcements[selectedAnnouncementIndex]

  const [starButtonClicked, isStarButtonClicked] = useState(false)

  const renderAnnouncements = (): JSX.Element[] => {
    return announcements.map(announcement => {
      return (
        <li className={styles.announcement} key={announcement.id}>
          <h3 className={styles._text}>{announcement.text}</h3>
          <img
            className={styles._authorImage}
            src={danshina}
            alt="Даньшина Марина"
          />
          <h3 className={styles._author}>{announcement.author}</h3>
          <h3 className={styles._date}>{announcement.date}</h3>
        </li>
      )
    })
  }

  const onStarButtonClick = (): void => {
    isStarButtonClicked(!starButtonClicked)
  }

  const onRightArrowClick = (): void => {
    setSelectedAnnouncementIndex(
      selectedAnnouncementIndex === announcements.length - 1
        ? 0
        : selectedAnnouncementIndex + 1
    )
  }

  const announcementsWrapperStyle = {
    gridTemplateColumns: announcements.length === 1 ? '1fr' : '',
    minHeight: announcements.length === 1 ? '444px' : '',
  }

  const announcementsStyle = {
    display: announcements.length === 1 ? 'none' : '',
  }

  const rightPanelSideStyle = {
    display: announcements.length === 1 ? 'none' : '',
  }

  return (
    <div>
      <h3 className={styles.pageTitle}>Объявления</h3>
      <div
        style={announcementsWrapperStyle}
        className={styles.announcementsWrapper}
      >
        <div className={styles.selectedAnnouncement}>
          <div className={styles.content}>
            <div className={styles.header}>
              <h3 className={styles.title}>{text}</h3>
              <div className={styles.saveWrapper}>
                <button
                  type="button"
                  className={styles.starButton}
                  onClick={onStarButtonClick}
                >
                  <StarButton clicked={starButtonClicked} />
                </button>
                <h3 className={styles.saveButtonText}>Сохранить</h3>
              </div>
            </div>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>
            <div className={styles.authorWrapper}>
              <img
                className={styles.authorImage}
                src={danshina}
                alt="Даньшина Марина"
              />
              <h3 className={styles.authorName}>{author}</h3>
              <h3 className={styles.publishDate}>{date}</h3>
            </div>
          </div>
          <div className={styles.controlPanel}>
            <div className={styles.leftPanelSide}>
              <NavLink to="/" className={styles.leftArrow}>
                <img src={leftArrow} alt="кнопка на главную" />
              </NavLink>
              <h3 className={styles.leftPanelText}>На главную</h3>
            </div>
            <div style={rightPanelSideStyle} className={styles.rightPanelSide}>
              <h3 className={styles.rightPanelText}>Следующее</h3>
              <button
                type="button"
                className={styles.rightArrow}
                onClick={onRightArrowClick}
              >
                <RightArrowButton />
              </button>
            </div>
          </div>
        </div>
        <ul style={announcementsStyle} className={styles.announcements}>
          {renderAnnouncements()}
        </ul>
      </div>
    </div>
  )
}

export default AnnouncementsPage
