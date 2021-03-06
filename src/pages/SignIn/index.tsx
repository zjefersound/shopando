import React, { useState, ChangeEvent } from 'react';

import BgImg from '../../assets/images/background-landing.png';
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
} from './styles';
import { Link, useHistory } from 'react-router-dom';
import Background from '../../components/Background';

const SignIn: React.FC = () => {
    const history = useHistory();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){ 
        const { name, value } = event.target;
        const data = { ...formData, [name]: value }
        setFormData(data);
    }

    const login = async () => {
        // const { email, password } = formData;
        // if (email && password) {
        //     try{
        //         await api.get<UserResponse[]>('/users').then(res => {
        //             res.data.map( user => {
        //                 if (
        //                     user.email === formData.email &&
        //                     user.password === formData.password    
        //                 ) {
        //                     const id = user.id;
        //                     localStorage.setItem('id', String(id) );
        //                     history.push('/home')    
        //                 }
        //             })
        //         });
    
        //     } catch( exception ){
        //         alert(exception);
        //     }
        //     if (!validLogin) setErrorMessage('Usuário ou senha inválidos.');
            
        // } else {
        //     let message = '';
        //     if(!email) message += `Email vazio.`;
        //     if(!password) message += `Senha vazia.`;
        //     if(!errorMessage) setErrorMessage(message);
        // }
        history.push('/home');
    }
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
                        Para começar, é só fazer o {' '}
                        <strong>Log in!</strong>
                    </Description>
                    <Form>
                        <Input 
                            name='email'
                            id='email'
                            type='text' 
                            placeholder='Email' 
                            onChange={ handleInputChange }
                        />
                        <Input
                            name='password'
                            id='password'
                            type='password'  
                            placeholder='Senha'
                            onChange={ handleInputChange }
                        />
                        <ButtonSubmit onClick={ login }>
                            Entrar
                        </ButtonSubmit>
                    </Form>
                    <Link to='/signup'>
                        <LinkToSignUp>
                            <span>Quero criar minha conta</span>
                            <ArrowRightIcon />
                        </LinkToSignUp>
                    </Link>
                </Content>
            </Wrapper>
            
            <Background src={BgImg}/>
        </Container>
    );
}

export default SignIn;