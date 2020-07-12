import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        color: var(--brown);
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
        border: 0;
        background: none;
        font-family: Roboto, Oxygen, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
    a:hover {
        opacity: 0.7;
    }
    html {
        background: var(--primary);
    }
    
    :root {
        --primary: #EDE4DF;
        --secondary: #E0CEC4;
        --white: #EDE4DF;
        --blue-light: #27AFAF;
        --blue-dark: #16636D;
        --brown: #503C29;
        --outline: #987F68;
        --success: #1AA371;
        --danger: #BD5959;
        --dark-hover: #BD5959;
        --light-hover: #987F68;
    }
`;