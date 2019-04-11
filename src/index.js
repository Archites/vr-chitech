import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import App from 'App'
import Firebase, { FirebaseContext } from './common/Firebase'

ReactDOM.render(
  <BrowserRouter>
    <AppContainer>
      <FirebaseContext.Provider value={new Firebase()}>
        <App />
      </FirebaseContext.Provider>
    </AppContainer>
  </BrowserRouter>,
  document.getElementById('root'),
)
