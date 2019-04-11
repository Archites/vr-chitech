import React from 'react'
import Navbar from 'common/Navbar'
import Footer from 'common/Footer'

const PageWrapper = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
)

export default PageWrapper
