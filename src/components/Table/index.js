import React from 'react'
import TableLoader from "components/Loader/TableLoader"
const Table = () => {
  ;<table className="table">
    <thead>
      <tr>
        {schema &&
          schema.map(({ name, isCheckbox, Header }, index) =>
            isCheckbox ? (
              <th key={`${name}-${index}`}>{Header()}</th>
            ) : (
              <th key={`${name}-${index}`}>{name}</th>
            )
          )}
      </tr>
    </thead>
    <tbody>
      {loading && data.length === 0 && <TableLoader />}

      {!loading && data.length === 0 && (
        <tr>
          <td className="center">
            <p>{placeHolder}</p>
          </td>
        </tr>
      )}
      {!loading && data.length > 0 && (
        <>{data.map((row) => this.handleRenderRow(row, schema))}</>
      )}
    </tbody>
  </table>
}
export default Table
