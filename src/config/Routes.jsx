import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalogue';
import Detail from '../pages/detail/Detail';
import LandingPage from '../pages/LandingPage';

const Routes = () => {
    return (
        <Switch>
            <Route
                path='/:category/search/:keyword'
                exact
                component={Catalog}
            />
            <Route
                path='/:category/:id'
                exact
                component={Detail}
            />
            <Route
                path='/:category'
                exact
                component={Catalog}
            />
            <Route
                path='/about'
                exact
                component={LandingPage}
            />
            <Route
                path='/'
                exact
                component={Home}
            />
            
        </Switch> 
    );
}

export default Routes;