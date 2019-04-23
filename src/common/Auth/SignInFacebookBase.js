import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { withFirebase } from 'common/Firebase'
import { FormButtonContainer, SignInFacebook } from './base'

class SignInFacebookBase extends Component {
  onSubmit = event => {
    const { firebase, handlePopup, history } = this.props
    firebase.doSignInWithFacebook().then(socialAuthUser => {
      firebase.findOrCreateDatabase()
      handlePopup(false)
      history.push('/save')
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

export default compose(
  withFirebase,
  withRouter,
)(SignInFacebookBase)
