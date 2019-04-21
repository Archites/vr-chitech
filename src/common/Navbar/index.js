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
            {authUser !== null ? (
              <LinkMyRoom to="/save">My room</LinkMyRoom>
            ) : (
              ''
            )}
          </ContentContainer>
        )}
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
          <Link to={paths.landing} onClick={() => this.closeMenu()}>
            <span>Home</span>
          </Link>
          {authUser !== null ? <Link to="/save">My room</Link> : ''}
          {authUser === null ? (
            <StyledAuth onClick={() => this.handlePopup(true)}>
              Log in
            </StyledAuth>
          ) : (
            <SignOutButton {...this.props} />
          )}
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
