import styled from 'styled-components';

import { Search } from '../../styles/Icons';

export const Container = styled.div`
    height: 38px;
    background: var(--white);
    display: flex;
    align-items: center;
    padding: 0 16px;
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