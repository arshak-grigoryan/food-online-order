import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import NotAuthorized from '../pages/notAuthorized/NotAuthorized';
import Home from '../pages/home/Home';
import Restaurant from '../pages/restaurant/Restaurant';

import SuspensedRoute from './SuspensedRoute';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <SuspensedRoute exact path="/restaurants" component={Home} />
      <SuspensedRoute path="/restaurants/:id" component={Restaurant} />
      <Route path="/notAuthorized" component={NotAuthorized} />
      <Redirect exact from="/" to="/restaurants" />
      <Redirect to="/notAuthorized" />
    </Switch>
  </BrowserRouter>
);

export default Router;
