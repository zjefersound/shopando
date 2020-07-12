import styled from 'styled-components';

interface ButtonProps {
    outlined?: boolean;
}

export default styled.button<ButtonProps>`
    background: ${ props => props.outlined ? 'transparent' : 'var(--brown)' };
    color: ${ props => props.outlined ? 'var(--brown)' : 'var(--white)'  };
    border: ${ props => props.outlined ? '1px solid var(--brown)' : 'none'  };
    
    padding: 16px;
    border-radius: 4px;

    font-weight: bold;
    font-size: 16px;
    
    cursor: pointer;
    outline: 0;

    &:hover {
        background: ${ props => props.outlined ? 'var(--dark-hover)' : 'var(--light-hover)'  };
    }

`;