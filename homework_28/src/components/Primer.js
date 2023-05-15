// import React, { Component } from 'react';

// class ContactTable extends Component {
//   render() {
//     const { contacts } = this.props;
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Phone</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {contacts.map((contact) => (
//             <tr key={contact.id}>
//               <td>{contact.name}</td>
//               <td>{contact.phone}</td>
//               <td>{contact.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   }
// }








// class AddContactForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         Firstname: '',
//         Lastname: '',
//         phone: '',
//     };
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { Firstname, Lastname, phone} } = this.state;
//     const newUser = {
//       id: Date.now(),
//       Firstname,
//       Lastname,
//       phone,
//     };
//     this.props.addContact(newUser);
//     this.setState({ Firstname: '', Lastname: '', phone: '' });
//   };

//   render() {
//     const { name, phone, email } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(event) => this.setState({ name: event.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Phone"
//           value={phone}
//           onChange={(event) => this.setState({ phone: event.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Email"
//           value={email}
//           onChange={(event) => this.setState({ email: event.target.value })}
//         />
//         <button type="submit">Add Contact</button>
//       </form>
//     );
//   }
// }



// export default class AppForm extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         contacts: [],
//       };
//     }
  
//     addContact = (newContact) => {
//       this.setState({ contacts: [...this.state.contacts, newContact] });
//     };
  
//     render() {
//       return (
//         <div>
//           <h1>Contact List</h1>
//           <ContactTable contacts={this.state.contacts} />
//           <AddContactForm addContact={this.addContact} />
//         </div>
//       );
//     }
//   }









// export default class AppForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       contacts: [],
//     };
//   }

//   addContact = (newContact) => {
//     this.setState({ contacts: [...this.state.contacts, newContact] });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Contact List</h1>
//         <ContactTable contacts={this.state.contacts} />
//         <AddContactForm addContact={this.addContact} />
//       </div>
//     );
//   }
// }
