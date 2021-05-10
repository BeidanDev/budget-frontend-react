import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";

import { startChecking } from '../actions/auth';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CategoryList } from '../components/category/CategoryList';
import { CategoryNew } from '../components/category/CategoryNew';
import { CategoryUpdate } from '../components/category/CategoryUpdate';
import { OperationInflowList } from '../components/operation/OperationInflowList';
import { OperationInflowNew } from '../components/operation/OperationInflowNew';
import { OperationInflowUpdate } from '../components/operation/OperationInflowUpdate';
import { OperationOutflowList } from '../components/operation/OperationOutflowList';
import { OperationOutflowNew } from '../components/operation/OperationOutflowNew';
import { OperationOutflowUpdate } from '../components/operation/OperationOutflowUpdate';
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
                        path="/operation-money-inflow"
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
                        path="/operation-money-outflow"
                        component={ OperationOutflowList }
                        isAuthenticated={ !!uid }
                    />

                    <PrivateRoute
                        exact
                        path="/operation-money-outflow/new"
                        component={ OperationOutflowNew }
                        isAuthenticated={ !!uid }
                    />

                    <PrivateRoute
                        exact
                        path="/operation-money-outflow/update/:id"
                        component={ OperationOutflowUpdate }
                        isAuthenticated={ !!uid }
                    />

                    <PrivateRoute
                        exact
                        path="/category"
                        component={ CategoryList }
                        isAuthenticated={ !!uid }
                    />

                    <PrivateRoute
                        exact
                        path="/category/new"
                        component={ CategoryNew }
                        isAuthenticated={ !!uid }
                    />

                    <PrivateRoute
                        exact
                        path="/category/update/:id"
                        component={ CategoryUpdate }
                        isAuthenticated={ !!uid }
                    />

                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
