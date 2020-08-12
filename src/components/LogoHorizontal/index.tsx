import React from 'react';

import { Container, Logo } from './styles';
import LogoImg from '../../assets/images/pink-mall.png';

const LogoHorizontal: React.FC = () => {
  return (
    <Container>
        <Logo src={ LogoImg }/>
        <span>Shopando</span>
    </Container>
  );
} 

export default LogoHorizontal;