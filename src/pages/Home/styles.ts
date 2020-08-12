import styled, {css} from 'styled-components';

import LogoHorizontal from '../../components/LogoHorizontal'
import { 
    Camera,
    Document,
    Photograph,
    Logout,
    Menu
} from '../../styles/Icons';
import Post from '../../components/Post';

const contentArea = css`
    max-width: 1366px;
    margin: 0 auto;
`;

export const Container = styled.div`
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    max-height: 100vh;
    display: flex;

    flex-direction: column;
`;

export const NavBar = styled.div`
    z-index: 2;
    top: 0;
    position: sticky;
    background: linear-gradient(to bottom left , var(--primary), var(--primary-dark));
    border-bottom: 0.04rem solid var(--outline);
`;
export const NavContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    padding: 2rem;
    ${contentArea}
`;
export const Logo = styled(LogoHorizontal)`
    margin-left: 32px;
`;
export const MenuIcon = styled(Menu)`
    width: 38px;
    height: 38px;
    fill: var(--secondary);
`;

export const Content = styled.div`
    ${contentArea}
    display: flex;
    height:100%;
    width: 100vw;
    overflow-x: hidden;
    @media(min-width: 740px) {
        flex-direction: row;
        /* justify-content: center; */
    }
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    /* width: min(1000px, 100%); */
    width: 100%;

    > h2 {
        margin: 4rem 2.4rem 0;
        font-size: 3.2rem;
        color: var(--secondary);
    }
    @media (min-width: 740px) {
        border-left: 0.1rem solid var(--outline);
        border-right: 0.1rem solid var(--outline);
    }
`;

export const Photos = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 0 1.6rem 5.6rem;
    justify-content: baseline;
`;

export const PostItem = styled(Post)`
`;

const menuIconStyle = css`
    height: 2.8rem;
    width: 2.8rem;
    margin-right: 3.2rem;
    fill: var(--secondary);
`;

export const PhotosIcon = styled(Photograph)`
    ${menuIconStyle}
`; 

export const VideoIcon = styled(Camera)`
    ${menuIconStyle}

`;

export const TextIcon = styled(Document)`
    ${menuIconStyle}

`;

export const LogoutIcon = styled(Logout)`
    ${menuIconStyle}
    fill: var(--danger);
`;
