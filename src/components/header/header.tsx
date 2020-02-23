import React, { useState } from 'react'
import styles from './header.module.scss'
import { NavLink } from 'react-router-dom'
import Button from '../button'
import logo from '../../assets/images/logo.svg'
import useWindowSize from '../../custom-hooks/use-window-size'

const Header = () => {
  const [width, height] = useWindowSize()

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
        {width >= 1024 && <Button text={'Войти'} />}
      </div>
    </header>
  )
}

export default Header
