import React, { useState } from 'react';

import { Container } from './styles';

const Burger: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Container 
            className={isOpen ? 'open' :''}
            onClick={ () => setIsOpen(!isOpen) }
        >
            <div/>
            <div/>
            <div/>
        </Container>
    );
}

export default Burger;