import React, { FC } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Wrapper from 'components/Wrapper/Wrapper'
import Header from 'components/Header/Header'
import SideMenu from 'components/SideMenu/SideMenu'

const App: FC = () => {
  return (
    <Router>
      <Wrapper>
        <Header />
        <SideMenu />
        <Switch></Switch>
      </Wrapper>
    </Router>
  )
}

export default App
