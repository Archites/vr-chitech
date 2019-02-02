import React from 'react'
import { hot } from 'react-hot-loader'
import { GlobalStyle } from 'styled'
import Router from 'Router'

const App = () => (
  <>
    <Router />
    <GlobalStyle />
  </>
)

export default hot(module)(App)
