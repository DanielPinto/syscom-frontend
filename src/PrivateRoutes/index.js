import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const logged = !!localStorage.getItem('token');

const PrivateRoute = props => logged 
? < Route {...props} />
: < Redirect to="/login" />

export default PrivateRoute;