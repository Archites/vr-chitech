import React from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll'

const Wrapper = styled(Element)`
  text-align: center;
`

const Title = styled.h2``

const PageSection = ({ id, title, children }) => (
  <Wrapper id={id}>
    <Title>{title}</Title>
    {children}
  </Wrapper>
)

export default PageSection
