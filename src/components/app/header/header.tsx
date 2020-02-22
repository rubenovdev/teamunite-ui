import React from 'react'
import styles from './header.module.scss'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/images/logo.svg'

const Header = () => {
  return (
    <header>
      <h1 className="visually-hidden">
        Подбор студенческих команд в Московском политехе
      </h1>
      <div className={styles.wrapper}>
        <div className={styles.sitetoolbar}>
          <button type="button">
            <span className={styles.line}></span>
          </button>
        </div>
        <div className={styles.logoWrapper}>
          <NavLink to="/">
            <img className={styles.logo} src={logo} alt="" />
          </NavLink>
        </div>
        <div className={styles.loginButton}>
          <button>Войти</button>
        </div>
      </div>
    </header>
  )
}

export default Header
