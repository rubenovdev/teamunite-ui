import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Wrapper from 'components/Wrapper/Wrapper'
import Header from 'components/Header/Header'
import SideMenu from 'components/SideMenu/SideMenu'
import AddTask from './pages/AddTask/AddTask'
import Authorization from './pages/Authorization/Authorization'

import styles from './App.module.scss'
import Cookies from 'js-cookie'

import { token } from 'src/static'

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
        <main role="main" className={styles.main}>
          <Switch>
            <Route path="/add-task" component={AddTask} />
            <Route exact path="/auth" component={Authorization} />
            <Route exact path="/tasks" render={() => privateRoute(<div>Список заданий</div>)} />
          </Switch>
        </main>
      </Wrapper>
    </Router>
  )
}

export default App
