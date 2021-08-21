import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import PrivateRoute from '../PrivateRoutes';
import PublicRoute from '../PublicRoutes';

import Home from '../Pages/Home';
import Product from '../Pages/Product';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import NotFound from '../Pages/NotFound';

const Routes = () => {

    return (
        <Router>
            <Switch>
                <PrivateRoute exact path={'/'} component={Home} />
                <PrivateRoute path={'/product'} component={Product} />
                <PublicRoute path={'/login'} component={Login} />
                <PublicRoute path={'/register'} component={Register} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Routes;