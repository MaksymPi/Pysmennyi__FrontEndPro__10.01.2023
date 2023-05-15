import React, { Component } from "react";


export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      Firstname: "",
      Lastname: "",
      phone: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { Firstname, Lastname, phone } = this.state;
    const newUser = {
      id: Date.now(),
      name: `${Firstname} ${Lastname}`,
      phone,
    };
    this.props.addUser(newUser);
    this.setState({ Firstname: "", Lastname: "", phone: "" });
  };

  render() {
    const { Firstname, Lastname, phone } = this.state;
    return (
      <>
        <button onClick={() => this.setState({ showForm: true })}>
          Показать форму
        </button>
        {this.state.showForm && (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Firstname"
              value={Firstname}
              onChange={(event) =>
                this.setState({ Firstname: event.target.value })
              }
            />
            <input
              type="text"
              placeholder="Lastname"
              value={Lastname}
              onChange={(event) =>
                this.setState({ Lastname: event.target.value })
              }
            />
            <input
              type="text"
              placeholder="phone"
              value={phone}
              onChange={(event) => this.setState({ phone: event.target.value })}
            />
            <button type="submit">Add Contact</button>
            <button onClick={() => this.setState({ showForm: false })}>
              Cancel
            </button>
          </form>
        )}
      </>
    );
  }
}

