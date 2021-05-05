import styled from 'styled-components';
import { Container, Colors } from '../../../GlobalStyles'

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
        z-index:2000;
    }

    @media (max-width: 890px) {
        &{
            padding: 0;
        }

        p{
            position: absolute;
            top: 40px;
            left: 20px;
        }

        ul{
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1000;
            background-color: #000;
            margin: 0;
            padding: 0;
            height: 100vh;
            width: 100vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        a{
            font-size: 3rem;
            line-height: 6rem;
        }
    }
`

export const NavbarContainer = styled(Container)`
    position: relative;
    display:flex;
    justify-content: space-between;
    ${Container}
`

export const HamburgerBtn = styled.div`
    display: none;
    position: absolute;
    top: 40px;
    right: 40px;
    z-index: 300000;
    width: 50px;
    height:2px;
    background-color: ${Colors.primaryAccent};

    &::before{
        content: '';
        width: 50px;
        height:2px;
        background-color: ${Colors.primaryAccent};
        position: absolute;
        top: -15px;
    }

    &::after{
        content: '';
        width: 50px;
        height:2px;
        background-color: ${Colors.primaryAccent};
        position: absolute;
        top: 15px;
    }

    @media (max-width: 890px){
        & {
            display: initial;
        }
    }
`