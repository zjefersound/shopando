import React from 'react';

import { Container } from './styles';

const MenuBar: React.FC = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    );
}

export default MenuBar;