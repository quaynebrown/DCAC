import styled from 'styled-components';
import { Container } from '../../GlobalStyles';
import BgImage from '../../assets/header-bg.jpg'


export const HeaderArea = styled.header` 
    /* radial-gradient(circle, rgba(0,0,0,0.829551889115021) 5%, rgba(89,78,76,0) 60%), */
    background: url(${BgImage});
    background-size: cover;
    background-position: bottom center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    color: #fff;
    height: 100vh;
    padding: 20px 0 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2{
        font-size: 3rem;
        font-weight:200;
        color: #b89840;
        /* margin-top: 0px; */
        text-transform: capitalize;
    }
    @media (max-width: 890px){
        &{
            padding: 0;
        }
    }
`

export const HeaderContent = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0,0,0, 0.8);

    ${Container}
`

export const LearnMore = styled.div`
    display: flex;
    justify-content: center;

    a{
        color:#fff;
        font-weight:700;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        position: relative;

        &::before{
            content: '';
            border-bottom: 2px solid #b89840;
            width: 40px;
            position: absolute;
            top: 30px;
            left: calc(50% - 20px);
        }
    }
`