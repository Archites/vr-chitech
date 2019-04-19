import React, { Component } from 'react'
import styled from 'styled-components'
import SignInGoogle from '../../common/Auth/SignInGoogleBase'
import SignInFacebook from '../../common/Auth/SignInFacebookBase'
import SignIn from '../../common/Auth/SignInBase'
import SignUp from '../../common/Auth/SignUpBase'

const Container = styled.div`
  transform: translate(-50%, -50%);
  position: fixed;
  width: 350px;
  height: 450px;
  background-color: #fff;
  left: 50%;
  top: 50%;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.4);
`
const CloseBtn = styled.a`
  position: absolute;
  right: 25px;
  top: 10px;
  width: 10px;
  height: 10px;
  opacity: 0.3;

  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 20px;
    width: 2px;
    background-color: #333;
  }

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`

const Title = styled.h1`
  color: #333;
`

const CreateBtnWarpper = styled.div`
  text-align: right;
  margin-top: 5px;
`

const CreateBtn = styled.a`
  padding: 0 20px;
  color: -webkit-link;
  text-decoration: underline;
  cursor: pointer;
`

const BackBtnWarpper = styled.div`
  text-align: left;
  margin-top: 5px;
`

const BackBtn = styled.a`
  padding: 0 20px;
  color: -webkit-link;
  text-decoration: underline;
  cursor: pointer;
`

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: 'signin',
    }
  }

  handlePage = status => {
    this.setState({
      status: status,
    })
  }

  backToMain = status => {
    const { history } = this.props
    history.push('/')
  }

  render() {
    const { location, handlePopup } = this.props
    let funcHandle
    if (location) {
      funcHandle = this.backToMain
    } else {
      funcHandle = handlePopup
    }
    const { status } = this.state

    return (
      <Container>
        <Title>Account Login</Title>
        {status === 'signin' ? (
          <>
            <SignIn handlePopup={funcHandle} />
            <h3>Or</h3>
            <SignInGoogle handlePopup={funcHandle} />
            <SignInFacebook handlePopup={funcHandle} />
            <CreateBtnWarpper>
              <CreateBtn onClick={() => this.handlePage('signup')}>
                Create Account
              </CreateBtn>
            </CreateBtnWarpper>
          </>
        ) : (
          <>
            <SignUp />
            <BackBtnWarpper>
              <BackBtn onClick={() => this.handlePage('signin')}>
                Back To Login
              </BackBtn>
            </BackBtnWarpper>
          </>
        )}
        <CloseBtn onClick={() => funcHandle(false)} />
      </Container>
    )
  }
}

export default Login
