import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';
import { Router } from 'react-router-dom';

import {AuthProvider} from './Context/AuthContext';
import history from './history';

const App = () => {
    return (
        <>
            <AuthProvider>
                <Router history={history}>
                    <Routes />
                </Router>
            </AuthProvider>
            <GlobalStyles />
        </>
    );
};

export default App;