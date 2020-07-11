import React from 'react';

import { 
    Container,
    LeftTopCircle,
    BottomRightCircle,
    Wrapper,
    Left,
    Right,
    Logo,
    ArrowRightIcon,
} from './styles';

import { Link } from 'react-router-dom';

import logo from '../../assets/images/shopando.png';
import circle1 from '../../assets/images/t-l-circle.png';
import circle2 from '../../assets/images/b-r-circle.png';

const Login: React.FC = () => {
    return (
        <Container>
            <LeftTopCircle src={circle1}  />
            <BottomRightCircle src={circle2}/>
            <Wrapper>
                <Left>
                    <h1>Bem vindo!</h1>
                    <h2>Log in</h2>
                    <Link to='/asd'>
                        Não tem uma conta?    
                        <ArrowRightIcon />
                    </Link>
                </Left>
                <Right>
                    <Logo src={logo}/>
                    <span>Shopando</span>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default Login;