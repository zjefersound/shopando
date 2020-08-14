import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
    padding: 2rem;
    > span {
        margin: 1.6rem;
        font-size: 1.6rem;
    }
    @media ( min-width: 500px ) {
        width: 50%;
    }
    @media ( min-width: 740px ) {
        width: calc(100% / 3);
    }
    @media ( min-width: 1200px ) {
        width: calc(25%);
    }
`;

export const PostContainer = styled.div`
    background: var(--primary);
    width: 100%;
    height: 100%;
    > span {
        display: flex;
        padding: 1.6rem;
        font-size: 1.6rem;
    }
    border-bottom: 0.1rem solid var(--secondary);

`;

export const Image = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
    background: var(--primary);
    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
    @media (min-width: 740px) {
        height: 16rem;
    }
`;
