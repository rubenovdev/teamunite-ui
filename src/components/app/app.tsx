import React, { useRef } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styles from './app.module.scss'
import Modal from '../modal'
import Header from '../header'
import Homepage from '../homepage'
import Wrapper from '../wrapper'

const App: React.FC = () => {
  const modalRef = useRef() as React.MutableRefObject<{
    openModal: () => void
    closeModal: () => void
  }>

  const openModal = (): void => {
    modalRef.current.openModal()
  }

  const closeModal = (): void => {
    modalRef.current.closeModal()
  }

  const renderModalContent = (): JSX.Element => {
    return (
      <form className={styles.modalContent}>
        <input
          className={styles.formTitle}
          type="text"
          placeholder="Заголовок объявления"
        />
        <textarea
          className={styles.formText}
          placeholder="Текст объявления"
        ></textarea>
      </form>
    )
  }

  const renderAction = (): JSX.Element => {
    return (
      <button className={styles.addButton} type="button" onClick={closeModal}>
        Добавить
      </button>
    )
  }

  const onEscape = (e: React.KeyboardEvent): void => {
    e.which === 27 && closeModal()
  }

  return (
    <div onKeyDown={onEscape}>
      <Router>
        <Header />
        {/* <button type="button" onClick={openModal}>
          Добавить
        </button> */}
        <Wrapper>
          <Switch>
            <Route exact path="/" component={Homepage} />
          </Switch>
        </Wrapper>
      </Router>
      <Modal
        ref={modalRef}
        title="Добавление объявления"
        content={renderModalContent()}
        action={renderAction()}
        onEscape={onEscape}
      />
    </div>
  )
}

export default App
