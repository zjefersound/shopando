import styled from 'styled-components';

import LandingBackground from '../../components/LandingBackground';

import { ArrowLeft, Facebook } from '../../styles/Icons';

export const Container = styled(LandingBackground)`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
    
    position: relative;
    
    @media (min-width: 750px) {
        flex-direction: row;
    }
`;

export const Wrapper = styled.div`
    overflow-y: auto;
    width: 100vw;
    max-width: 74rem;
    padding: 2.4rem;
    z-index: 2;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6rem;
`;

export const BackPage = styled.div`
    > a {
        display: flex;
        align-items: center;
        > span {
            font-size: 1.6rem;
        }
    }
`;

export const LogoImg = styled.img`
    width: 3.2rem;
    height: 3.2rem;
`;

export const ArrowLeftIcon = styled(ArrowLeft)`
    fill: var(--secondary);
    height: 2rem;
    width: 2rem;
    margin-right: 1.6rem;
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    @media (min-width: 700px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const Register = styled.div`
    margin-top: 2.4rem;
    width: 100%;
    > h1 {
        font-size: 7rem;
        color: var(--secondary);
        font-family: Cairo;
        line-height: 7.2rem;
    }
    > p {
        margin-top: 2.4rem;
        font-size: 1.6rem;
        line-height: 2rem;
        margin-bottom: 2.4rem;
        max-width: 18rem;
    }

    .my-facebook-button-class {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #3b5998;
        
        width: 100%;
        height: 5.6rem;
        border-radius: 2.8rem;

        cursor: pointer;

        color: #FFF;
        font-size: 1.6rem;
        font-family: Cairo;
        font-weight: 700;

        &:hover {
            opacity: 0.7;
        }
    }

    @media (min-width: 740px) {
        width: 48%;
    }
`;

export const FacebookLogo = styled(Facebook)`
    line-height: 100%;    
    margin-right: 1.6rem;
    height: 2rem;
    width: 2rem;
    fill: var(--white);
    stroke: none;
`;

export const UserLoggedIn = styled.div`
    margin-top: 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: var(--primary);
    border-radius: 0.8rem;
    padding: 1.6rem;

    > h3 {
        font-size: 2rem;
        font-family: Cairo;
        line-height: 2.4rem;
    }
    @media (min-width: 740px) {
        width: 48%;
    }
`;
export const UserInfo = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 1.6rem;
        > p {
            font-weight: bold;
            color: var(--secondary);
            font-size: 1.8rem;
        }
    }
`;

export const Avatar = styled.img`
    width: 5rem;
    height: 5rem;
    border-radius: 4rem;
    background: var(--primary-dark);
    outline: 0;
`;
