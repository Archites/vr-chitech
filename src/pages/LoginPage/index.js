import React, { Component } from 'react'
import styled from 'styled-components'
import SignInGoogle from '../../common/Auth/SignInGoogleBase'
import SignInFacebook from '../../common/Auth/SignInFacebookBase'
import SignIn from '../../common/Auth/SignInBase'
import SignUp from '../../common/Auth/SignUpBase'

const ContainerWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.4);
`

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const Body = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 450px;
  background-color: #fff;
  left: 50%;
  top: 50%;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.4);
`
const CloseBtnWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;

  &:hover a {
    opacity: 1;
  }
`

const CloseBtn = styled.a`
  width: 10px;
  height: 10px;
  opacity: 0.3;

  &:before,
  &:after {
    position: absolute;
    left: 8px;
    content: ' ';
    height: 20px;
    width: 2px;
    background-color: #333;
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
      <ContainerWrapper>
        <Container>
          <Body>
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
            <CloseBtnWrapper onClick={() => funcHandle(false)} type="button">
              <CloseBtn />
            </CloseBtnWrapper>
          </Body>
        </Container>
      </ContainerWrapper>
    )
  }
}

export default Login
