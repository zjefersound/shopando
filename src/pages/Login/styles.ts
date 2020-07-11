import styled, { css } from 'styled-components';

import { FiArrowRight } from '../../styles/Icons';


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
    padding: 32px;

    @media ( min-width: 1000px ) {
        height:  min( 780px, 80vh );
        width: min( 1280px, 60vw );
        border-radius: 16px;
    }

`;

const contentCSS = css`
    display: flex;
    width: 50%;
    flex-direction: column;
`;

export const Left = styled.div`
    ${contentCSS}
    padding-left: 32px;
    justify-content: center;
`;

export const Right = styled.div`
    ${contentCSS}
    align-items: center;
    justify-content: center;
    
    > span {
        font-size: 20px;
        font-weight: 900;
        margin-top: 16px;
    }
`;

export const Logo = styled.img`
    width: 96px;
    height: auto;
`;
export const ArrowRightIcon = styled(FiArrowRight)`
     
`;