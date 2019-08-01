// import { Link } from "react-router-dom";
import React, { Component } from "react";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
      
    });
   
  };

  onSubmit = e => {
    e.preventDefault();

    const data = this.state;
    const url = "http://localhost:3000/";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
    this.props.onSubmit(this.state);
    // console.log(this.state);

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: ""
    });
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form>
          <input
            value={this.state.firstName}
            onChange={e => this.change(e)}
            name="firstName"
            className="textBox"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            onChange={e => this.change(e)}
            className="textBox"
            name="lastName"
            placeholder="Last Name"
          />
          <br />
          <input
            value={this.state.email}
            onChange={e => this.change(e)}
            className="textBox"
            type="email"
            name="email"
            placeholder="email"
          />

          <input
            value={this.state.phoneNumber}
            onChange={e => this.change(e)}
            name="phoneNumber"
            className="textBox"
            placeholder="Phone Number"
            pattern="\d{10}"
          />
          <br />

          {/* <br />
          <input
            value={this.state.password}
            onChange={e => this.change(e)}
            name="password"
            className="textBox"
            type="password"
            placeholder="Password"
            minLength="8"
          />
          <input
            value={this.state.confirmPassword}
            onChange={e => this.change(e)}
            className="textBox"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            minLength="8"
          />
          <br />
          <span style={{ fontSize: "55%" }}>Minimum 8 characters</span>
          <br /> */}

          <button
            onClick={e => this.onSubmit(e)}
            className="submit"
            type="submit"
            value="Submit"
          >
            Submit
          </button>
          {/* <Link style={{ color: "white", fontSize: "55%" }} to="/">
            Login
          </Link> */}
          <br />
        </form>
      </div>
    );
  }
}

export default Register;
