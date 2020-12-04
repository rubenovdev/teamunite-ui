import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Wrapper from './components/Wrapper/Wrapper'
import Header from './components/Header/Header'
import Assets from './pages/Assets/Assets'

const App: FC = () => {
  return (
    <Router>
      <Wrapper>
        <Header />
        <Switch>
          <Route path="/assets" component={Assets} />
        </Switch>
      </Wrapper>
    </Router>
  )
}

export default App
