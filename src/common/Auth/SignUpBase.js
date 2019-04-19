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

class SignUpBase extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      rePassword: '',
    }
  }

  handleChange = event => {
    const { name } = event.target

    this.setState({
      [name]: event.target.value,
    })
  }

  onSubmit = event => {
    const { firebase } = this.props
    const { email, password, rePassword } = this.state

    if (password === rePassword) {
      firebase
        .doCreateUserWithEmailAndPassword(email, password)
        .then(authUser => {
          this.setState({
            email: '',
            password: '',
            rePassword: '',
          })
          alert('Account Created')
        })
        .catch(error => {
          alert(error)
        })
    } else {
      alert('Password and Re-pasword does not match')
    }

    event.preventDefault()
  }

  render() {
    const { email, password, rePassword } = this.state
    return (
      <Form onSubmit={this.onSubmit}>
        <FormFieldContainer>
          <FieldContainer>
            <Email
              placeholder="Your Email"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </FieldContainer>
          <FieldContainer>
            <Password
              placeholder="Your Password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </FieldContainer>
          <FieldContainer>
            <Password
              placeholder="Your Re-Password"
              type="password"
              name="rePassword"
              value={rePassword}
              onChange={this.handleChange}
            />
          </FieldContainer>
        </FormFieldContainer>
        <FormButtonContainer>
          <Submit type="submit">Sign Up</Submit>
        </FormButtonContainer>
      </Form>
    )
  }
}

export default withFirebase(SignUpBase)
