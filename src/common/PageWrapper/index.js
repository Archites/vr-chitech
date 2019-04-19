import React from 'react'
import Navbar from 'common/Navbar'
import Footer from 'common/Footer'

const PageWrapper = ({ children, ...props }) => (
  <>
    <Navbar {...props} />
    {children}
    <Footer />
  </>
)

export default PageWrapper
