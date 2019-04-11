import React, { Component } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { FirebaseContext } from '../../common/Firebase'

// eslint-disable-next-line react/prefer-stateless-function
export default class Login extends Component {
  render() {
    return (
      <div style={{ position: 'fixed', width: '100px', height: '100px' }}>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <FirebaseContext.Consumer>
          {firebase => (
            <StyledFirebaseAuth
              uiConfig={firebase.doCreateUI()}
              firebaseAuth={firebase.doAuth()}
            />
          )}
        </FirebaseContext.Consumer>
      </div>
    )
  }
}
