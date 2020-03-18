import React, { FC } from 'react'
import whiteStar from '../../assets/images/stars/white-star.svg'
import blackStar from '../../assets/images/stars/black-star.svg'

interface Props {
  clicked: boolean
}

const StarButton: FC<Props> = ({ clicked }: Props) => {
  return clicked ? (
    <img src={blackStar} alt="Cохранить объявление" />
  ) : (
    <img src={whiteStar} alt="Cохранить объявление" />
  )
}

export default StarButton
