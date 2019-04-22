import React from 'react'
import Navbar from 'common/Navbar'
import Footer from 'common/Footer'
import styled from 'styled-components'

const Wrapper = styled.div`
  @media (max-width: 576px) {
    margin: 0 8px;
  }
  @media (min-width: 577px) {
    margin: 0 96px;
  }
  @media (min-width: 1366px) {
    margin: 0 256px;
  }
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
