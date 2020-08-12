import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    > span {
        color: var(--secondary);
        margin-left: 16px;
        font-size: 2rem;
        font-weight: 900;
        display: none;
        @media (min-width: 1000px) {
            display: flex;
        } 
    }
`;
export const Logo = styled.img`
    height: 3.8rem;
    width: auto;
`;
