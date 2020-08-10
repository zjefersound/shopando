import React, { useState, ChangeEvent } from 'react';

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

import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

interface UserResponse {
    id: number;
    name: String;
    email: String;
    phone: String;
    password: String;
}

const SignIn: React.FC = () => {
    const history = useHistory();

    const [errorMessage, setErrorMessage] = useState('');
    const [validLogin, setValidLogin] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){ 
        const { name, value } = event.target;
        const data = { ...formData, [name]: value }
        setFormData(data);
        setErrorMessage('');
    }

    const login = async () => {
        const { email, password } = formData;
        if (email && password) {
            try{
                await api.get<UserResponse[]>('/users').then(res => {
                    res.data.map( user => {
                        if (
                            user.email === formData.email &&
                            user.password === formData.password    
                        ) {
                            const id = user.id;
                            localStorage.setItem('id', String(id) );
                            history.push('/home')    
                        }
                    })
                });
    
            } catch( exception ){
                alert(exception);
            }
            if (!validLogin) setErrorMessage('Usuário ou senha inválidos.');
            
        } else {
            let message = '';
            if(!email) message += `Email vazio.`;
            if(!password) message += `Senha vazia.`;
            if(!errorMessage) setErrorMessage(message);
        }
        
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
                        Para começar, é só fazer o Log in!
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
            
            <FormsBg src={BgImg}/>
            {/* <CartBg src={CartIcon}/> */}
        </Container>
    );
}

export default SignIn;