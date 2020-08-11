import React, { useState, ChangeEvent }  from 'react';
import { Link, useHistory } from 'react-router-dom';
import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login';

import { 
    Container,
    Wrapper,
    Header,
    LogoImg,
    BackPage,
    ArrowLeftIcon,
    Content,
    Register,
    UserLoggedIn,
    UserInfo,
    Avatar,
    FormsBg,
} from './styles';

import BgImg from '../../assets/images/background-landing.png';
import shopandoImg from '../../assets/images/pink-mall.png';

const Signup: React.FC = () => {
    const [accessToken, setAccessToken] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState('');

    const responseFacebook = (response: any) => {
        console.log(response);
        if (response){
            const newAvatar = response.picture.data.url || '';
            setAvatar(newAvatar);
            setName(response.name);
            setEmail(response.email);
            setAccessToken(response.accessToken);
        }
    }
    return (
        <Container>
            <Wrapper>
                <Header>
                    <BackPage>
                        <Link to='/'>
                            <ArrowLeftIcon />
                            <span>Voltar para o início</span>
                        </Link>
                    </BackPage>
                    <LogoImg src={shopandoImg} />
                </Header>
                <Content>
                    <Register>
                        <h1>Novo cadastro</h1>
                        <p>É novo por aqui? Faça seu cadastro agora mesmo!</p>
                        <FacebookLogin
                            appId="979559065826040"
                            autoLoad={false}
                            fields="name,email,picture"
                            callback={responseFacebook}
                        />
                    </Register>
                    <UserLoggedIn>
                        <h3>Usuário logado</h3>
                        <UserInfo>
                            {avatar && <Avatar src={avatar}/>}
                            <div>
                                <p>{name}</p>
                                <span>{email}</span>
                            </div>
                        </UserInfo>
                    </UserLoggedIn>
                </Content>
            </Wrapper>
            <FormsBg src={BgImg}/>
        </Container>
    );
}

export default Signup;