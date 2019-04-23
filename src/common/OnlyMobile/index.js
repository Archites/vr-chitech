import React from 'react'
import MediaQuery from 'react-responsive'

const OnlyMobile = ({ children }) => (
  <MediaQuery maxWidth={768}>{children}</MediaQuery>
)

export default OnlyMobile
