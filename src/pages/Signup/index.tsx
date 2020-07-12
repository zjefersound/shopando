import React, { useEffect, useState, ChangeEvent, FormEvent }  from 'react';

import { 
    Left,
    Right,
    Logo,
    Wrapper,
    Header,
    Content,
    ArrowLeftIcon,
    EmailInput,
    PasswordInput,
    LoginButton,
    Layout,
    ContentHeader,
    ContentBody
} from './styles';

import { Link } from 'react-router-dom';
import api from '../../services/api';
import logo from '../../assets/images/shopando.png';


interface UserResponse {
    id: number;
    name: String;
    email: String;
    phone: String;
    password: String;
}


const Signup: React.FC = () => {

    const [formData, setFormData] = useState({
        email: 'email',
        password: '',
    });

    const [names, setNames] = useState<String[]>();

    useEffect(() => {
        
    },[]);

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        const { name, value } = event.target;
        const data = { ...formData, [name]: value }
        setFormData(data);
    }

    const signup = () => {
        api.get<UserResponse[]>('/users')
            .then( res => {
            const namesResponse = res.data.map(item => item.name);
            setNames(namesResponse);
        });
        console.log(names);
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
                        </div>
                        <div id="right">
                            <Logo src={logo}/>
                            <span>Shopando</span>              
                        </div>
                    </ContentHeader>   
                    <ContentBody>
                        <Left>
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
                            <PasswordInput 
                                name='password'
                                id='password'
                                type='password'  
                                placeholder='senha'
                                onChange = { handleInputChange }
                            />
                        </Left>
                        <Right>
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