import React, { FC, useState } from 'react'

import styles from './Tabs.module.scss'
import Tab from '../Tab/Tab'

const Tabs: FC<Props> = ({ children, style }) => {
  const [activeTab, setActiveTab] = useState<string>(
    children[0].props['data-tabname']
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
          style={style}
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
    <div className={styles[style + 'Tabs']}>
      <ul className={styles[style + 'TabsList']}>{renderTabsItems()}</ul>
      <div className={styles[style + 'TabContent']}>{renderTabContent()}</div>
    </div>
  )
}

export default Tabs

interface Props {
  children: JSX.Element[]
  style: string
}
