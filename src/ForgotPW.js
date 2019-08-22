import React, { Component } from "react";
// import { Link } from "react-router-dom";

class ForgotPW extends Component {
  state = {
    email: ""
  }

  change = e =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = e =>{
    e.preventDefault();
    if(this.state.email){
      alert("Password Reset Email Sent")
    }
    this.setState({
      email: ""
    })
  } 


  render() {
    return (
      <div>
        <h1>Forgot Password</h1>
        <p>Enter email address to reset password</p>
        <form>
          <input
            value={this.state.email}
            onChange={e => this.change(e)}
            className="textBox"
            type="email"
            name="email"
            placeholder="email address"
          />
          <br />
          <br />

          <button
            onClick={e => this.onSubmit(e)}
            className="submit"
            type="submit"
            value="Submit"
          >
            Submit
          </button>
          <br />
          {/* <Link style={{ color: "white", fontSize: "55%" }} to="/">
            Click Here to Login
          </Link> */}
        </form>
      </div>
    );
  }
}
export default ForgotPW;