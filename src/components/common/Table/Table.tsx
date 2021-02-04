import React, { FC } from 'react'
import { useTable, Column } from 'react-table'

import styles from './Table.module.scss'

const Table: FC<Props> = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })

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
            <tr key={rowIndex} {...row.getRowProps()} className={styles.tr}>
              {row.cells.map((cell, cellIndex) => {
                return (
                  <td key={cellIndex} {...cell.getCellProps()} className={styles.td}>
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
}

export default Table
