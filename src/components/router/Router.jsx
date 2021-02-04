import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import { REPO_NAME } from '../../constants';

import NotFound from '../pages/notAuthorized/NotAuthorized';
import Home from '../pages/home/Home';
import Restaurant from '../pages/restaurant/Restaurant';

import SuspensedRoute from './SuspensedRoute';

const Router = () => (
  <BrowserRouter basename={`/${REPO_NAME}`}>
    <Switch>
      <SuspensedRoute
        exact
        path={`/${REPO_NAME}/restaurants`}
        component={Home}
      />
      <SuspensedRoute exact path="/restaurants/:id" component={Restaurant} />
      <Route exact path="/notfound" component={NotFound} />
      <Redirect exact from={`/${REPO_NAME}`} to={`/${REPO_NAME}/restaurants`} />
      {/* <Redirect to="/notfound" /> */}
    </Switch>
  </BrowserRouter>
);

export default Router;
