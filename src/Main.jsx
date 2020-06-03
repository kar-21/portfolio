import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Error from "./components/Error/error";

const Main = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route component={Error}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Main;
