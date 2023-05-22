import React from 'react'
import './MyTableForm.css'

export default function MyTableForm({ data }) {
  const renderTableData = () => {
    if (data.length === 0) {
      return (
        <tr>
        </tr>
      );
    } else {
      return data.map((d, i) => (
        <tr key={i + 1}>
          <td>{i}</td>
          <td>{d.name}</td>
          <td>{d.email}</td>
          <td>{d.phone}</td>
        </tr>
      ));
    }
  };

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </table>
    </div>
  );
}
