import React from 'react'
import styled from 'styled-components'
import PageWrapper from 'common/PageWrapper'
import Card from 'common/Card'

const PartationGrid = styled.div`
  display: flex;
  flex-direction: column;
`

const ActionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 16px;
`

const Section = styled.div``

const HomePage = () => (
  <PageWrapper>
    <PartationGrid>
      <ActionWrapper>
        <Card />
        <Card />
      </ActionWrapper>
      <Section>Features</Section>
      <Section>Product</Section>
      <Section>Contact</Section>
      <Section>About</Section>
    </PartationGrid>
  </PageWrapper>
)

export default HomePage
