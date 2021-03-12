import styled from 'styled-components';
import { Container } from '../../GlobalStyles';


export const TutoringSection = styled.section`
    background-color: #232221;

    h2{
        color: #fff;
    }
`

export const TutoringWrapper= styled(Container)`
    ${Container}
`

export const TutoringContent = styled.div`
    color: #fff;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;

    article{
        padding: 0 20px;
        flex-basis: 50%;
        border: 1px solid lightgray;
    }
`