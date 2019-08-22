import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Nav";
import "./App.css";
import Routing from "./Routing";

class App extends Component {
  onSubmit = fields => {
    return fields;
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Routing />
          <Nav />

          {/* <Register onSubmit={fields => this.onSubmit(fields)} /> */}
          {/* <Contacts onSubmit={fields => this.onSubmit(fields)} /> */}
          {/* <UpdateUser /> */}
          {/* <ForgotPW /> */}
        </Router>
      </div>
    );
  }
}
export default App;
