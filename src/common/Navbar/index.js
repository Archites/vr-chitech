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
      <li>Features</li>
      <li>Product</li>
      <li>Contact</li>
      <li>About</li>
    </ContentContainer>
    <LinkButton to={paths.room_one}>
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
