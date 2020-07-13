import React, { useEffect, useState, ChangeEvent, }  from 'react';

import { 
    Left,
    Right,
    Logo,
    Wrapper,
    Header,
    Content,
    ArrowLeftIcon,
    TextInput,
    PasswordInput,
    LoginButton,
    Layout,
    ContentHeader,
    ContentBody,
    ErrorMessage,
    CrossIcon
} from './styles';

import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import logo from '../../assets/images/shopando.png';


interface UserResponse {
    id: number;
    name: String;
    email: String;
    phone: String;
    password: String;
}
 
const initialFromData = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: '',
};

const Signup: React.FC = () => {
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState('');

    const [formData, setFormData] = useState({
        ...initialFromData
    });

    useEffect(() => {
        
    },[]);

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        const { name, value } = event.target;
        const data = { ...formData, [name]: value }
        setFormData(data);
        setErrorMessage('');
    }

    const signup = async () => {

        const { 
            name, 
            email, 
            phone, 
            password, 
            confirm_password 
        } = formData;
        if(  
            name &&
            email && 
            phone &&
            password &&
            password === confirm_password
        ){
            const id = await api.post<UserResponse[]>('/users', formData); 
            setFormData(initialFromData);
            history.push('/');
        } else {
            let message = '';
            if(password !== confirm_password) message += `${errorMessage} Senhas diferentes. `;
            if(!name) message += (`${errorMessage} Nome vazio.`);
            if(!email) message += (`${errorMessage} Email vazio.`);
            if(!phone) message += (`${errorMessage} Fone vazio. `);
            if(!password) message += (`${errorMessage} Digite uma senha. `);

            if (!errorMessage) setErrorMessage(message);
        }


    }
    
    return (
        <Layout disableWrapper>
            <Wrapper>
                <Header>
                    <Link to='/' className="backButton">
                        <ArrowLeftIcon />
                        Voltar ao início   
                    </Link> 
                </Header>
                <Content> 
                    <ContentHeader>
                        <div id="left">
                            <h1>Cadastro</h1>
                            <h2>Preencha as informações</h2>
                            {errorMessage && (
                                <ErrorMessage>
                                    <CrossIcon />
                                    <span>{errorMessage}</span>
                                </ErrorMessage>
                            )}
                        </div>
                        <div id="right">
                            <Logo src={logo}/>
                            <span>Shopando</span>              
                        </div>
                    </ContentHeader>   
                    <ContentBody>
                        <Left>
                            <TextInput 
                                name='name'
                                id='name'
                                type='text' 
                                placeholder='name' 
                                onChange = { handleInputChange }
                            />
                            <TextInput 
                                name='email'
                                id='email'
                                type='text' 
                                placeholder='email' 
                                onChange = { handleInputChange }
                            />
                            <TextInput 
                                name='phone'
                                id='phone'
                                type='text' 
                                placeholder='phone' 
                                onChange = { handleInputChange }
                            />
                            
                        </Left>
                        <Right>
                            
                            <PasswordInput 
                                name='password'
                                id='password'
                                type='password'  
                                placeholder='senha'
                                onChange = { handleInputChange }
                            />
                            <PasswordInput 
                                name='confirm_password'
                                id='confirm_password'
                                type='password'  
                                placeholder='confirmar senha'
                                onChange = { handleInputChange }
                            />
                            
                            <LoginButton onClick={signup}>
                                Criar conta
                            </LoginButton> 
                        </Right>

                    </ContentBody> 

                </Content>
            </Wrapper>
            
        </Layout>
    );
}

export default Signup;