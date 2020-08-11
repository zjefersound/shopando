import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Signup from './pages/Signup';
import Home from './pages/Home';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route path='/' exact component={ SignIn }/>
            <Route path='/signup' component={ Signup }/>
            <Route path='/home' component={ Home }/>
        </BrowserRouter>
    );
}

export default Routes;