import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background: #fff;
    font-size: 13px;
    width: 100%;
    height: 100%;
  }
  
  *, :after, :before {
    box-sizing: border-box;
  }
`
