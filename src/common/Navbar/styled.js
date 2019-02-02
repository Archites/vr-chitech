import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.div`
	align-items: center;
	display: flex;
	background-color: #fff;
	box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2);
	height: 58px;
	justify-content: space-between;
	padding: 11px 13px;
	position: fixed;
	width: 100%;
	z-index: 2;
`

export const ShadowNav = styled.div`
	height: 58px;
`

export const IconContainter = styled.div``

export const ContentContainer = styled.ul`
	width: 500px;
	align-items: center;
	display: grid;
	text-align: center
	grid-template-columns:  auto auto auto auto 136px;
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
`