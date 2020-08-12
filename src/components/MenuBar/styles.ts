import styled from 'styled-components';

export const Container = styled.div`
    display: none;
    height: 100%;
    width: 100%;
    max-width: 8rem;
    
    position: sticky;
    top: 0;
    left: 0;
    overflow-y: auto;
    padding-top: 2.4rem;
 
    @media(min-width: 780px) {
        display: flex;
        flex-direction: column;
    }

    @media ( min-width: 1000px ) {
        max-width: 300px; 
    }
`;
