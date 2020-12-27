import CustomButton from 'components/common/CustomButton/CustomButton'
import Button from 'components/common/Button/Button'
import React, { FC } from 'react'

import layersIcon from '../../assets/images/layersIcon.svg'

const AdminCheckView: FC = () => {
    return (
        <div>
            <h1>Очень сложный проект</h1>

            <Button text = 'Скачать в pdf' type = 'button' isDisabled style = 'primary' />
            <Button text = 'Редактировать' type = 'button' isDisabled style = 'primary' />
            <CustomButton type = 'button'><img src= {layersIcon} alt="dfssdf"/></CustomButton>
        </div>
    )
}

export default AdminCheckView
