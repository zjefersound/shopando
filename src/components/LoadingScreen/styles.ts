import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`    
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 1000;
    width: 60px;
    height: 60px;
    margin: -30px 0 0 -30px;
    border: 3px solid  var(--primary);
    border-radius: 50%;
    border-top: 3px solid  var(--secondary);
    animation: ${spin} 1.5s linear infinite;
    -webkit-animation: ${spin} 1.5s linear infinite;
`;
