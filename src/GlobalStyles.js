import styled, { createGlobalStyle } from 'styled-components'

// default export 
const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    body{
        font-size: 1.8rem;
        font-family: 'Roboto', sans-serif;
    }

    p{
        font-weight:200;
        letter-spacing: 0.05rem;
        line-height: 3.5rem;
    }

    hgroup{
        text-align: center;
        display: flex;
        flex-direction: column;
        margin-bottom: 40px;
    }

    h1{
        text-transform: uppercase;
        letter-spacing: 1rem;
        margin-bottom: 0;
    }

    h2{
        font-family: 'Noto Serif', serif;
        font-size: 5rem;
        margin: 0 0 30px 0
    }

    h3{
        color: #b89840;
        order: -1;
        text-transform: uppercase;
        letter-spacing: 0.5rem;
        font-weight: 200;
        margin: 10px;
    }

    section{
        padding: 10rem 0;
    }
`

export const Container = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
`

export default GlobalStyle;