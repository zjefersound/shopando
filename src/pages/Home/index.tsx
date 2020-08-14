import React, { useState, useEffect, useContext }  from 'react';

import { 
    Container,
    Logo,
    NavBar,
    NavContent,
    MenuIcon,
    Content,
    Main,
    Photos,
    Options,

    PhotosIcon,
    VideoIcon,
    TextIcon,
    LogoutIcon,
    PostItem as Post,
} from './styles';

import axios from 'axios';
import { Link } from 'react-router-dom';

import { Context } from '../../Context/AuthContext';

import MenuBar from '../../components/MenuBar';
import MenuBarItem from '../../components/MenuBarItem';
import SearchBar from '../../components/SearchBar';

interface PostProps {
    src: string;
    description: string;
}

const Home: React.FC = () => {
    const {  handleLogout } = useContext(Context);
    const token = localStorage.getItem('access_token');
    
    const [posts, setPosts] = useState<PostProps[]>([]);  

    const logout = async () => {
        await handleLogout();
    }

    useEffect(() => {
        (async () => {
            await axios.get(`https://graph.facebook.com/me?fields=id,name,photos%7Bname,%20images%7D&access_token=${token}`)
                .then(response => {
                    console.log(response.data.photos.data);
                    const rawPosts = response.data.photos.data.map((post: any)=> {
                        return {
                            description: post.name,
                            src: post.images[0].source,
                        }
                    });
                    setPosts(rawPosts);
                });
        })();
    },[]);

    return (
        <Container className='post-container'>
            <NavBar>
                <NavContent>
                    <Logo />
                    <SearchBar />
                    <Link to='/profile'>
                        <MenuIcon />
                    </Link>
                </NavContent>
            </NavBar>
            <Content>
                <MenuBar>
                    <Options>
                        <MenuBarItem 
                            icon={() => <PhotosIcon />} 
                            title='Fotos'
                            onClick={()=>{}}
                        />
                        <MenuBarItem 
                            icon={() => <VideoIcon />} 
                            title='Videos'
                            onClick={()=>{}}
                        />
                        <MenuBarItem 
                            icon={() => <TextIcon />} 
                            title='Textos'
                            onClick={()=>{}}
                        />
                    </Options>
                    <MenuBarItem 
                        icon={()=><LogoutIcon />}
                        title='Log out'
                        className='log-out'
                        onClick={ logout }
                    />
                </MenuBar>
                <Main>
                    <h2>Fotos</h2>
                    <Photos>
                        {posts.map((post, index)=>{
                            return (
                                <Post 
                                    key={String(index)} 
                                    src={post.src} 
                                    alt="foto" 
                                    description={post.description}
                                />
                            );                               
                        })}
                    </Photos>
                </Main>
            </Content>
        </Container>
    );
}

export default Home;