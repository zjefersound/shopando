import React, { useState } from 'react';

import { Container } from './styles';
import Burger from './Burger';

const DrawerMenu: React.FC = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <button onClick={ toggleMenu }>
                <Burger />
            </button>
            <Container className={isOpen? 'open': ''}>
                {props.children}
            </Container>
        </>
    );
}

export default DrawerMenu;