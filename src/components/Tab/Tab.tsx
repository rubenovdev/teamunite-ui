import React, { FC } from 'react'
import classNames from 'classnames'

import styles from './Tab.module.scss'

interface Props {
  activeTab: string
  tabName: string
  onTabClick: (tabName: string) => void
}

const Tab: FC<Props> = ({ activeTab, tabName, onTabClick }: Props) => {
  const tabClass = classNames(
    styles.tab,
    activeTab === tabName && styles.tabActive
  )

  return (
    <li className={tabClass} onClick={(): void => onTabClick(tabName)}>
      {tabName}
    </li>
  )
}

export default Tab
