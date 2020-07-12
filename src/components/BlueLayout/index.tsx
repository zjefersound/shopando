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

interface Props {
    disableWrapper?: boolean;
    disableWrapperImageBg?: boolean;
    disableMobileHeader?: boolean;
}

const BlueLayout: React.FC<Props> = (props) => {
    return (
        <Container> 
            <LeftTopCircle src={circle1}  />
            <BottomRightCircle src={circle2}/>
            {props.disableWrapper 
                ? props.children
                : (
                    <Wrapper>
                        {!props.disableMobileHeader &&(
                            <MobileHeader>
                                <MobileLogo src={logo}/>  
                                <span>Shopando</span>
                            </MobileHeader>
                        )}

                        {props.children}

                        {!props.disableWrapperImageBg && (
                            <LogoBackground src={logoBg}/> 
                        )}
                    </Wrapper>
                )
            }
            
        </Container>
    );
}

export default BlueLayout;