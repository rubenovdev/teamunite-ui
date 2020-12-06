import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

import styles from './Header.module.scss'
import logo from 'assets/images/logo.svg'

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Логотип Московский Политех" width={140} height={37} className={styles.logo} />
      <nav>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <NavLink to="/" className={classNames(styles.menuLink, styles.addFileIcon)}></NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/" className={classNames(styles.menuLink, styles.layersIcon)}></NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink to="/" className={classNames(styles.menuLink, styles.logoutIcon)}></NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
