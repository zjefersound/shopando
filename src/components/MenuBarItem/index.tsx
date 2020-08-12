import React from 'react';

import { Container } from './styles';

interface MenuBarItemProps {
    icon: Function;
    title: string;
    onClick?: Function;
    className?: string;
}
const MenuBarItem: React.FC<MenuBarItemProps> = ({
    icon,
    title,
    onClick,
    className
}) => {
    return (
        <Container 
            className={String(className)}
            onClick={() => {onClick && onClick()}
        }>
            {icon()}
            <span>
                {title}
            </span>
        </Container>
    );
}

export default MenuBarItem;