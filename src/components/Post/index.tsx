import React from 'react';

import { 
    Container,
    PostContainer,
    Image,
} from './styles';

interface PostProps {
    src: string;
    alt: string;
    description: string;
}

const Post: React.FC<PostProps> = (props) => {
    return (
        <Container>
            <PostContainer>
                <Image>
                    <img src={props.src} alt={props.alt}/>
                </Image>
                <span>{props.description}</span>
            </PostContainer>
        </Container>
    );
}

export default Post;