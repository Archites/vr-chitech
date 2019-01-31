import React from 'react'
import MediaQuery from 'react-responsive'

const OnlyMobile = ({ children }) => (
	<MediaQuery maxWidth={576}>{children}</MediaQuery>
)

export default OnlyMobile
