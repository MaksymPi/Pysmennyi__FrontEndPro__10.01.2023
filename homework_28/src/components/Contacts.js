import React, { Component } from "react";
import './Contacts.css'

export default class Contacts extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    
    return this.props.isLoading ? (
      <div>Loading...</div>
    ) : (
      <>
        <table className="table">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((user) => {
              const [firstName, lastName] = user.name.split(" ");
              return (
                <tr key={user.id}>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button className="buttonDel"
                      onClick={() => this.props.handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
;
}
