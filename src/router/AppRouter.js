import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";

import { startChecking } from '../actions/auth';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CategoryScreen } from '../components/category/CategoryScreen';
import { OperationInflowList } from '../components/operation/OperationInflowList';
import { OperationInflowNew } from '../components/operation/OperationInflowNew';
import { OperationInflowUpdate } from '../components/operation/OperationInflowUpdate';
import { OperationScreen } from '../components/operation/OperationScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const { checking, uid } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

    if(checking) {
        return (<h5>Espere...</h5>);
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        exact
                        path="/login"
                        component={ LoginScreen }
                        isAuthenticated={ !!uid }
                    />

                    <PrivateRoute
                        exact
                        path="/"
                        component={ OperationScreen }
                        isAuthenticated={ !!uid }
                    />

                    <PrivateRoute
                        exact
                        path="/operations-money-inflow"
                        component={ OperationInflowList }
                        isAuthenticated={ !!uid }
                    />

                    <PrivateRoute
                        exact
                        path="/operation-money-inflow/new"
                        component={ OperationInflowNew }
                        isAuthenticated={ !!uid }
                    />

                    <PrivateRoute
                        exact
                        path="/operation-money-inflow/update/:id"
                        component={ OperationInflowUpdate }
                        isAuthenticated={ !!uid }
                    />

                    <PrivateRoute
                        exact
                        path="/category"
                        component={ CategoryScreen }
                        isAuthenticated={ !!uid }
                    />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
