import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background: #fff;
    font-size: 14px;
    width: 100%;
    height: 100%;
    font-family: 'PT Sans', sans-serif;
  }
  
  *, :after, :before {
    box-sizing: border-box;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`
