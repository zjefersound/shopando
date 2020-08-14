import React, { createContext } from "react";
import useAuth, { AuthProviderProps } from './hooks/useAuth';

const Context = createContext<AuthProviderProps>({
    loading: true,
    handleLogin: () => {},
    handleLogout: () => {}
});


const AuthProvider: React.FC = ({children}) => {
    const { loading, authenticated, handleLogin, handleLogout } = useAuth();

    return (
        <Context.Provider value={{ loading, authenticated, handleLogin, handleLogout }}>
            {children}
        </Context.Provider>
    );
};

export { Context, AuthProvider };