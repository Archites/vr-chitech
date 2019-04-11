import React from 'react'
import OnlyDesktop from 'common/OnlyDesktop'
import OnlyMobile from 'common/OnlyMobile'
import {
  Nav,
  ShadowNav,
  IconContainter,
  ContentContainer,
  StyledAuth,
  StyledLink,
} from './styled'

const RenderDesktop = () => (
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
