import styled, { css } from 'styled-components';

import { ArrowRight, XCircle } from '../../styles/Icons';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const contentCSS = css`
    display: flex;
    flex-direction: column;
    > a {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 32px;
        text-decoration: none;
    }
`;

export const Left = styled.div`
    ${contentCSS}
    width: 100%;
    justify-content: center;
    position: relative;
    > h2 {
        color: var(--blue-dark);
        margin-top: 16px;
    }
    @media ( min-width: 500px) {
        padding-left: 32px;
        width: 50%;
    }
`;

export const Right = styled.div`
    display: none;
    @media ( min-width: 500px ) {
        ${contentCSS}
        padding: 16px;
        width: 50%;
        align-items: center;
        justify-content: center;
        
        > span {
            font-size: 28px;
            font-weight: 900;
            margin-top: 16px;
        }
    }
`;

export const Logo = styled.img`
    width: 96px;
    height: auto;
    @media ( min-width: 1000px ) {
        width: 158px;
    }
`;

export const ArrowRightIcon = styled(ArrowRight)`
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

export const CrossIcon = styled(XCircle)`
    width: 20px;
    height: 20px;
    margin-right: 8px;
    fill: var(--white);
`;

export const ErrorMessage = styled.div`
    margin-top: 16px;
    padding: 8px 20px;
    border-radius: 4px;
    background: var(--danger);
    > span {
        font-size: 14px;
        color: var(--white);
    }
`;
