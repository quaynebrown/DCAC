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
    justify-content: space-around;

    h3{
        font-size: 5rem;
        color: #fff;
    }

    h4{
        margin:0;
    }

    article{
        padding: 20px;
        flex-basis: 24%;
        border: 1px solid lightgray;
        min-width: 254px;
        margin-bottom: 20px;
    }

    li, p{
        color: #BABABA;
    }
`