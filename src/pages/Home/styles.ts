import styled from 'styled-components';

import NavBarContainer from '../../components/NavBar';

import LogoHorizontal from '../../components/LogoHorizontal'
import { UserCircle } from '../../styles/Icons';

export const Container = styled.div`

`;
export const NavContent = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding: 32px;
`;
export const Logo = styled(LogoHorizontal)`
    margin-left: 32px;
`;
export const NavBar = styled(NavBarContainer)`
`;
export const AvatarIcon = styled(UserCircle)`
    width: 38px;
    height: 38px;
`;
