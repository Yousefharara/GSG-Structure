import { Component } from "react";
import "./style.css";

class Table extends Component {
  render() {
    const { isLoading, columns, data, onRowClick = () => "" } = this.props;
    return (
      <>
        <table>
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th key={col.key}>{col.title}</th>
              ))}
            </tr>
          </thead>
          {!isLoading && (
            <tbody>
              {data.map((row) => (
                <tr onClick={() => onRowClick(row)} key={row.id}>
                  {columns.map((col, i) => (
                    <td key={col.key + i}>
                      {col.render ? col.render(row) : row[col.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          )}
        </table>
        {isLoading && <p>Loading ...</p>}
      </>
    );
  }
}

export default Table;
