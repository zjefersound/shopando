import React, { useState }  from 'react';

import { 
    Container,
    Logo,
    NavBar,
    NavContent,
    MenuIcon,
    Content,
    Main,
    Photos,

    PhotosIcon,
    VideoIcon,
    TextIcon,
    LogoutIcon,
    PostItem as Post,
} from './styles';


import MenuBar from '../../components/MenuBar';
import MenuBarItem from '../../components/MenuBarItem';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';

const Home: React.FC = () => {
    const image = "https://scontent.fcfc3-1.fna.fbcdn.net/v/t31.0-0/p480x480/334608_182958278510193_1717468744_o.jpg?_nc_cat=111&_nc_sid=7aed08&_nc_ohc=bW9thCNF1hUAX9PmPdL&_nc_ht=scontent.fcfc3-1.fna&_nc_tp=6&oh=b6e0983b2e3a6fe83a6a04930a986ed1&oe=5F59CD73";
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
                    <Link to='/'>
                        <MenuBarItem 
                            icon={()=><LogoutIcon />}
                            title='Log out'
                            className='log-out'
                        />
                    </Link>
                </MenuBar>
                <Main>
                    <h2>Fotos</h2>
                    <Photos>
                        <Post src={image} alt="foto" description='olá'/>                   
                        <Post src={image} alt="foto" description='olá'/>                   
                        <Post src={image} alt="foto" description='olá'/>                   
                        <Post src={image} alt="foto" description='olá'/>                   
                        <Post src={image} alt="foto" description='olá'/>                   
                    </Photos>
                </Main>
            </Content>
        </Container>
    );
}

export default Home;