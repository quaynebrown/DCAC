import styled from 'styled-components';
import { Container } from '../../../GlobalStyles'

export const Nav = styled.nav`
    padding: 10px 0;

    li{
        display: inline-block;
    }

    a{
        padding: 10px 15px;
        text-transform: uppercase;
        text-decoration: none;
        color: inherit;
    }

    .logo{
        align-self: center;
        padding-left: 15px;
    }
`

export const NavbarContainer = styled(Container)`
    display:flex;
    justify-content: space-between;
    ${Container}
`