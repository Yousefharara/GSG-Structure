import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { PATHS } from "../../router/paths";
import './style.css'

class Table extends Component {
  state = {
    isCreating: false,
  };

  render() {
    const { isLoading, columns, data, onRowClick = () => "" } = this.props;
    return (
      <>
        <button onClick={() => this.setState({ isCreating: true })}>
          Create Post
        </button>
        <table>
          <thead>
            <tr>
              {columns.map((col,i) => (
                <th key={col.key}>{col.title}</th>
              ))}
            </tr>
          </thead>
          {!isLoading && (
            <tbody>
              {data.map((row) => (
                <tr onClick={() => onRowClick(row)} key={row.id} >
                  {columns.map((col, i) => (
                    <td key={col.key + i}>
                      {col.render ? col.render(row) : row[col.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          )}
          {isLoading && <p>Loading ...</p>}
        </table>
          {this.state.isCreating && <Navigate to={PATHS.POST.CREATE} replace />}
      </>
    );
  }
}

export default Table;
