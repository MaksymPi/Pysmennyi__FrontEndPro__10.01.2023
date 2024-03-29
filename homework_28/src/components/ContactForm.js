import React, { Component } from "react";
import axios from "axios";
import Contacts from "./Contacts";
import Form from "./Form";
import './ContactForm.css'

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true,
    };
    this.addUser = this.addUser.bind(this);
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) =>
      this.setState({
        users: response.data,
        isLoading: false,
      })
    );
  }

  handleDelete = (userId) => {
    const filteredUsers = this.state.users.filter((user) => user.id !== userId);

    this.setState({ users: filteredUsers });
  };

  addUser = (newUser) => {
    this.setState({ users: [...this.state.users, newUser] });
  };

  render() {
    return (
      <div>
        <div className="h3">
          <h3>Contact</h3>
        </div>
        <Contacts
          users={this.state.users}
          isLoading={this.state.isLoading}
          handleDelete={this.handleDelete}
        />
        <Form addUser={this.addUser} />
      </div>
    );
  }
}
