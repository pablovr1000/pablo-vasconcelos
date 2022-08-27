import React from "react";
import { Route, Switch } from "react-router-dom";
import pages from './pages'

const Routes = () => (
  <Switch>
    <Route exact path ="/" element={ <pages.teste /> } />
  </Switch>
);

export default Routes;