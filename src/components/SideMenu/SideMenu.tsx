import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

import styles from './SideMenu.module.scss'

const SideMenu: FC = () => {
  return (
    <aside className={styles.sideMenu}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <NavLink to="/" className={classNames(styles.menuLink, styles.checkIcon)}></NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/" className={classNames(styles.menuLink, styles.retakeIcon)}></NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/" className={classNames(styles.menuLink, styles.dashboardIcon)}></NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/" className={classNames(styles.menuLink, styles.addAdminIcon)}></NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default SideMenu
