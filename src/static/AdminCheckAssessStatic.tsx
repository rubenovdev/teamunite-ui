/* eslint-disable react/display-name */
import React from 'react'
import exclamationMark from '../assets/images/exclamationMark.svg'
import yellowCircle from '../assets/images/yellowCircle.svg'

export const OPTIONS = [
  { text: 'Все', value: 'all' },
  { text: 'Не проверено', value: 'not-verified' },
  { text: 'Проверено', value: 'verified' },
]

export const COLUMNS = [
  { Header: 'Студент', accessor: 'name' },
  { Header: 'Тема', accessor: 'project' },
  { Header: 'Балл', accessor: 'points' },
  { Header: 'Оценка', accessor: 'mark' },
  {
    Header: 'Статус',
    accessor: 'status',
    Cell: row => {
      const style = { display: 'block', marginLeft: 'auto' }
      switch (row.value) {
        case 'сдано на проверку':
          return <img src={yellowCircle} alt="" style={style} />
        case 'тема на утверждении':
          return <img src={exclamationMark} alt="" style={style} />
        default:
          return ''
      }
    },
  },
]

export const GROUPS = [
  {
    group: '181-321',
    students: [
      { name: 'Петров Иван', project: 'Магазин кактусов', points: '10', mark: 'Отлично', status: 'сдано на проверку' },
      {
        name: 'Иванов Иван',
        project: 'Магазин кактусов',
        points: 'Отсутствует',
        mark: 'Отсутствует',
        status: 'не проверено',
      },
    ],
  },
  {
    group: '181-322',
    students: [
      {
        name: 'Маргарян Гамлет',
        project: 'Магазин кактусов',
        points: '20',
        mark: 'Отлично',
        status: 'проверено',
      },
      {
        name: 'Акакий Акакиевич',
        project: 'Магазин кактусов',
        points: 'Отсутствует',
        mark: 'Отсутствует',
        status: 'тема на утверждении',
      },
    ],
  },
]
