import React, { Component } from "react";
import Register from "./Register";

class Contacts extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    const contact = fetch("http://localhost:3000/")
      .then(response => {
        // const contactArray = response.json();
        return response.json();
        // this.setState({ contacts: contact });
      })

      // console.log()
      .then(myJson => {
        // console.log(myJson)
        // const contactString = JSON.stringify(myJson)

        this.setState({ contacts: myJson });
        // console.log(this.state.contacts)
      });
  }
  render() {
    const { contacts } = this.state;
    // console.log(contacts);
    return (
      <div>
        <h1>Contacts:</h1>
        {//  contacts.length ?
        contacts.map(contact => (
          <div >
            {contact.firstName} {contact.lastName}
          </div>
        ))}
      </div>
    );
  }
}

export default Contacts;
