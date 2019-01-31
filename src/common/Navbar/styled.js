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

export const IconContainter = styled.div`
	width: 100%;
`

export const ContentContainer = styled.div`
	width: 100%;
	text-align: center;
	display: grid;
	align-items: center;
	grid-template-columns: auto 136px;
`

export const StyledLink = styled(Link)`
	color: #fff;
	text-decoration: none;
	text-transform: uppercase;
	font-size: 13px;
	line-height: 36px;
`

export const LinkButton = styled.div`
	border-radius: 2px;
	border-style: none;
	box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24);
	transition: 0.3s ease;
	background: #534dc8;
	height: 36px;
`
