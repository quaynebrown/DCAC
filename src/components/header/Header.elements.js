import styled from 'styled-components';
import { Container } from '../../GlobalStyles';


export const HeaderArea = styled.header`
    background-color: #100804;
    color: #fff;
    height: 100vh;
    padding: 20px 0 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2{
        font-size: 12rem;
        font-weight:200;
        color: #b89840;
        margin-top: 0px;
        text-transform: capitalize;
    }
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