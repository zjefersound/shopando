import styled from 'styled-components';

export const Container = styled.div`
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    flex-wrap: nowrap;
    position: relative;

    cursor: pointer;

    div {
        position: absolute;
        width: 3.2rem;
        height: 0.4rem;
        background: var(--secondary);
        border-radius: 0.2rem;

        transition: all 0.3s;
        &:nth-child(1) {
            transform: rotate(0) translateY(-1rem); 
        }
        &:nth-child(2) {
            transform: translateX(0);
            opacity: 1;
        }
        &:nth-child(3) {
            transform: rotate(0) translateY(1rem);
        }
    }
    &.open {
        z-index: 9999;
        div {
            background: var(--primary);
            width: 2.4rem;
            &:nth-child(1) {
                transform: rotate(45deg);          
            }
            &:nth-child(2) {
                transform: translateX(100%);
                opacity: 0;
            }
            &:nth-child(3) {
                transform: rotate(-45deg);
            }
        }
    }
`;
