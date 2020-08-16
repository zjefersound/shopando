import React, { useState } from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';
import { Router } from 'react-router-dom';

import { CustomThemeProvider } from './Context/ThemeContext';
import {AuthProvider} from './Context/AuthContext';
import history from './history';
import { SWRConfig } from 'swr';
import axios from 'axios';

const App = () => {
    return (
        <>
            <CustomThemeProvider >
                <AuthProvider>
                    <SWRConfig value={{fetcher: (url: string) => axios(url).then(r => r.data)}}>
                        <Router history={history}>
                            <Routes />
                        </Router>
                    </SWRConfig>
                </AuthProvider>
                <GlobalStyles />
            </CustomThemeProvider>
        </>
    );
};

export default App;