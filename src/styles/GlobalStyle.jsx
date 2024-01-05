import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif, 'Roboto';
  }
  body {
    min-height: 100vh;
    background-color: #0A0A10;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
`

export default GlobalStyle