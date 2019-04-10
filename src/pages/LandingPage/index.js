import React, { PureComponent } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import PageWrapper from 'common/PageWrapper'
import PageSection from 'common/PageSection'
import SaveSlots from 'common/SaveSlots'

const PartationGrid = styled.div`
  display: flex;
  flex-direction: column;
`

const GlobalStyle = createGlobalStyle`
  #np {
    display: none !important;
  }
`

class LandingPage extends PureComponent {
  componentDidMount() {
    document.documentElement.classList.remove('a-html')
    document.body.classList.remove('a-body')
  }

  render() {
    return (
      <>
        <PageWrapper>
          <PartationGrid>
            <PageSection title="Save Slots">
              <SaveSlots />
            </PageSection>
            <PageSection id="features" title="Features">
              asd
            </PageSection>
            <PageSection id="product" title="Product">
              sfef
            </PageSection>
            <PageSection id="contact" title="Contact">
              fsefsef
            </PageSection>
            <PageSection id="about" title="About">
              About
            </PageSection>
          </PartationGrid>
        </PageWrapper>
        <GlobalStyle />
      </>
    )
  }
}

export default LandingPage
