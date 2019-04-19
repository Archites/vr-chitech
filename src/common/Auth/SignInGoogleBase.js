import React, { Component } from 'react'
import { withFirebase } from 'common/Firebase'
import { FormButtonContainer, SignInGoogle } from './base'

class SignInGoogleBase extends Component {
  onSubmit = event => {
    const { firebase, handlePopup } = this.props
    firebase.doSignInWithGoogle().then(socialAuthUser => {
      firebase.findOrCreateDatabase()
      handlePopup(false)
    })

    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <FormButtonContainer>
          <SignInGoogle type="submit">Sign In with Google</SignInGoogle>
        </FormButtonContainer>
      </form>
    )
  }
}

export default withFirebase(SignInGoogleBase)
