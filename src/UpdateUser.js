import React, { Component } from "react";


class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      firstName: this.props.location.passContact.contact.firstName,
      lastName: this.props.location.passContact.contact.lastName,
      email: this.props.location.passContact.contact.email,
      phoneNumber: this.props.location.passContact.contact.phoneNumber,
      password: "",
      confirmPassword: ""
    };
  }
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = this.state;
    const url =
      "http://localhost:3000/" + this.props.location.passContact.contact._id;

    fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });

    this.setState({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
        <h1>Update</h1>
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

          {/* <input
            value={this.state.password}
            onChange={e => this.change(e)}
            name="password"
            className="textBox"
            type="password"
            placeholder="Password"
            minLength="8"
          /> */}

          <br />
          <span style={{ fontSize: "55%" }}>Minimum 8 characters</span>
          <br />

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

export default UpdateUser;
