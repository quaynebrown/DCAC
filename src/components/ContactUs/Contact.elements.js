import styled from 'styled-components';
import { Container } from '../../GlobalStyles';



export const ContactWrapper = styled(Container)`
    ${Container};
`

export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    
    div:first-child{
        display: flex;
        flex-direction: column;
    }

    div{
        flex: 1;
    }

    input{
        margin-bottom: 20px;
    }

    textarea{
        resize: none;
        width: 100%;
        min-height: 164px;
    }

    input, textarea{
        border: 1px solid lightgray;
        padding: 10px;
        border-radius: 4px;
    }
`