import React, { Component } from 'react'
import { withFirebase } from 'common/Firebase'

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
    const { firebase, handlePopup } = this.props
    const email = event.target.email.value
    const password = event.target.password.value

    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        handlePopup(false)
      })
      .catch(error => {
        alert(error)
      })

    event.preventDefault()
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <FormFieldContainer>
          <FieldContainer>
            <Email placeholder="Your Email" type="email" name="email" />
          </FieldContainer>
          <FieldContainer>
            <Password
              placeholder="Your Password"
              type="password"
              name="password"
            />
          </FieldContainer>
        </FormFieldContainer>
        <FormButtonContainer>
          <Submit type="submit">Login</Submit>
        </FormButtonContainer>
      </Form>
    )
  }
}

export default withFirebase(SignInBase)
