import styled from 'styled-components';

interface ButtonProps {
    disabled?: boolean;
}

export default styled.input<ButtonProps>`
    padding: 12px;
    border-radius: 4px;
    border: 2px solid var(--outline);
    background: var(--primary);

    font-size: 12px;
    color: var(--brown);
    
    cursor: pointer;
    outline: 0;

    &:hover, &:focus {
        border-color: var(--brown);
        
    }

`;