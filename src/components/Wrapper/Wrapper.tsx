import React, { FC, ReactNode } from 'react'
import styles from './wrapper.module.scss'

interface Props {
  children: ReactNode
}

const Wrapper: FC<Props> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}

export default Wrapper
