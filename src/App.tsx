import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Assets from './pages/Assets/Assets'

const App: FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/assets" component={Assets} />
      </Switch>
    </Router>
  )
}

export default App
