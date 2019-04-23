import React from 'react'
import Navbar from 'common/Navbar'
import styled from 'styled-components'

const ContentWrapper = styled.div`
  @media (max-width: 576px) {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
`

const PageWrapper = ({ children, ...props }) => (
  <ContentWrapper>
    <Navbar {...props} />
    {children}
  </ContentWrapper>
)

export default PageWrapper
