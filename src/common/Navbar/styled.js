import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Link as ScrollTo } from 'react-scroll'

export const Nav = styled.div`
  align-items: center;
  display: flex;
  background-color: #fff;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2);
  height: 64px;
  justify-content: space-between;
  padding: 11px 13px;
  position: fixed;
  width: 100%;
  z-index: 10000;
`

export const ShadowNav = styled.div`
  height: 64px;
`

export const IconContainter = styled.div``

export const ContentContainer = styled.ul`
  width: 450px;
  align-items: center;
  display: grid;
  text-align: center;
  justify-content: center;
  grid-template-columns: repeat(5, 1fr);
  list-style-type: none;
`

export const LinkText = styled.span`
  color: #fff;
  text-transform: uppercase;
  line-height: 36px;
`

export const LinkButton = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  border-radius: 2px;
  border-style: none;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24);
  transition: 0.3s ease;
  background: #534dc8;
  height: 36px;
  width: 124px;
  text-align: center;
`

export const StyledAuth = styled.span`
  cursor: pointer;
  color: #000;
  @media (min-width: 577px) {
    margin: 0 8px;
  }
`

export const StyledLink = styled(ScrollTo)`
  cursor: pointer;
`

export const Logo = styled.img`
  margin-top: 5px;
  width: 70px;
  height: 70px;
`

export const LinkMyRoom = styled(Link)`
  text-decoration: none;
  color: #000;
`

export const Column = styled.div`
  width: 100%;
  padding: 0 16px;
  height: 40px;
  display: flex !important;
  align-items: center;
  border: 1px solid #eee;
`
