import React from 'react';

import { 
    Container,
    Name,
    Email,
} from './styles';

interface AvatarProps {
    url: string;
    name: string;
    email: string;
}

const Avatar: React.FC = () => {
    return (
        <Container>
            <img src="https://avatars3.githubusercontent.com/u/62676057" alt="Foto"/>
            <div>
                <Name>
                    Jeferson
                </Name>
                <Email>
                    jef@gmail.com
                </Email>
            </div>
        </Container>
    );
}

export default Avatar;