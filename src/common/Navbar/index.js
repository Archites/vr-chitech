import React, { Component } from 'react'
import OnlyDesktop from 'common/OnlyDesktop'
import OnlyMobile from 'common/OnlyMobile'
import Login from '../../pages/LoginPage'
import { FirebaseContext } from '../Firebase'

import {
  Nav,
  ShadowNav,
  IconContainter,
  ContentContainer,
  StyledAuth,
  StyledLink,
} from './styled'

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

  handleSignOut = auth => {
    auth.signOut().then(() => this.handlePopup(false))
  }

  RenderDesktop = () => (
    <>
      <IconContainter>
        <span>ICON</span>
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
      </ContentContainer>
      <div>
        <FirebaseContext.Consumer>
          {firebase =>
            firebase.auth.currentUser === null ? (
              <StyledAuth onClick={() => this.handlePopup(true)}>
                Log in
              </StyledAuth>
            ) : (
              <StyledAuth onClick={() => this.handleSignOut(firebase.auth)}>
                Log out
              </StyledAuth>
            )
          }
        </FirebaseContext.Consumer>
      </div>
    </>
  )

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
