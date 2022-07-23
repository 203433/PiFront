import React, { useMemo } from 'react'
import { useTable, usePagination } from 'react-table'
import columns1 from './Data/columns.js'
import mdata from './Data/mdata.json'
export const TableDatos = () => {
  const columns = useMemo(() => columns1, []);
  const data = useMemo(() => mdata, []);
/* 
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  })

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          {footerGroups.map(footerGroup => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map(column => (
                <td {...column.getFooterProps()}>{column.render('Footer')}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  )
}
export default TableDatos */
const {
  getTableProps,
  getTableBodyProps,
  headerGroups,
  page,
  nextPage,
  previousPage,
  canPreviousPage,
  canNextPage,
  pageOptions,
  state,
  gotoPage,
  pageCount,
  setPageSize,
  prepareRow
} = useTable(
  {
    columns,
    data,
    initialState: { pageIndex: 0 }
  },
  usePagination
)

const { pageIndex, pageSize } = state

return (
  <>
    <table className='table'  {...getTableProps()}>
      <thead style={{backgroundColor:"#EAEAEA"}}>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody style={{backgroundColor:"#FFFFFF"}} {...getTableBodyProps()}>
        {page.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
    <div  style={{float: "right", display: "flex", alignItems: "center"}}>
      <button className="btn shadow-none"  onClick={() => gotoPage(0)} disabled={!canPreviousPage} >
        {'<<'}
      </button>{' '}
      <button className="btn shadow-none" onClick={() => previousPage()} disabled={!canPreviousPage}>
        {'<'}
      </button>{' '}
      <button className="btn shadow-none" onClick={() => nextPage()} disabled={!canNextPage}>
        {'>'}
      </button>{' '}
      <button className="btn shadow-none" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        {'>>'}
      </button>{' '}
      <span>
        Page{' '}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{' '}
      </span>
      <span>
        | Go to page:{' '}
        <input
          type='number'
          defaultValue={pageIndex + 1}
          onChange={e => {
            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
            gotoPage(pageNumber)
          }}
          style={{ width: '50px' }}
        />
      </span>{' '}
      <select
        value={pageSize}
        onChange={e => setPageSize(Number(e.target.value))}>
        {[10, 25, 50].map(pageSize => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </div>
  </>
)
}

export default TableDatos 