import styled from 'styled-components';

export const Container = styled.button`
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 2rem;
    list-style: none;
    text-decoration: none;
    font-family: Assistant;
    padding-bottom: 2rem;
    padding-left: 1.6rem;

    max-height: 6.4rem;
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
