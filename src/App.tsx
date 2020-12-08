import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Wrapper from 'components/Wrapper/Wrapper'
import Header from 'components/Header/Header'
import SideMenu from 'components/SideMenu/SideMenu'
import AddTask from './pages/AddTask/AddTask'

import styles from './App.module.scss'

const App: FC = () => {
  return (
    <Router>
      <Wrapper>
        <Header />
        <SideMenu />
        <main role="main" className={styles.main}>
          <Switch>
            <Route path="/add-task" component={AddTask} />
          </Switch>
        </main>
      </Wrapper>
    </Router>
  )
}

export default App
