import React from 'react'
import { Link } from 'react-scroll'
import OnlyDesktop from 'common/OnlyDesktop'
import OnlyMobile from 'common/OnlyMobile'
import {
  Nav,
  ShadowNav,
  IconContainter,
  ContentContainer,
  StyledAuth,
} from './styled'

const RenderDesktop = () => (
  <>
    <IconContainter>
      <span>ICON</span>
    </IconContainter>
    <ContentContainer>
      <Link to="features" spy smooth offset={50} duration={500}>
        Features
      </Link>
      <Link to="product" spy smooth offset={50} duration={500}>
        Product
      </Link>
      <Link to="contact" spy smooth offset={50} duration={500}>
        Contact
      </Link>
      <Link to="about" spy smooth offset={50} duration={500}>
        About
      </Link>
    </ContentContainer>
    <div>
      <StyledAuth>Log in</StyledAuth>
    </div>
  </>
)

const RenderMobile = () => (
  <>
    <IconContainter>
      <span>ICON</span>
    </IconContainter>
    <ContentContainer />
  </>
)

const Navbar = () => (
  <>
    <Nav>
      <OnlyDesktop>{RenderDesktop()}</OnlyDesktop>
      <OnlyMobile>{RenderMobile()}</OnlyMobile>
    </Nav>
    <ShadowNav />
  </>
)

export default Navbar
