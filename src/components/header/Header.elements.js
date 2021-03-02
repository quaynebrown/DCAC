import styled from 'styled-components';
import { Container } from '../../GlobalStyles'
import HeaderImage from '../../assets/patrik-gothe-unsplash.jpg'

export const HeaderArea = styled.header`
    background-image: url(${HeaderImage});
    background-size: cover;
    background-position: center center;
    color: #fff;
    text-shadow: 2px 1px #333;
    height: 100vh;
    padding-bottom: 50px ;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const HeaderContent = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${Container}
`

export const LearnMore = styled.div`
    display: flex;
    justify-content: center;

    a{
        color:#fff;
        font-weight:700;
        text-decoration: none;
        position: relative;

        &::before{
            content: '';
            border-bottom: 2px solid green;
            width: 30px;
            position: absolute;
            top: 25px;
            left: calc(50% - 15px);
        }
    }
`