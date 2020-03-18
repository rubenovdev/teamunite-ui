import React, { FC, useState } from 'react'
import styles from './announcements-page.module.scss'
import { NavLink } from 'react-router-dom'
import { announcements } from '../../fixtures'
import StarButton from '../star-button'
import RightArrowButton from '../right-arrow-button'
import leftArrow from '../../assets/images/arrows/left-arrow.svg'
import danshina from '../../assets/images/authors/danshina.svg'

interface Props {
  location: {
    state: {
      selectedIndex: number
    }
  }
}

const AnnouncementsPage: FC<Props> = ({ location }: Props) => {
  const [selectedAnnouncementIndex, setSelectedAnnouncementIndex] = useState(
    location.state.selectedIndex
  )
  const { text, author, date } = announcements[selectedAnnouncementIndex]

  const [isStarButtonClicked, setIsStarButtonClicked] = useState(false)

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
          <p className={styles._author}>{announcement.author}</p>
          <time className={styles._date}>{announcement.date}</time>
        </li>
      )
    })
  }

  const onStarButtonClick = (): void => {
    setIsStarButtonClicked(!isStarButtonClicked)
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
              <button
                type="button"
                className={styles.starButton}
                onClick={onStarButtonClick}
              >
                <StarButton clicked={isStarButtonClicked} />
                <span className={styles.saveButtonText}>Сохранить</span>
              </button>
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
              <p className={styles.authorName}>{author}</p>
              <time className={styles.publishDate}>{date}</time>
            </div>
          </div>
          <div className={styles.controlPanel}>
            <NavLink to="/" className={styles.leftPanelSide}>
              <img
                className={styles.leftArrow}
                src={leftArrow}
                alt="Перейти на главную"
              />
              <span className={styles.leftPanelText}>На главную</span>
            </NavLink>
            <div>
              <button
                style={rightPanelSideStyle}
                className={styles.rightPanelSide}
                type="button"
                onClick={onRightArrowClick}
              >
                <span className={styles.rightPanelText}>Следующее</span>
                <span className={styles.rightArrow}>
                  <RightArrowButton />
                </span>
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
