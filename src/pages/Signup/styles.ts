import styled, { css } from 'styled-components';

import { ArrowLeft } from '../../styles/Icons';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

import BlueLayout from '../../components/BlueLayout';

export const Layout = styled(BlueLayout)`
`; 

const contentCSS = css`
    display: flex;
    flex-direction: column;
`;

export const Left = styled.div`
`;

export const Right = styled.div`
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Header = styled.div`
    display: flex;
    align-items: center;
    height: 60px;
    > a {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 32px;
        text-decoration: none;
    }
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;

    background: red;
`;

export const Logo = styled.img`
    width: 96px;
    height: auto;
    @media ( min-width: 1000px ) {
        width: 158px;
    }
`;

export const ArrowLeftIcon = styled(ArrowLeft)`
    fill: var(--blue-dark);
    height: 20px;
    width: 20px;
    margin-left: 8px;
`;

const formMarginTop = css`
    margin-top: 16px;
`;
export const EmailInput = styled(TextInput)`
    ${formMarginTop}
`;

export const PasswordInput = styled(TextInput)`
    ${formMarginTop}
`;

export const LoginButton = styled(Button)`
    ${formMarginTop}
`;

