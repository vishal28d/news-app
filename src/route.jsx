import React from "react";
import About from "./about";
import Nav from "./navbar";
import { Link, Switch, Route } from "react-router-dom/cjs/react-router-dom";
import LoginPage from "./login";
import login from "./login";
import Login from "./login";


const Routes = () =>{
    <Switch>
    {/* <Route exact path="/" component={Home} /> 
     <Route exact path="/about" component={About} /> 
    <Route exact path="/contact" component={Contact} /> */}
    <Route exact path="/login" component={Login} />
    {/* <Route  component={Error} /> */}
  </Switch>
}

export default Routes ;