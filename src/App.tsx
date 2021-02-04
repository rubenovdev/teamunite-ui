import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
import Wrapper from 'components/Wrapper/Wrapper'
import Header from 'components/Header/Header'
import SideMenu from 'components/SideMenu/SideMenu'
import AddTask from './pages/AddTask/AddTask'
import Authorization from './pages/Authorization/Authorization'
import Tasks from './pages/Tasks/Tasks'
import AdminCheckAssess from './pages/AdminCheckAssess/AdminCheckAssess'

import styles from './App.module.scss'

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
            <Route path="/admin-check-assess" component={AdminCheckAssess} />
            <Route exact path="/auth" component={Authorization} />
            <Route exact path="/tasks" render={() => privateRoute(<Tasks />)} />
          </Switch>
        </main>
      </Wrapper>
    </Router>
  )
}

export default App
