import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FacebookLogin, { ReactFacebookLoginInfo } from 'react-facebook-login';
import { Context } from '../../Context/AuthContext';
import facebookInfo from '../../services/facebookInfo';

import { 
    Container,
    Wrapper,
    Header,
    LogoImg,
    BackPage,
    ArrowLeftIcon,
    Content,
    Register,
    FormsBg,
    FacebookLogo
} from './styles';

import BgImg from '../../assets/images/background-landing.png';
import shopandoImg from '../../assets/images/pink-mall.png';

const {appId} = facebookInfo;

const Signup: React.FC = () => {
    const { handleLogin } = useContext(Context);

    const responseFacebook = (response: ReactFacebookLoginInfo) => {
        handleLogin(response);
        // axios.get(`https://graph.facebook.com/v8.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${appId}&client_secret=7a3464601feca768d20edd794eacf47d&fb_exchange_token=${response.accessToken}`)
        //     .then(responseToken => {
        //         localStorage.setItem('access_token', responseToken.data.access_token );
        //         localStorage.setItem('token_type', responseToken.data.token_type );
        //     });      
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
                            appId={appId}
                            autoLoad={false}
                            fields="id"
                            callback={ responseFacebook }
                            icon={<FacebookLogo />}
                            cssClass="my-facebook-button-class"
                        />
                         
                    </Register>
                </Content>
            </Wrapper>
            <FormsBg src={BgImg}/>
        </Container>
    );
}

export default Signup;