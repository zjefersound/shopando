import styled, { css } from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;

    background: var(--blue-light);

    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
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
    right: 80vh;
`;

export const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    
    background: var(--primary);
    z-index: 2;
    position: relative;
    flex-wrap: wrap;
    height: 100vh;

    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 0px;
    }

    padding: 32px;

    @media ( min-width: 1000px ) {
        padding-top: 120px;
        padding-bottom: 64px;
        width: min( 1280px, 60vw );
    }

`;

export const LogoBackground = styled.img`
    display: flex;
    width: min(60%, max(40vw, 500px) );
    height: auto;
    
    flex-shrink: 0;

    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
    @media ( min-width: 1000px ) {
        max-height: 100%;
        width: auto ;
    }
`;
export const MobileLogo = styled.img`
    width: 40px;
    height: auto;
`;
export const MobileHeader = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    
    > span {
        font-family: 'Cairo';
        font-weight: 700;
        margin-left: 16px;
    }
    @media ( min-width: 500px ) {
        display: none;
    }
`; 

