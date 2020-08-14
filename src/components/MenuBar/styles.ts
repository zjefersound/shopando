import styled from 'styled-components';

export const Container = styled.div`
    z-index: 2;
    display: none;
    height: 100%;
    width: 100%;
    max-width: 8rem;
    
    position: sticky;
    top: 0;
    left: 0;
    overflow-y: auto;
    padding: 1rem;

    /* border-right: 0.1rem solid var(--outline);*/
    @media(min-width: 780px) {
        display: flex;
        flex-direction: column;
    }

    @media ( min-width: 1000px ) {
        max-width: 300px; 
    }
`;

export const Wrapper = styled.div`
    padding-top: 2.4rem;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    background: linear-gradient(to bottom, var(--primary-transparent), var(--outline-transparent));
    box-shadow: 0 0 1rem var(--shadow);
    border-radius: 2rem;
`;
