import React, { FC /* useState */ } from 'react'
import styles from './announcements-page.module.scss'
import bigWhiteStar from '../../assets/images/star/big-white-star.svg'
import leftArrow from '../../assets/images/arrows/left-arrow.svg'
import rightArrow from '../../assets/images/arrows/right-arrow.svg'
import danshina from '../../assets/images/authors/danshina.svg'

const AnnouncementsPage: FC = () => {
  // const announcements: { id: number; text: string; author: string }[] = [
  //   {
  //     id: 0,
  //     text: 'Открыта регистрация на хакатон',
  //     author: 'Даньшина М.В.',
  //   },
  //   {
  //     id: 1,
  //     text: 'Открыта регистрация на хакатон',
  //     author: 'Даньшина М.В.',
  //   },
  //   {
  //     id: 2,
  //     text: 'Открыта регистрация на хакатон',
  //     author: 'Даньшина М.В.',
  //   },
  // ]

  // const [selectedAnnouncement, setSelectedAnnouncement] = useState(announcements[0])

  return (
    <div>
      <h3 className={styles.pageTitle}>Объявления</h3>
      <div className={styles.announcementsWrapper}>
        <div className={styles.selectedAnnouncement}>
          <div className={styles.content}>
            <h3 className={styles.title}>«Началась запись на проекты ИТ»</h3>
            <div className={styles.saveWrapper}>
              <img
                className={styles.starButton}
                src={bigWhiteStar}
                alt="кнопка сохранить"
              />
              <h3 className={styles.saveButtonText}>Сохранить</h3>
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
              <h3 className={styles.authorName}>Даньшина Марина</h3>
              <h3 className={styles.publishDate}>20.02.2020</h3>
            </div>
          </div>
          <div className={styles.controlPanel}>
            <img
              className={styles.leftArrow}
              src={leftArrow}
              alt="кнопка на главную"
            />
            <img
              className={styles.rightArrow}
              src={rightArrow}
              alt="следующее объявление"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnnouncementsPage
