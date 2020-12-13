import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import Wrapper from 'components/Wrapper/Wrapper'
import Header from 'components/Header/Header'
import SideMenu from 'components/SideMenu/SideMenu'
import Authorization from './pages/Authorization/Authorization'

const App: FC = () => {
  const privateRoute = page => {
    if (localStorage.getItem('accessToken')) {
      return page
    } else {
      return <Redirect to="/auth" />
    }
  }

  return (
    <Provider store={store}>
      <Router>
        <Wrapper>
          <Header />
          <SideMenu />
          <Switch>
            <Route exact path="/auth" render={() => <Authorization />} />
            <Route exact path="/tasks" render={() => privateRoute(<div>Список заданий</div>)} />
          </Switch>
        </Wrapper>
      </Router>
    </Provider>
  )
}

export default App
