import styled from 'styled-components';
import { Container } from '../../../GlobalStyles'

export const Nav = styled.nav`
    padding: 10px 0;

    li{
        display: inline-block;
    }

    a{
        padding: 10px 20px;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 0.2rem;
        color: inherit;
        font-size: 1.4rem;
    }

    .logo{
        align-self: center;
        padding-left: 15px;
        font-weight: 700;
        font-size: 2.5rem;
        margin: 0;
    }
`

export const NavbarContainer = styled(Container)`
    display:flex;
    justify-content: space-between;
    ${Container}
`