import React, { useState, ChangeEvent }  from 'react';
import { Link, useHistory } from 'react-router-dom';
import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login';
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
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
    FacebookLogo
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
                            fields="id,name,email,photos{images},picture"
                            callback={responseFacebook}
                            icon={<FacebookLogo />}
                            cssClass="my-facebook-button-class"
                        />
                         
                    </Register>
                    <UserLoggedIn>
                        <h3>Usuário logado</h3>
                        <UserInfo>
                            {avatar && <Avatar src={avatar}/>}
                            <div>
                                <p>{name}</p>
                                <span>{email}</span>
                                {accessToken && <p>tok</p> }
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