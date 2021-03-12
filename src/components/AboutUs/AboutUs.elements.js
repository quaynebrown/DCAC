import styled from 'styled-components';
import { Container } from "../../GlobalStyles";

// export const AboutSection = styled.section`
//     padding: 10rem 0;
// `

export const AboutWrapper = styled(Container)`
    ${Container};
`

export const AboutContent = styled.article`
    display: flex;
    margin-bottom: 50px;

    p, figure{
        flex: 1;
    }

    figure{
        margin-right: 30px;
    }
    
    img{
        width: 100%;
    }
`