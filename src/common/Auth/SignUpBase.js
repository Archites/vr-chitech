import React, { Component } from 'react'
import styled from 'styled-components'

const Email = styled.input`
  display: block;
`

const Password = styled.input`
  display: block;
`

const Submit = styled.button``

class SignUpBase extends Component {
  onSubmit = event => {
    // const { firebase, handlePopup } = this.props
    // firebase.doSignInWithGoogle().then(socialAuthUser => {
    //   handlePopup(false)
    // })

    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <Email placeholder="Your Email Address" type="email" name="email" />
        <Password placeholder="Your Password" type="password" name="password" />
        <Password
          placeholder="Re-Password"
          type="re-password"
          name="re-password"
        />
        <Submit type="submit">Sign up</Submit>
      </form>
    )
  }
}

export default SignUpBase
