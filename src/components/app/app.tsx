import React from 'react'
import styles from './app.module.scss'

const App = () => {
  const openModal = () => {
    console.log('open modal')
  }

  return (
    <div>
      <button type="button" onClick={openModal}>
        Добавить
      </button>
    </div>
  )
}

export default App
