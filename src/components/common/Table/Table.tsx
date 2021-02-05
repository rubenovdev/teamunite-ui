import React, { FC } from 'react'
import { useTable, Column } from 'react-table'
import { useHistory } from 'react-router-dom'
import classNames from 'classnames'

import styles from './Table.module.scss'

const Table: FC<Props> = ({ columns, data, link, isBig }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })
  const history = useHistory()

  const onRowClick = (): void => {
    if (link) {
      history.push(link)
    }
  }

  return (
    <table {...getTableProps()} className={styles.table} id="table">
      <thead>
        {headerGroups.map((headerGroup, headerGroupIndex) => (
          <tr key={headerGroupIndex} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, columnIndex) => (
              <th key={columnIndex} {...column.getHeaderProps()} className={styles.th}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, rowIndex) => {
          prepareRow(row)
          return (
            <tr
              key={rowIndex}
              {...row.getRowProps()}
              className={classNames(styles.tr, link && styles.trHover)}
              onClick={onRowClick}
            >
              {row.cells.map((cell, cellIndex) => {
                return (
                  <td key={cellIndex} {...cell.getCellProps()} className={classNames(styles.td, isBig && styles.tdBig)}>
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

interface Props {
  columns?: Column[]
  data?: unknown[]
  link?: string
  isBig?: boolean
}

export default Table
