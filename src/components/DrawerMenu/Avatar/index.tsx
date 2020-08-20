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

const Avatar: React.FC<AvatarProps> = ({
    email,
    name,
    url
}) => {
    return (
        <Container>
            <img src={url} alt="Foto"/>
            <div>
                <Name>
                    {name}
                </Name>
                <Email>
                    {email}
                </Email>
            </div>
        </Container>
    );
}

export default Avatar;