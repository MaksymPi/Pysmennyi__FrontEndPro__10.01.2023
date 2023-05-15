import React, { Component } from "react";

export default class Contacts extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    
    return this.props.isLoading ? (
      <div>Loading...</div>
    ) : (
      <>
        <table>
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
                    <button
                      onClick={() => this.props.handleDelete(user.id)}
                    >
                      Del
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
