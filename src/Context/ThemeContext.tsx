import React, { createContext, useState } from "react";
import { ThemeName, themes } from "../styles/Themes";
import { ThemeProvider } from 'styled-components';

const ThemeContext = createContext({
    themeName: '',
    toggleTheme: () => {}
});


const CustomThemeProvider: React.FC = ({children}) => {
    const [themeName, setThemeName] = useState<ThemeName>('light');
    const currentTheme = themes[themeName];
    const toggleTheme = () => {
        const newTheme = themeName === 'light' ? 'dark' : 'light';
        setThemeName(newTheme);
    }
    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={currentTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export { ThemeContext, CustomThemeProvider };