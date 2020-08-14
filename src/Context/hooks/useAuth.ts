import { useState, useEffect } from 'react';
import axios from 'axios';

import history from "../../history";
import info from '../../services/facebookInfo';
// import { ReactFacebookLoginInfo, ReactFacebookFailureResponse } from "react-facebook-login";

export interface AuthProviderProps {
    authenticated?: boolean;
    loading: boolean;
    handleLogin: Function;
    handleLogout: Function;
}

const useAuth = () => {
    const appId = info.appId;
    const [loading, setLoading]= useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    
    useEffect(()=>{
        (async ()=>{
            const token = await localStorage.getItem('token');
    
            if (token) {
                //insert default headers to axios api and set authorization true
                setAuthenticated(true); 
            }
        })();
        setLoading(false);
    },[]);

    const handleLogin = async(response: any) => {
        setLoading(true);

        await axios.get(`https://graph.facebook.com/v8.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${appId}&client_secret=7a3464601feca768d20edd794eacf47d&fb_exchange_token=${response.accessToken}`)
            .then(responseToken => {
                localStorage.setItem('access_token', responseToken.data.access_token );
                localStorage.setItem('token_type', responseToken.data.token_type );
            }); 

        setLoading(false);
        setAuthenticated(true); 
        history.push('/home');        
    };

    const handleLogout = async () => {
        //set axios headers to undefined
        localStorage.clear();
        setAuthenticated(false);
        history.push('/');        
    };

    return {
        loading,
        authenticated,
        handleLogin,
        handleLogout,
    };
}

export default useAuth;