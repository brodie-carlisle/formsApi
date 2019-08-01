import React, { Component } from "react";
import Register from "./Register";

class Contacts extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    const contact = fetch("http://localhost:3000/")
      .then(response => {
        return response.json();
      })

      .then(myJson => {
        this.setState({ contacts: myJson });
      });
  }
  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h1>Contacts:</h1>
        {contacts.map(contact => (
          <div>
            {contact.firstName} {contact.lastName}
          </div>
        ))}
      </div>
    );
  }
}

export default Contacts;
