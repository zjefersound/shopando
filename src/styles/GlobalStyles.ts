import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        color: var(--text);
    }
    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;

        height: 100%;
        width: 100%; 
    }
    button, input, a {
        transition: 0.2s;
        text-decoration: none;
    }
    *, button, input {
        outline: 0;
        border: 0;
        box-shadow: none;
        background: none;
        font-family: Assistant, Oxygen, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        -webkit-appearance: none;
    }
    /* Change Autocomplete styles in Chrome*/
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        -webkit-text-fill-color: var(--text);
        -webkit-box-shadow: 0 0 0px 1000px var(--primary) inset;
        transition: background-color 5000s ease-in-out 0s;
    }
    a:hover {
        opacity: 0.7;
    }
    html {
        background: linear-gradient(to bottom right, var(--primary), var(--primary-dark));
    }
    
    :root {
        ${props => {
            const theme = props.theme;
            let append = '';
            Object.entries(theme).forEach(([prop, value])=>{
                append += `--${prop}: ${value};`;
            });
            return append;
        }}
        font-size: 60%;
        
        @media (min-width: 700px) {
            font-size: 62.5%;
        }
    }
   
`;