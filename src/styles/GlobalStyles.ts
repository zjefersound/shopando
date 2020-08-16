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
        /* --primary: #0a444b;
        --primary-dark: #031a1d;
        --primary-transparent: #0a444b77;
        --primary-dark-transparent: #031a1d77;
        --secondary: #F47E82;
        --secondary-dark: #db5a5e;
        --text: #27AFAF;
        --outline: #00353B;
        --outline-transparent: #00353B77;
        --white: #FFF;
        --success: #1AA371;
        --danger: #FF4040;
        --shadow: #0002;


        --blue-light: #27AFAF;
        --blue-dark: #16636D;
        --brown: #503C29;
        --dark-hover: #BD5959;
        --light-hover: #987F68; */
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