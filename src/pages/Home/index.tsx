import React, { useState, ChangeEvent }  from 'react';

import { 
    Container,
    Logo,
    NavBar,
    NavContent,
    AvatarIcon,
    Content,
    SideBar,
    Main,
} from './styles';

import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';

const Home: React.FC = () => {
    return (
        <Container>
            <NavBar>
                <NavContent>
                    <Logo />
                    <SearchBar>

                    </SearchBar>
                    <Link to='/profile'>
                        <AvatarIcon />
                    </Link>
                </NavContent>
            </NavBar>
            <Content>
                <SideBar>

                </SideBar>
                <Main>

                </Main>
            </Content>
        </Container>
    );
}

export default Home;