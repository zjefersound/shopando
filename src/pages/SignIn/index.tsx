import React from 'react';

import BgImg from '../../assets/images/background-landing.png';
import CartIcon from '../../assets/images/cart.png';
import MallIcon from '../../assets/images/pink-mall.png';

import { 
    Container,
    Wrapper,
    Content,
    Title,
    Description,
    Form,
    Input,
    ButtonSubmit,
    LinkToSignUp,
    ArrowRightIcon,
    LogoContent,
    ShopandoIcon,
    CartBg,
    FormsBg
} from './styles';

const SignIn: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <LogoContent>
                    <ShopandoIcon src={MallIcon}/>
                    <span>Shopando</span>
                </LogoContent>
                <Content>
                    <Title>Bem vindo!</Title>
                    <Description>
                        Para começar, é só fazer o Log in!
                    </Description>
                    <Form>
                        <Input placeholder='Email' />
                        <Input placeholder='Senha' type='password'/>
                        <ButtonSubmit>Entrar</ButtonSubmit>
                    </Form>
                    <LinkToSignUp>
                        <span>Quero criar minha conta</span>
                        <ArrowRightIcon />
                    </LinkToSignUp>
                </Content>
            </Wrapper>
            
            <FormsBg src={BgImg}/>
            {/* <CartBg src={CartIcon}/> */}
        </Container>
    );
}

export default SignIn;