import React from 'react'
import Header from '../header'
import { BrowserRouter } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
}

export default App
