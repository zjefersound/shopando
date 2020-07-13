import React, { useState, ChangeEvent }  from 'react';

import { 
    Left,
    Right,
    Logo,
    ArrowRightIcon,
    EmailInput,
    PasswordInput,
    LoginButton,
    CrossIcon,
    ErrorMessage,
} from './styles';

import { Link, useHistory } from 'react-router-dom';
import BlueLayout from '../../components/BlueLayout';

import logo from '../../assets/images/shopando.png';
import api from '../../services/api';

interface UserResponse {
    id: number;
    name: String;
    email: String;
    phone: String;
    password: String;
}

const Login: React.FC = () => {
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
        <BlueLayout>
            <Left>
                <h1>Bem vindo!</h1>
                <h2>Log in</h2>
                {errorMessage && (
                    <ErrorMessage>
                        <CrossIcon />
                        <span>{errorMessage}</span>
                    </ErrorMessage>
                )}
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