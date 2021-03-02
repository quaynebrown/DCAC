import styled, { createGlobalStyle } from 'styled-components'

// default export 
const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    body{
        font-size: 1.6rem;
        font-family: 'Roboto', sans-serif;
    }
`

export const Container = styled.div`
    width: 90%;
    max-width: 1280px;
    margin: 0 auto;
`

export default GlobalStyle;