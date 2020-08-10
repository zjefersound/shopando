import styled, { css, keyframes } from 'styled-components';

import { ArrowRight } from '../../styles/Icons';

const styleFormComponent = css`
    margin-top: 1.2rem;
`;

const smoothOpacity = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: linear-gradient(to bottom right, var(--primary), var(--primary-dark)); 
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
    
    position: relative;
    overflow: hidden;
    
    @media (min-width: 700px) {
        flex-direction: row;
    }
`;

export const Content = styled.div`
    padding: 2.4rem;
    grid-area: content;
    max-width: 80vw;
`;

export const Wrapper = styled.div`
    z-index: 2;
    width: 100vw;
    max-width: 96rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media (min-width: 1100px) {
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
    font-size: 8rem;
    line-height: 8.8rem;
    animation-name: ${smoothOpacity};
    animation-duration: 3s;
`;

export const Description = styled.p`
    font-size: 2.4rem;
    font-family: Montserrat;
    max-width: 24rem;
    margin-top: 0.8rem;
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
`;

export const LinkToSignUp = styled.div`
    margin-top: 2.4rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    > span {
        font-family: Montserrat;
        font-size: 1.6rem;
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
        @media ( min-width: 700px ) {
            display: flex;
            color: var(--secondary);
            font-family: Cairo;
            font-size: 3.2rem;
            font-weight: 700;
        }
    }
`;

export const ShopandoIcon = styled.img`
    width: 12.8rem;
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
export const FormsBg = styled.img`
    position: absolute;
    height: 100vh;
    min-width: 100vw;
    object-fit: cover;
    opacity: 0.25;
`;
