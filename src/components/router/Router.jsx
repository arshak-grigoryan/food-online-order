import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import { REPO_NAME } from '../../constants';

import NotFound from '../pages/notAuthorized/NotAuthorized';
import Home from '../pages/home/Home';
import Restaurant from '../pages/restaurant/Restaurant';

import SuspensedRoute from './SuspensedRoute';

const Router = () => (
  <BrowserRouter basename={`/${REPO_NAME}fgjgj`}>
    <Switch>
      <SuspensedRoute exact path="/restaurants" component={Home} />
      <SuspensedRoute exact path="/restaurants/:id" component={Restaurant} />
      <Route exact path="/notfound" component={NotFound} />
      <Redirect from="/" to="/restaurants" />
      {/* <Redirect to="/notfound" /> */}
    </Switch>
  </BrowserRouter>
);

export default Router;
