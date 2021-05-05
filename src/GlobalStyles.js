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

    a{
        color:inherit;
        text-decoration: none;

        &:hover,
        &:active{
            color: #b89840;
        }
    }

    hgroup{
        text-align: center;
        display: flex;
        flex-direction: column;
        margin-bottom: 40px;
    }

    h1{
        text-transform: uppercase;
        letter-spacing: 0.5rem;
        text-shadow: 2px 2px black;
        /* margin-bottom: 0; */
    }

    h2{
        font-family: 'Noto Serif', serif;
        font-size: 5rem;
        text-transform: capitalize;
        margin: 0 0 30px 0;
    }

    h3{
        order: -1;
        
        font-weight: 200;
        margin: 10px;
    }

    h3, h4{
        color: #b89840;
        text-transform: uppercase;
        letter-spacing: 0.5rem;
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

export const Colors = {
    primaryAccent: '#b89840'
}

export default GlobalStyle;