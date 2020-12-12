import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Wrapper from 'components/Wrapper/Wrapper'
import Header from 'components/Header/Header'
import SideMenu from 'components/SideMenu/SideMenu'
import Authorization from './pages/Authorization/Authorization'

const App: FC = () => {
  return (
    <Router>
      <Wrapper>
        <Header />
        <SideMenu />
        <Switch>
          <Route exact path="/auth" render={() => <Authorization />} />
        </Switch>
      </Wrapper>
    </Router>
  )
}

export default App
