import styled from 'styled-components';

import { Search } from '../../styles/Icons';

export const Container = styled.div`
    display: none;
    @media ( min-width: 500px ) {
        height: 3.8rem;
        border-radius: 1.9rem;
        background: var(--primary);
        display: flex;
        align-items: center;
        padding: 0 1.6rem;
    }
`;

export const SearchIcon = styled(Search)`
    width: 20px;
    height: 20px;
    margin-right: 8px;
`;

export const Input = styled.input`
    &:focus, &:active, &:hover {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }
`;
