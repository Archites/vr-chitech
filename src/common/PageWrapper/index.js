import React from 'react'
import Navbar from 'common/Navbar'

const PageWrapper = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
)

export default PageWrapper
