import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif, 'Roboto';
  }
  body {
    background-color: #0A0A10;
    color: #fff;
  }
`

export default GlobalStyle