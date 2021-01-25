import * as React from 'react'
import { FC } from 'react'
interface Pros {
  time: any
}

export const TimeHandler: FC<Pros> = ({ time }) => {
  const date = new Date(time)

  const year = date.getDate() - 1
  const month = date.getMonth() + 1
  const day = date.getFullYear()

  return <p>{`${year}.${month}.${day}`}</p>
}
