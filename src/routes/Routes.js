import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Nav from "../pages/Nav";

function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path ="/" component={Login} />
      <Route exact path ="/nav" component={Nav} />
    </Switch>
    </BrowserRouter>
  );
}

export default Routes;
