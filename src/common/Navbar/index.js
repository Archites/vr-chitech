import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import OnlyDesktop from 'common/OnlyDesktop'
import OnlyMobile from 'common/OnlyMobile'
import { Link } from 'react-router-dom'
import { withFirebase } from 'common/Firebase'
import { paths } from 'common/constants'
import Login from 'pages/LoginPage'
import logo from 'images/logo.png'
import styles from './styles'

import {
  Nav,
  ShadowNav,
  IconContainter,
  ContentContainer,
  StyledAuth,
  StyledLink,
  Logo,
  LinkMyRoom,
  MobileAuth,
  BurgerLink,
  Icon,
} from './styled'

const SignOutComponent = ({ firebase, ...props }) => {
  const { history } = props
  return (
    <StyledAuth onClick={() => firebase.doSignOut(history)}>Log out</StyledAuth>
  )
}

const MobileSignOutComponent = ({ firebase, ...props }) => {
  const { history } = props
  return (
    <MobileAuth onClick={() => firebase.doSignOut(history)}>
      <Icon className="fas fa-sign-out-alt" />
      Log out
    </MobileAuth>
  )
}

const SignOutButton = withFirebase(SignOutComponent)
const MobileSignOutButton = withFirebase(MobileSignOutComponent)

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpenLogin: false,
      menuOpen: false,
    }
  }

  handlePopup = status => {
    this.setState({
      isOpenLogin: status,
    })
  }

  RenderDesktop = () => {
    const { authUser, location } = this.props
    return (
      <>
        <IconContainter>
          <Link to={paths.landing}>
            <Logo src={logo} />
          </Link>
        </IconContainter>
        {location.pathname === paths.landing && (
          <ContentContainer>
            <StyledLink to="features" spy smooth offset={-64} duration={500}>
              Features
            </StyledLink>
            <StyledLink to="about" spy smooth offset={-64} duration={500}>
              About Us
            </StyledLink>
            {authUser !== null ? (
              <LinkMyRoom to="/save">My room</LinkMyRoom>
            ) : (
              ''
            )}
          </ContentContainer>
        )}
        <div>
          {authUser === null && location.pathname === paths.landing ? (
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

  RenderMobile = () => {
    const { authUser } = this.props
    const { menuOpen } = this.state
    return (
      <>
        <IconContainter>
          <Logo src={logo} />
        </IconContainter>
        <Menu
          right
          disableAutoFocus
          noOverlay={false}
          styles={styles}
          isOpen={menuOpen}
          pageWrapId="page-wrap"
          onStateChange={state => this.handleStateChange(state)}
        >
          <div>
            <BurgerLink to={paths.landing} onClick={() => this.closeMenu()}>
              <Icon className="fas fa-home" />
              Home
            </BurgerLink>
            {authUser !== null ? (
              <BurgerLink to="/save" onClick={() => this.closeMenu()}>
                <Icon className="fas fa-person-booth" />
                My room
              </BurgerLink>
            ) : (
              ''
            )}
          </div>
          <div>
            {authUser === null ? (
              <MobileAuth
                onClick={() => {
                  this.closeMenu()
                  this.handlePopup(true)
                }}
              >
                <Icon className="fas fa-sign-in-alt" />
                Log in
              </MobileAuth>
            ) : (
              <MobileSignOutButton {...this.props} />
            )}
          </div>
        </Menu>
      </>
    )
  }

  handleStateChange = state => {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu = () => {
    this.setState({ menuOpen: false })
  }

  toggleMenu = () => {
    const { menuOpen } = this.state
    this.setState({ menuOpen: !menuOpen })
  }

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
