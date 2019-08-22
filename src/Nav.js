import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
  return (
    <nav className="navbar">
        <Link to="/Contacts">Contacts</Link>&nbsp
        <Link to="/">Register</Link>&nbsp
        {/* <Link to="/">Login</Link> */}
    </nav>
  );
};

export default Nav;