import styled, { css } from 'styled-components';

import { ArrowRight } from '../../styles/Icons';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    max-height: 100vh;

    background: var(--blue-light);

    display: flex;
    align-items: flex-end;
    justify-content: center;
    @media ( min-width: 1000px ) {
        align-items: center;
    }
`;
const bgImgCSS = css`
    position: fixed;
    width: auto;
`;

export const LeftTopCircle = styled.img`
    ${bgImgCSS}
    height: 40vh;
    top: 0;
    left: 0;
`;

export const BottomRightCircle = styled.img`
    ${bgImgCSS}
    height: 60vh;
    bottom: 0;
    right: 0;
`;

export const Wrapper = styled.div`
    display: flex;

    height: 90vh;
    width: 100vw;

    background: var(--primary);
    z-index: 2;
    position: relative;

    padding: 32px;
    box-shadow: 0 0 16px #0005;

    @media ( min-width: 1000px ) {
        height:  min( 780px, 80vh );
        width: min( 1280px, 60vw );
        border-radius: 16px;
    }

`;

export const LogoBackground = styled.img`
    width: min(60%, max(200px, 100vh) );
    height: auto;

    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
    @media ( min-width: 1000px ) {
        
    }
`;
export const MobileLogo = styled.img`
    width: 40px;
    height: auto;
`;
export const MobileHeader = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    flex-wrap: wrap;
    
    > span {
        font-weight: 900;
        margin-left: 16px;
    }
    @media ( min-width: 500px ) {
        display: none;
    }
`; 

