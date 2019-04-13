import React from 'react'
import styled from 'styled-components'
import { FirebaseContext } from '../../common/Firebase'
import SignInGoogle from '../../common/LoginBase/SignInGoogleBase'

const Container = styled.div`
  transform: translate(-50%, -50%);
  position: fixed;
  width: 350px;
  height: 250px;
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

const Login = ({ handlePopup }) => (
  <Container>
    <Title>Account Login</Title>
    <FirebaseContext.Consumer>
      {firebase => (
        // <StyledFirebaseAuth
        //   uiConfig={firebase.doCreateUI()}
        //   firebaseAuth={firebase.auth}
        // />
        <SignInGoogle firebase={firebase} handlePopup={handlePopup} />
      )}
    </FirebaseContext.Consumer>
    <CloseBtn onClick={() => handlePopup(false)} />
  </Container>
)

export default Login
