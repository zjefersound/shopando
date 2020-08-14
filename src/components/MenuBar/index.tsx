import React from 'react';

import { Container, Wrapper } from './styles';

const MenuBar: React.FC = (props) => {
    return (
        <Container>
            <Wrapper>
                {props.children}
            </Wrapper>
        </Container>
    );
}

export default MenuBar;