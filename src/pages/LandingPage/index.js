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

const HomePage = () => (
  <PageWrapper>
    <PartationGrid>
      <ActionWrapper>
        <Card />
        <Card />
      </ActionWrapper>
      <div>Features</div>
      <div>Product</div>
      <div>Contact</div>
      <div>About</div>
    </PartationGrid>
  </PageWrapper>
)

export default HomePage
