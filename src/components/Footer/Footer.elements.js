import styled from 'styled-components';
import { Container } from '../../GlobalStyles';


export const FooterElement = styled.footer`
    border-top: 1px solid lightgray;
    padding: 0;
`

export const FooterWrapper = styled(Container)`
    ${Container};
    display: flex;
    justify-content: space-between;

    p{
        text-transform: capitalize;
        font-size: 1.2rem;
        padding: 0;
    }
`