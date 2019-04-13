import React, { Component } from 'react'

class SignInGoogleBase extends Component {
  onSubmit = event => {
    const { firebase, handlePopup } = this.props
    firebase.doSignInWithGoogle().then(socialAuthUser => {
      handlePopup(false)
    })

    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <button type="submit">Sign In with Google</button>
      </form>
    )
  }
}

export default SignInGoogleBase
