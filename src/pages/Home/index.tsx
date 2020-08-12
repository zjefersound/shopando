import React, { useState }  from 'react';

import { 
    Container,
    Logo,
    NavBar,
    NavContent,
    MenuIcon,
    Content,
    SideBar,
    Main,
    Image,
    Photos,

    PhotosIcon,
    VideoIcon,
    TextIcon,
    LogoutIcon,
    Post,
} from './styles';

import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';

const Home: React.FC = () => {
    const image = "https://scontent.fcfc3-1.fna.fbcdn.net/v/t31.0-0/p480x480/334608_182958278510193_1717468744_o.jpg?_nc_cat=111&_nc_sid=7aed08&_nc_ohc=bW9thCNF1hUAX9PmPdL&_nc_ht=scontent.fcfc3-1.fna&_nc_tp=6&oh=b6e0983b2e3a6fe83a6a04930a986ed1&oe=5F59CD73";
    return (
        <Container>
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
                <SideBar>
                    <ul>
                        <li>
                            <button>
                                <PhotosIcon />
                                Fotos
                            </button>
                        </li>
                        <li>
                            <button>
                                <VideoIcon />
                                Videos
                            </button>
                        </li>
                        <li>
                            <button>
                                <TextIcon />
                                Textos
                            </button>
                        </li>
                        <li className='logout'>
                            <Link to='/'>
                                <LogoutIcon />
                                Sair
                            </Link>
                        </li>
                    </ul>
                </SideBar>
                <Main>
                    <h2>Fotos</h2>
                    <Photos>
                        <Post>
                            <Image>
                                <img src={image} alt="foto"/>
                            </Image>
                            <span>Post</span>
                        </Post>
                        <Post>
                            <Image>
                                <img src={image} alt="foto"/>
                            </Image>
                            <span>Post</span>
                        </Post>
                        <Post>
                            <Image>
                                <img src={image} alt="foto"/>
                            </Image>
                            <span>Post</span>
                        </Post>
                        <Post>
                            <Image>
                                <img src={image} alt="foto"/>
                            </Image>
                            <span>Post</span>
                        </Post>
                        <Post>
                            <Image>
                                <img src={image} alt="foto"/>
                            </Image>
                            <span>Post</span>
                        </Post>
                        
                    </Photos>
                </Main>
            </Content>
        </Container>
    );
}

export default Home;