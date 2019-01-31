import React from 'react'
import { paths } from 'common/constants'
import {
	Nav,
	ShadowNav,
	IconContainter,
	ContentContainer,
	StyledLink,
	LinkButton,
} from './styled'

const Navbar = () => (
	<>
		<Nav>
			<IconContainter>
				<span>ICON</span>
			</IconContainter>
			<ContentContainer>
				<span>PRODUCT</span>
				<LinkButton>
					<StyledLink to={paths.example}>Example Page</StyledLink>
				</LinkButton>
			</ContentContainer>
		</Nav>
		<ShadowNav />
	</>
)

export default Navbar
