import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

import { LoginScreen } from '../components/auth/LoginScreen';
import { OperationScreen } from '../components/operation/OperationScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={ LoginScreen } />
                    <Route exact path="/" component={ OperationScreen } />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
