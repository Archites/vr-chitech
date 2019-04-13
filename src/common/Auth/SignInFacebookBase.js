import React, { Component } from 'react'
import { FormButtonContainer, SignInFacebook } from './base'

class SignInFacebookBase extends Component {
  onSubmit = event => {
    const { firebase, handlePopup } = this.props
    firebase.doSignInWithFacebook().then(socialAuthUser => {
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

export default SignInFacebookBase
