import React, { FC, useState } from 'react'

import styles from './Tabs.module.scss'
import Tab from '../Tab/Tab'

interface Props {
  children: JSX.Element[]
}

const Tabs: FC<Props> = ({ children }: Props) => {
  const [activeTab, setActiveTab] = useState<string>(
    children[1].props['data-tabname']
  )

  const onTabClick = (tabName: string): void => {
    setActiveTab(tabName)
  }

  const renderTabsItems = (): JSX.Element[] => {
    return children.map(child => {
      const tabName = child.props['data-tabname']

      return (
        <Tab
          key={tabName}
          activeTab={activeTab}
          tabName={tabName}
          onTabClick={onTabClick}
        />
      )
    })
  }

  const renderTabContent = (): (JSX.Element | false)[] => {
    return children.map(child => {
      return child.props['data-tabname'] === activeTab && child
    })
  }

  return (
    <div className={styles.tabs}>
      <ul className={styles.tabsList}>{renderTabsItems()}</ul>

      <div className={styles.tabContent}>{renderTabContent()}</div>
    </div>
  )
}

export default Tabs
