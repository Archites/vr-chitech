import React, { Component } from 'react'
import OnlyDesktop from 'common/OnlyDesktop'
import OnlyMobile from 'common/OnlyMobile'
import { Link } from 'react-router-dom'
// import { withAuthentication } from 'common/Session'
import { withFirebase } from 'common/Firebase'
import Login from '../../pages/LoginPage'

import {
  Nav,
  ShadowNav,
  IconContainter,
  ContentContainer,
  StyledAuth,
  StyledLink,
} from './styled'

const SignOutComponent = ({ firebase, ...props }) => {
  const { history } = props
  return (
    <StyledAuth onClick={() => firebase.doSignOut(history)}>Log out</StyledAuth>
  )
}

const SignOutButton = withFirebase(SignOutComponent)

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpenLogin: false,
    }
  }

  handlePopup = status => {
    this.setState({
      isOpenLogin: status,
    })
  }

  RenderDesktop = () => {
    const { authUser } = this.props
    return (
      <>
        <IconContainter>
          <Link to="/">
            <span>ICON</span>
          </Link>
        </IconContainter>
        <ContentContainer>
          <StyledLink to="features" spy smooth offset={50} duration={500}>
            Features
          </StyledLink>
          <StyledLink to="product" spy smooth offset={50} duration={500}>
            Product
          </StyledLink>
          <StyledLink to="contact" spy smooth offset={50} duration={500}>
            Contact
          </StyledLink>
          <StyledLink to="about" spy smooth offset={50} duration={500}>
            About
          </StyledLink>
          {authUser !== null ? <Link to="/save">My room</Link> : ''}
        </ContentContainer>
        <div>
          {authUser === null ? (
            <StyledAuth onClick={() => this.handlePopup(true)}>
              Log in
            </StyledAuth>
          ) : (
            <SignOutButton {...this.props} />
          )}
        </div>
      </>
    )
  }

  RenderMobile = () => (
    <>
      <IconContainter>
        <span>ICON</span>
      </IconContainter>
      <ContentContainer />
    </>
  )

  render() {
    const { isOpenLogin } = this.state
    return (
      <>
        <Nav>
          <OnlyDesktop>{this.RenderDesktop()}</OnlyDesktop>
          <OnlyMobile>{this.RenderMobile()}</OnlyMobile>
        </Nav>
        <ShadowNav />
        {isOpenLogin && <Login handlePopup={this.handlePopup} />}
      </>
    )
  }
}
export default Navbar
