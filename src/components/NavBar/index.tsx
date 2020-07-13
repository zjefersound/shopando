import React from 'react';

import { Container } from './styles';

const NavBar: React.FC = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    );
}

export default NavBar;