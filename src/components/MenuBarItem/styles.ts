import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 2.4rem;
    list-style: none;
    text-decoration: none;
    font-weight: 600;
    margin-bottom: 2rem;
    margin-left: 2rem;
    cursor: pointer;
    
    &:hover {
        opacity: 0.7;
    }
    > span {
        display: none;
        @media (min-width: 1000px) {
            width: 100%;
            display: flex;
            flex-direction: row; 
            
        }
    }
    .log-out {
        color: var(--danger);
    }

`;
