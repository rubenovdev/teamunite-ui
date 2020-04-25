import React, { FC } from 'react'
import classNames from 'classnames'

import styles from './Tab.module.scss'

interface Props {
  activeTab: string
  tabName: string
  onTabClick: (tabName: string) => void
  style: string
}

const Tab: FC<Props> = ({ activeTab, tabName, onTabClick, style }: Props) => {
  const tabClass = classNames(
    styles[style + 'Tab'],
    activeTab === tabName && styles[style + 'TabActive']
  )

  return (
    <li className={tabClass} onClick={(): void => onTabClick(tabName)}>
      {tabName}
    </li>
  )
}

export default Tab
