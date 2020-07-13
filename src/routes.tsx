import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route path='/' exact component={ Login }/>
            <Route path='/signup' component={ Signup }/>
            <Route path='/home' component={ Home }/>
        </BrowserRouter>
    );
}

export default Routes;