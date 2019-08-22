import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./Contacts";
import Register from "./Register";
import UpdateUser from "./UpdateUser";

const Routing = props => {
  return (
    <Switch>
      <Route exact path="/" component={Register} />
      <Route path="/Contacts" component={Contacts} />
      <Route path="/UpdateUser" component={UpdateUser} /> />
    </Switch>
  );
};
export default Routing;
