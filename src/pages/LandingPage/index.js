import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PageWrapper from 'common/PageWrapper'
import PageSection from 'common/PageSection'
import ExampleRoom from 'common/ExampleRoom'
import { withAuthentication } from 'common/Session'
import profile1 from 'images/profile1.jpg'
import profile2 from 'images/profile2.jpg'
import profile3 from 'images/profile3.jpg'

const PartationGrid = styled.div`
  display: flex;
  flex-direction: column;
`

const AddMargin = styled.div`
  margin-bottom: 16px;
`

const ProfileImg = styled.img`
  width: 180px;
  height: 180px;
  object-fit: contain;
`

const ImageCropper = styled.div`
  width: 180px;
  height: 180px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  margin-bottom: 16px;
`

const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`

const Profile = styled.div`
  margin: 16px 0;
`

class LandingPage extends PureComponent {
  componentDidMount() {
    document.documentElement.classList.remove('a-html')
    document.body.classList.remove('a-body')
    if (document.querySelector('a.toggle-edit') !== null) {
      const elem = document.querySelector('a.toggle-edit')
      elem.parentNode.removeChild(elem)
    }
  }

  renderFeatures = () => (
    <PageSection id="features">
      <h1>My features</h1>
      <div />
    </PageSection>
  )

  renderInstruction = () => (
    <PageSection id="instruction" title="How To Use">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining
      essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with
      desktop publishing software like Aldus PageMaker including versions of
      Lorem Ipsum.
    </PageSection>
  )

  renderAbout = () => (
    <PageSection id="about" title="About Us">
      <AboutWrapper>
        <Profile>
          <ImageCropper>
            <ProfileImg src={profile1} />
          </ImageCropper>
          <div>Patipol Wangjaitham</div>
          <div>5810545432</div>
        </Profile>
        <Profile>
          <ImageCropper>
            <ProfileImg src={profile2} />
          </ImageCropper>
          <div>Narongsak Chobsri</div>
          <div>5810545858</div>
        </Profile>
        <Profile>
          <ImageCropper>
            <ProfileImg src={profile3} />
          </ImageCropper>
          <div>Nutthapol Sinthaveelert</div>
          <div>5810546641</div>
        </Profile>
      </AboutWrapper>
    </PageSection>
  )

  render() {
    const { authUser } = this.props
    return (
      authUser !== false && (
        <>
          <PageWrapper {...this.props}>
            <PartationGrid>
              <PageSection title="Example Room">
                <ExampleRoom />
              </PageSection>
              <AddMargin />
              {this.renderFeatures()}
              {this.renderInstruction()}
              {this.renderAbout()}
            </PartationGrid>
          </PageWrapper>
        </>
      )
    )
  }
}

export default withAuthentication(LandingPage)
