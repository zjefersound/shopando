import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin: 0 3.2rem;
    padding-bottom: 1.6rem;

    border-bottom: 0.1rem solid var(--outline);
    > img {
        width: 4.8rem;
        height: 4.8rem;
        border-radius: 50%;
        background: var(--primary);
    }
    > div {
        display: flex;
        flex-direction: column;
        margin-left: 1.6rem;
        justify-content: center;
    }
`;

export const Name = styled.span`
    font-size: 1.6rem;
    color: var(--secondary);
    font-weight: bold;
`;

export const Email = styled.span`
    font-size: 1.2rem;
`;
