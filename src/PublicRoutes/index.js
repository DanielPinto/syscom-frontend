import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const logged = !!localStorage.getItem('token');

const PublicRoute = props => !logged 
? < Route {...props} />
: < Redirect to="/" />


export default PublicRoute;