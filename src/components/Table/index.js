import React from 'react'

const Table = ({ schema, data }) => {
  const handleRenderRow = (rowData, schema) => (
    <tr>
      {schema &&
        schema.map(({ accessor, render }, index) => {
          if (render) {
            return <td key={`${accessor}-${index}`}>{render(rowData)}</td>
          }
          return <td key={`${accessor}-${index}`}>{rowData[accessor] || ''}</td>
        })}
    </tr>
  )

  return (
    <table className="table">
      <thead>
        <tr>
          {schema &&
            schema.map(({ name }, index) => (
              <th key={`${name}-${index}`}>{name}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 && (
          <>{data.map((row) => handleRenderRow(row, schema))}</>
        )}
      </tbody>
    </table>
  )
}
export default Table
