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

import useSWR from 'swr';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Context } from '../../Context/AuthContext';

import MenuBar from '../../components/MenuBar';
import MenuBarItem from '../../components/MenuBarItem';
import SearchBar from '../../components/SearchBar';
import Background from '../../components/Background';
import bgImg from '../../assets/images/background-landing.png';
import { ThemeContext } from '../../Context/ThemeContext';

interface PostProps {
    src: string;
    description: string;
}
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
    
    //const [posts, setPosts] = useState<PostProps[]>([]);  

    const logout = async () => {
        await handleLogout();
    }

    // Normal
    // useEffect(() => {
    //     (async () => {
    //         await axios.get(`https://graph.facebook.com/me?fields=id,name,photos%7Bname,%20images%7D&access_token=${token}`)
    //             .then(response => {
    //                 console.log(response.data.photos.data);
    //                 const rawPosts = response.data.photos.data.map((post: any)=> {
    //                     return {
    //                         description: post.name,
    //                         src: post.images[0].source,
    //                     }
    //                 });
    //                 setPosts(rawPosts);
    //             });
    //     })();
    // },[]);

    //SWR
    const host = `https://graph.facebook.com/me`;
    // const fields = `?fields=id,name,photos%7Bname,%20images%7D`;
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
                        {/* {(data?.photos.data || []).map((post: any, index: number) => {
                            return (
                                <Post 
                                    key={String(index)} 
                                    src={post.images[0].source} 
                                    alt="foto" 
                                    description={post.name}
                                />
                            );                               
                        })} */}
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
                        {/* {posts.map((post, index)=>{
                            return (
                                <Post 
                                    key={String(index)} 
                                    src={post.src} 
                                    alt="foto" 
                                    description={post.description}
                                />
                            );                               
                        })} */}
                    </Photos>
                </Main>
            </Content>
            <Background src={bgImg} />
        </Container>
    );
}

export default Home;