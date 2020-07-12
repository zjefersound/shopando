import React from 'react';

import { 
    Container,
    LeftTopCircle,
    BottomRightCircle,
    Wrapper,
    LogoBackground,
    MobileHeader,
    MobileLogo,
} from './styles';

import logo from '../../assets/images/shopando.png';
import logoBg from '../../assets/images/shopando-outline.png';
import circle1 from '../../assets/images/t-l-circle.png';
import circle2 from '../../assets/images/b-r-circle.png';

const BlueLayout: React.FC = (props) => {
    return (
        <Container> 
            <LeftTopCircle src={circle1}  />
            <BottomRightCircle src={circle2}/>
            <Wrapper>
                <MobileHeader>
                    <MobileLogo src={logo}/>  
                    <span>Shopando</span>
                </MobileHeader>
                {props.children}
                
                <LogoBackground src={logoBg}/> 
            </Wrapper>
        </Container>
    );
}

export default BlueLayout;