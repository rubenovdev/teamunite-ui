import React, { FC, ReactNode } from 'react'
import PropTypes from 'prop-types'
import styles from './wrapper.module.scss'

interface Props {
  children: ReactNode
}

const Wrapper: FC<Props> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}

Wrapper.propTypes = {
  children: PropTypes.node,
}

export default Wrapper
