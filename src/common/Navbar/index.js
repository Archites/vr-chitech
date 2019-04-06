import React from 'react'
import { paths } from 'common/constants'
import OnlyDesktop from 'common/OnlyDesktop'
import OnlyMobile from 'common/OnlyMobile'
import {
  Nav,
  ShadowNav,
  IconContainter,
  ContentContainer,
  LinkText,
  LinkButton,
} from './styled'

const RenderDesktop = () => (
  <>
    <IconContainter>
      <span>ICON</span>
    </IconContainter>
    <ContentContainer>
      <li>HOME</li>
      <li>PRODUCT</li>
      <li>CONTACT</li>
      <li>ABOUT</li>
    </ContentContainer>
    <LinkButton to={paths.template}>
      <LinkText>Example Page</LinkText>
    </LinkButton>
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
