import React, { Component } from 'react'

import {
  Form,
  FormFieldContainer,
  FormButtonContainer,
  FieldContainer,
  Email,
  Password,
  Submit,
} from './base'

class SignInBase extends Component {
  onSubmit = event => {
    // const { firebase, handlePopup } = this.props
    // firebase.doSignInWithGoogle().then(socialAuthUser => {
    //   handlePopup(false)
    // })

    event.preventDefault()
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <FormFieldContainer>
          <FieldContainer>
            <Email placeholder="Your Email" type="email" />
          </FieldContainer>
          <FieldContainer>
            <Password placeholder="Your Password" type="password" />
          </FieldContainer>
        </FormFieldContainer>
        <FormButtonContainer>
          <Submit type="submit">Login</Submit>
        </FormButtonContainer>
      </Form>
    )
  }
}

export default SignInBase
