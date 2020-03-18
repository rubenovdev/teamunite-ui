import React, { FC, ReactNode } from 'react'

import styles from './Wrapper.module.scss'

const Wrapper: FC<Props> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}

export default Wrapper

interface Props {
  children: ReactNode
}
