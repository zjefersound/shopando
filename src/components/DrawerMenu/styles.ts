import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0; 
    right: 0;
    bottom: 0;

    height: 100vh;
    width: 80%;
    max-width: 30rem;

    background: var(--primary-dark);
    padding-top: 8rem;
    display: flex;
    flex-direction: column;

    z-index: 10;

    transition: all 0.3s;
    
    transform: translateX(100%);
    opacity: 0;

    &.open {
        transform: translateX(0);
        opacity: 1;
    }
`;
