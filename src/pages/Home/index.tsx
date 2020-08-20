import React, { useState, useEffect, useContext }  from 'react';

import { 
    Container,
    Logo,
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
    DrawerMenuContent,
    PostItem as Post,
} from './styles';

import useSWR from 'swr';
import { Link } from 'react-router-dom';

import { Context } from '../../Context/AuthContext';

import NavBar from '../../components/NavBar';
import MenuBar from '../../components/MenuBar';
import MenuBarItem from '../../components/MenuBarItem';
import SearchBar from '../../components/SearchBar';
import Background from '../../components/Background';
import bgImg from '../../assets/images/background-landing.png';
import { ThemeContext } from '../../Context/ThemeContext';
import DrawerMenu from '../../components/DrawerMenu';
import Avatar from '../../components/DrawerMenu/Avatar';

interface FacebookResponseProps {
    photos: {
        data: any;
    };
    name: string;
    posts:  any;
}

const Home: React.FC = () => {
   
    const { handleLogout } = useContext(Context);
    const { toggleTheme } = useContext(ThemeContext);
    const token = localStorage.getItem('access_token');

    const logout = async () => {
        await handleLogout();
    }

    //SWR
    const host = `https://graph.facebook.com/me`;
    const fields = `?fields=id,name,picture,posts%7Bfull_picture,description%7D,photos%7Bname,%20images%7D`;
    const access = `&access_token=${token}`;
    const url = `${host}${fields}${access}`
    const {data} = useSWR<FacebookResponseProps>(url);

    return (
        <Container className='post-container'>
            <NavBar>
                <NavContent>
                    <button onClick={ toggleTheme }>
                        <Logo />
                    </button>
                    <SearchBar />
                    <DrawerMenu>
                        <DrawerMenuContent>
                            <Avatar />
                        </DrawerMenuContent>
                        <MenuBarItem 
                            icon={()=><LogoutIcon />}
                            title='Log out'
                            className='log-out'
                            onClick={ logout }
                        />
                    </DrawerMenu>
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
                            title='Vídeos'
                            onClick={()=>{}}
                        />
                        <MenuBarItem 
                            icon={() => <TextIcon />} 
                            title='Textos'
                            onClick={()=>{}}
                        />
                    </Options>
                </MenuBar>
                <Main>
                    <h2>Fotos</h2>
                    <Photos>
                        {(data?.posts.data || []).map((post: any, index: number) => {
                            if (post.full_picture){
                                const text = String(post.description).length < 120 
                                    ? post.description 
                                    : post.description.substring(120, 0)+'...';
                                return (
                                    <Post 
                                        key={String(index)} 
                                        src={post.full_picture} 
                                        alt="foto" 
                                        description={text}
                                    />
                                );                               
                            } else {
                                return null;
                            }
                        })}
                        {(data?.photos.data || []).map((post: any, index: number) => {
                            return (
                                <Post 
                                    key={String(index)} 
                                    src={post.images[0].source} 
                                    alt="foto" 
                                    description={post.name}
                                />
                            );                               
                        })}
                    </Photos>
                </Main>
            </Content>
            <Background src={bgImg} />
        </Container>
    );
}

export default Home;