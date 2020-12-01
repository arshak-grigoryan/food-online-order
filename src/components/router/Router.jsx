import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import NotAuthorized from '../pages/notAuthorized/NotAuthorized';
import SuspensedRoute from './SuspensedRoute';
import Home from '../pages/home/Home';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <SuspensedRoute exact path='/restaurants' component={Home}/>
                <Route path='/notAuthorized'component={NotAuthorized}/>
                <Redirect exact from='/' to='/restaurants'/> 
                <Redirect to='/notAuthorized'/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router