import React from 'react'
import Navbar from 'common/Navbar'
import Footer from 'common/Footer'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 0 8px;
`

const PageWrapper = ({ children, ...props }) => (
  <>
    <Navbar {...props} />
    <Wrapper>{children}</Wrapper>
    <Footer />
  </>
)

export default PageWrapper
