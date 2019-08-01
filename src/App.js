import React, { Component } from "react";
import Register from "./Register";
import Contacts from "./Contacts";
import "./App.css";

class App extends Component {
  onSubmit = fields => {
    return fields;
  };

  render() {
    return (
      <div className="App">
        <Register onSubmit={fields => this.onSubmit(fields)} />
        <Contacts onSubmit={fields => this.onSubmit(fields)} />
      </div>
    );
  }
}
export default App;
