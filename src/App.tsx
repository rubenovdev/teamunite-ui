import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

import { token } from 'src/static'
import Wrapper from 'components/Wrapper/Wrapper'
import Header from 'components/Header/Header'
import SideMenu from 'components/SideMenu/SideMenu'
import Authorization from './pages/Authorization/Authorization'
import AdminCheckView from './pages/AdminCheckView/AdminCheckView'

const App: FC = () => {
  const privateRoute = page => {
    if (Cookies.get(token)) {
      return page
    } else {
      return <Redirect to="/auth" />
    }
  }

  return (
    <Router>
      <Wrapper>
        <Header />
        <SideMenu />
        <Switch>
          <Route exact path="/test" component={AdminCheckView} />
          <Route exact path="/auth" component={Authorization} />
          <Route exact path="/tasks" render={() => privateRoute(<div>Список заданий</div>)} />
        </Switch>
      </Wrapper>
    </Router>
  )
}

export default App
