import styled, { css, keyframes } from 'styled-components';

import { ArrowRight } from '../../styles/Icons';
import LandingBackground from '../../components/LandingBackground';

const styleFormComponent = css`
    margin-top: 1.2rem;
`;

const smoothOpacity = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

export const Container = styled(LandingBackground)`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
    
    position: relative;
    
    @media (min-width: 1000px) {
        flex-direction: row;
    }
`;

export const Content = styled.div`
    padding: 1.2rem;
    grid-area: content;
    max-width: 80vw;
    @media (min-width: 700px) {
        padding: 2.4rem;
    }
`;

export const Wrapper = styled.div`
    z-index: 2;
    width: 100vw;
    max-width: 96rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    overflow-y: auto;

    @media (min-width: 800px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 
            "content logo"
        ;
    }
`;

export const Title = styled.h1`
    color: var(--secondary);
    font-family: Cairo;
    font-size: 6rem;
    line-height: 6rem;
    animation-name: ${smoothOpacity};
    animation-duration: 3s;
    @media (min-width: 1100px) {
        font-size: 8rem;
    }
`;

export const Description = styled.p`
    font-size: 2.4rem;
    font-family: Montserrat;
    max-width: 20rem;
    margin-top: 0.8rem;
    > strong {
        color: var(--secondary);
    }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1.6rem;
    > ::placeholder {
        color: var(--text);
        opacity: 0.8;   
    }
`;

export const Input = styled.input`
    height: 5.6rem;
    border: 0rem solid var(--text);
    border-radius: 2.8rem;

    background: var(--primary);

    display: flex;
    align-items: center;
    padding: 2.4rem;
    cursor: pointer;
    outline: 0;
    font-size: 1.6rem;
    ${styleFormComponent}
    
`;

export const ButtonSubmit = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 5.6rem;
    border-radius: 2.8rem;
    background: var(--secondary);

    color: var(--white);
    font-family: Cairo;
    font-size: 1.4rem;
    font-weight: bold;

    ${styleFormComponent}
    &:hover {
        background: var(--secondary-dark);
    }
`;

export const LinkToSignUp = styled.div`
    margin-top: 2.4rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    
    cursor: pointer;

    > span {
        font-family: Montserrat;
        font-size: 1.6rem;
    }
    &:hover {
        opacity: 0.7;
    }
`;

export const ArrowRightIcon = styled(ArrowRight)`
    fill: var(--secondary);
    height: 2rem;
    width: 2rem;
    margin-left: 0.8rem;
`;

export const LogoContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    grid-area: logo;

    flex-direction: column;
    > span {
        display: none;
        @media ( min-width: 800px ) {
            display: flex;
            color: var(--secondary);
            font-family: Cairo;
            font-size: 3.2rem;
            font-weight: 700;
        }
    }
`;

export const ShopandoIcon = styled.img`
    width: 9.6rem;
    @media ( min-width: 700px ) {
        width: 12.8rem;
    }
    @media ( min-width: 1000px ) {
        width: 20rem;
    }
`;

export const CartBg = styled.img`
    position: absolute;
    max-width: 60vw;
    max-height: 100vh;
    object-fit: contain;
    right: 0;
    bottom: 0;
    z-index: 1;
`;
