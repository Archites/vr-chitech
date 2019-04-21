import React from 'react'
import Navbar from 'common/Navbar'
import Footer from 'common/Footer'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 0 8px;
`

const ContentWrapper = styled.div`
  @media (max-width: 576px) {
    height: 100%;
    overflow: auto;
  }
`

const PageWrapper = ({ children, ...props }) => (
  <ContentWrapper>
    <Navbar {...props} />
    <Wrapper>{children}</Wrapper>
    <Footer />
  </ContentWrapper>
)

export default PageWrapper
