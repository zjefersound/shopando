import styled, { css } from 'styled-components';

import { ArrowLeft, XCircle } from '../../styles/Icons';

import TInput from '../../components/TextInput';
import Button from '../../components/Button';

import BlueLayout from '../../components/BlueLayout';

export const Layout = styled(BlueLayout)`
`; 

const contentCSS = css`
    display: flex;
    flex-direction: column;
    flex: 1;
    
`;

export const Left = styled.div`
    ${contentCSS}
    @media (min-width: 500px) {
        padding-right: 32px;
    }
`;

export const Right = styled.div`
    ${contentCSS}
`;

export const Wrapper = styled.div`
    display: flex;

    height: 90vh;
    width: 100vw;

    background: var(--primary);
    z-index: 2;
    position: relative;
    flex-direction: column;

    box-shadow: 0 0 16px #0005;

    @media ( min-width: 1000px ) {
        height:  min( 780px, 80vh );
        height:  auto;
        width: min( 1280px, 60vw );
        border-radius: 16px;
    }

`;
export const Header = styled.div`
    display: flex;
    align-items: center;
    /* background: blue; */
    height: 120px;
    padding: 0 32px;
    > a {
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 32px;
        text-decoration: none;
    }
`;

export const ContentHeader = styled.div`
    display: flex;
    justify-content: space-between;

    position: relative;

    > div#left {
        > h2 {
            margin-top: 20px;
            color: var(--blue-dark);
        }
    }

    > div#right {
        display: flex;
        align-items: center;

        position: absolute;
        right: 0;
        > span {
            display: none;
            font-weight: 900;
            margin-left: 8px;
            @media (min-width: 500px) {
                display: flex;
            }
        }
    }

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 32px;
    padding-bottom: 80px;
    @media ( min-width ) {
        padding: 64px;
        padding-bottom: 80px;
    }

`;
export const ContentBody = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 500px) {
        flex-direction: row;
    }

`;

export const Logo = styled.img`
    width: 48px;
    height: auto;
`;

export const ArrowLeftIcon = styled(ArrowLeft)`
    fill: var(--blue-dark);
    height: 20px;
    width: 20px;
    margin-right: 16px;
`;

const formMarginTop = css`
    margin-top: 16px;
`;
export const TextInput = styled(TInput)`
    ${formMarginTop}
`;

export const CrossIcon = styled(XCircle)`
    width: 20px;
    height: 20px;
    margin-right: 8px;
    fill: var(--white);
`;

export const PasswordInput = styled(TInput)`
    ${formMarginTop}
`;

export const LoginButton = styled(Button)`
    ${formMarginTop}
`;

export const ErrorMessage = styled.div`
    padding: 8px 20px;
    border-radius: 4px;
    background: var(--danger);
    > span {
        font-size: 14px;
        color: var(--white);
    }
`;

