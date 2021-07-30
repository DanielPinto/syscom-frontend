import {Route, Router, Switch} from 'react-router';
import { createBrowserHistory } from 'history';

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import NotFound from '../Pages/NotFound';

const Routes = () => {

    const history = createBrowserHistory();

    return(
        <Router history={history}>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/login'} component={Login} />
                <Route exact path={'/register'} component={Register} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Routes;