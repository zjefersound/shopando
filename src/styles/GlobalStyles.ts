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
    }
    *, button, input {
        outline: 0;
        border: 0;
        box-shadow: none;
        background: none;
        font-family: Assistant, Oxygen, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        -webkit-appearance: none;
    }
    
    a:hover {
        opacity: 0.7;
    }
    html {
        background: var(--primary);
    }
    
    :root {
        --primary: #0a444b;
        --primary-dark: #031a1d;
        --secondary: #F47E82;
        --text: #27AFAF;

        --white: #FFF;
        --blue-light: #27AFAF;
        --blue-dark: #16636D;
        --brown: #503C29;
        --outline: #987F68;
        --success: #1AA371;
        --danger: #BD5959;
        --dark-hover: #BD5959;
        --light-hover: #987F68;
        font-size: 60%;
        
        @media (min-width: 700px) {
            font-size: 62.5%;
        }
    }
   
`;