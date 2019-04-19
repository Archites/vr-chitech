import React, { Component } from 'react'
import { withFirebase } from 'common/Firebase'
import { FormButtonContainer, SignInFacebook } from './base'

class SignInFacebookBase extends Component {
  onSubmit = event => {
    const { firebase, handlePopup } = this.props
    firebase.doSignInWithFacebook().then(socialAuthUser => {
      firebase.findOrCreateDatabase()
      handlePopup(false)
    })

    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <FormButtonContainer>
          <SignInFacebook type="submit">Sign In with Facebook</SignInFacebook>
        </FormButtonContainer>
      </form>
    )
  }
}

export default withFirebase(SignInFacebookBase)
