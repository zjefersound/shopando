import styled, {css} from 'styled-components';

import NavBarContainer from '../../components/NavBar';

import LogoHorizontal from '../../components/LogoHorizontal'
import { 
    Camera,
    Document,
    Photograph,
    Logout,
    Menu
} from '../../styles/Icons';

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
export const SideBar = styled.div`
    display: none;
    height: 100%;
    min-width: 24rem;
    position: sticky;
    top: 0;
    left: 0;
    overflow-y: auto;
    padding-top: 2.4rem;
    max-width: 366px;
    > ul li a, ul li button {
        font-size: 2.4rem;
        list-style: none;
        text-decoration: none;
        font-weight: 600;
        margin-bottom: 2rem;
        margin-left: 2rem;
        cursor: pointer;
        &:hover {
            opacity: 0.7;
        }
    }
    > ul li.logout a {
        color: var(--danger);
    }

    @media(min-width: 740px) {
        display: flex;
        border-right: 0.1rem solid var(--outline);
    }
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: min(1000px, 100%);
    > h2 {
        margin: 4rem 2.4rem 0;
        font-size: 3.2rem;
        color: var(--secondary);
    }
    @media (min-width: 740px) {
        /* border-left: 0.1rem solid var(--outline) inherit;
        border-right: 0.1rem solid var(--outline) inherit; */
    }
`;

export const Photos = styled.div`
    max-width: 100vw;
`;

export const Image = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;

    > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    @media (min-width: 500px) {
        height: 20rem;
        width: 20rem;
    }
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

