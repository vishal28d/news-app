import React from "react";
import About from "./about";
import Nav from "./navbar";
import { Link, Switch, Route } from "react-router-dom/cjs/react-router-dom";
import LoginPage from "./login";

import Login from "./login";


const Routes = () =>{
    <Switch>
  <Routes>
        <Route exact path="/login" component={Login} > </Route>
  </Routes>
  </Switch>
}

export default Routes ;