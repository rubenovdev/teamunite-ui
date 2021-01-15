import React, { FC } from 'react'

import CustomButton from 'components/common/CustomButton/CustomButton'
import Button from 'components/common/Button/Button'

import styles from './AdminCheckView.module.scss' 

import layersIcon from '../../assets/images/layersIcon.svg'

const AdminCheckView: FC = () => {

  const list = ['181-322','181-321']

  return (
    <div className = {styles.container}> 
      <p className = {styles.caption}>Очень сложный проект</p>
        <div className={styles.buttons}>
          <Button text="Скачать в pdf" type="button" isDisabled style="primary" />
          <Button text="Редактировать" type="button" isDisabled style="primary" />
          <CustomButton type="button" icon={layersIcon} />
      </div>

      <ul>

      </ul>

      <ul>

      </ul>

      <ul>

      </ul>

      <ul>

      </ul>
      
      <ul>

      </ul>
      
    </div>
  )
}

export default AdminCheckView
