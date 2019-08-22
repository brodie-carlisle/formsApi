import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Contacts extends Component {
  state = {
    contacts: [],
    redirect: false,
    indivContact: {}
  };

  getContacts = () => {
    fetch("http://localhost:3000/")
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({ contacts: myJson });
      });
  };

  componentDidMount() {
    this.getContacts();
  }
  deleteContact(ID) {
    const data = this.state;
    const url = "http://localhost:3000/" + ID;

    fetch(url, {
      method: "DELETE",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(this.getContacts());
  }
  editContact(contact) {
    this.setState({ indivContact: contact });
    this.setState({ redirect: true });
  }
  callRedirect = () => {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/UpdateUser",
            passContact: { contact: this.state.indivContact }
          }}
        />
      );
    }
  };

  render() {
    const { contacts } = this.state;
    // console.log(contacts);

    return (
      <div>
        {this.callRedirect()}
        <h1>Contacts:</h1>
        {contacts.map(contact => (
          <div key={contact._id}>
            {contact.firstName} {contact.lastName}&nbsp;
            <button onClick={() => this.editContact(contact)}>EDIT</button>
            &nbsp;
            <button
              style={{ backgroundColor: "red", fontWeight: "bold" }}
              onClick={() => this.deleteContact(contact._id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default Contacts;
