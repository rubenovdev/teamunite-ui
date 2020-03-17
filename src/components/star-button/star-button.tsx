import React, { FC } from 'react'

interface Props {
  clicked: boolean
}

const StarButton: FC<Props> = ({ clicked }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.513 24.311">
      <path
        id="Path_314"
        data-name="Path 314"
        d="M2240.253,3309.056l-3.265,7.8-9,.813,6.952,5.459-2.138,7.93,7.451-4.312,4.377,2.813,2.334,1.5-1.323-7.93,6.347-5.459-8.329-.813Z"
        transform="translate(-2226.689 -3307.785)"
        fill={clicked ? '#242424' : 'none'}
        stroke="#242424"
        strokeWidth="1"
      />
    </svg>
  )
}

export default StarButton
