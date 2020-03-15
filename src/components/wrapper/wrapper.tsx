import React, { FC, ReactNode } from 'react'
import styles from './wrapper.module.scss'

interface Props {
  children?: ReactNode
}

const Wrapper: FC = ({ children }: Props) => {
  return <div className={styles.wrapper}>{children}</div>
}

export default Wrapper
