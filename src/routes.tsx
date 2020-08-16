import React, { useContext } from 'react';
import { Switch, Route, Redirect, RouteProps } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { Context } from './Context/AuthContext';
import LoadingScreen from './components/LoadingScreen';

interface CustomRouteProps extends RouteProps {
    isPrivate?: boolean;
}

const CustomRoute: React.FC<CustomRouteProps> = ({isPrivate, ...rest}) => {
    const { authenticated, loading} = useContext(Context);

    if (loading) {
        return (
            <LoadingScreen />
        );
    }

    if (isPrivate && !authenticated) {
        return <Redirect to="/" />
    }

    return <Route {...rest} />
}

const Routes = () => {
    return(
        <Switch>
            <CustomRoute path='/' exact component={ SignIn }/>
            <CustomRoute path='/signup' exact component={ Signup }/>
            <CustomRoute path='/home' exact component={ Home }/>
        </Switch>
    );
}

export default Routes;