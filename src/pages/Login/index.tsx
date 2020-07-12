import React, { useEffect, useState, ChangeEvent, FormEvent }  from 'react';

import { 
    Left,
    Right,
    Logo,
    ArrowRightIcon,
    EmailInput,
    PasswordInput,
    LoginButton
} from './styles';

import { Link } from 'react-router-dom';
import BlueLayout from '../../components/BlueLayout';

import logo from '../../assets/images/shopando.png';

const Login: React.FC = () => {

    const [formData, setFormData] = useState({
        email: 'email',
        password: '',
    });

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        const { name, value } = event.target;
        const data = { ...formData, [name]: value }
        setFormData(data);
    }

    const login = () => {

    }
    
    return (
        <BlueLayout>
            <Left>
                <h1>Bem vindo!</h1>
                <h2>Log in</h2>
                <EmailInput 
                    name='email'
                    id='email'
                    type='text' 
                    placeholder='email' 
                    onChange = { handleInputChange }
                />
                <PasswordInput 
                    name='password'
                    id='password'
                    type='password'  
                    placeholder='senha'
                    onChange = { handleInputChange }
                />
                <LoginButton onClick={login}>
                    Entrar
                </LoginButton>
                <Link to='/signup'>
                    Quero criar minha conta    
                    <ArrowRightIcon />
                </Link>   
            </Left>
            <Right>
                <Logo src={logo}/>
                <span>Shopando</span>
            </Right>
        </BlueLayout>
    );
}

export default Login;