import styled from 'styled-components';
import { Container } from '../../GlobalStyles';


export const FooterElement = styled.footer`
    border-top: 1px solid lightgray;
    padding: 20px 0;
`

export const FooterWrapper = styled(Container)`
    ${Container};

    p{
        text-transform: capitalize;
    }
`