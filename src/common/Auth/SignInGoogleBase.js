import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { withFirebase } from 'common/Firebase'
import { FormButtonContainer, SignInGoogle } from './base'

class SignInGoogleBase extends Component {
  onSubmit = event => {
    const { firebase, handlePopup, history } = this.props
    firebase.doSignInWithGoogle().then(socialAuthUser => {
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
          <SignInGoogle type="submit">Sign In with Google</SignInGoogle>
        </FormButtonContainer>
      </form>
    )
  }
}

export default compose(
  withFirebase,
  withRouter,
)(SignInGoogleBase)
