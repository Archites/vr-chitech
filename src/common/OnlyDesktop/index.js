import React from 'react'
import MediaQuery from 'react-responsive'

const OnlyDesktop = ({ children }) => (
  <MediaQuery minWidth={769}>{children}</MediaQuery>
)

export default OnlyDesktop
