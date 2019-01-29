import React, { PureComponent } from 'react'
import { paths } from 'common/constants'
import PageWrapper from 'common/PageWrapper'
import { StyledLink } from './styled'

class HomePage extends PureComponent {
	test = ''

	render() {
		return (
			<PageWrapper>
				<StyledLink to={paths.example}>Example Page</StyledLink>
			</PageWrapper>
		)
	}
}

export default HomePage
