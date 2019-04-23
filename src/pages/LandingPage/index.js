import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PageWrapper from 'common/PageWrapper'
import PageSection from 'common/PageSection'
import ExampleRoom from 'common/ExampleRoom'
import OnlyDesktop from 'common/OnlyDesktop'
import { withAuthentication } from 'common/Session'
import profile1 from 'images/profile1.jpg'
import profile2 from 'images/profile2.jpg'
import profile3 from 'images/profile3.jpg'
import saveImage from 'images/save.png'
import roomImage from 'images/room.png'
import inspecImage from 'images/inspector.png'
// import saveIcon from 'images/save-file-option.svg'

const PartationGrid = styled.div`
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  @media (min-width: 1440px) {
    max-width: 1200px;
    margin: 0 auto !important;
  }
  @media (max-width: 576px) {
    margin: 0 8px;
  }
  @media (min-width: 577px) {
    margin: 0 60px;
  }
  @media (min-width: 1366px) {
    margin: 0 256px;
  }
`

const AddMargin = styled.div`
  margin-bottom: 36px;
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

const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
`

const BannerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (min-width: 1025px) {
    padding: 0 60px;
  }
`

const InspecImage = styled.img`
  height: 200px;
  width: 400px;
  object-fit: contain;
`

const RoomImage = styled.img`
  height: 300px;
  width: 450px;
  object-fit: contain;
`

const SaveImage = styled.img`
  height: 250px;
  width: 400px;
  object-fit: contain;
`

const TextContent = styled.div`
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 1px 1px 1px rgba(9, 45, 66, 0.25);
  color: #424242;
  width: 450px;
  max-height: 160px;
  border-radius: 3px;
  margin: 16px;
  padding: 24px;
  @media (max-width: 768px) {
    order: 1;
    width: 100%;
  }
`

const Color = styled.div`
  background-color: #f5f5f5;
`

const LinkMyRoom = styled(Link)`
  text-decoration: none;
  background-color: #63372c;
  border-radius: 50%;
  color: #fafffd;
  width: 64px;
  height: 64px;
  position: fixed;
  right: 24px;
  bottom: 24px;
  text-align: center;
  padding: 16px;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }
`

const IconSizing = styled.i`
  font-size: 32px;
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
    <PageSection id="features" title="Features">
      <Banner>
        <Wrapper>
          <BannerContainer>
            <InspecImage src={inspecImage} />
            <TextContent>
              VR-chitech is a website application with virtual reality function
              combine with the powerful tool that is inspector mode help user to
              freedom design their own dream room with only one laptop and no
              need other program to install.
            </TextContent>
          </BannerContainer>
        </Wrapper>
      </Banner>
      <Banner>
        <Wrapper>
          <BannerContainer>
            <TextContent>
              In website application users can create, design, and save many
              room as users want. Each room is independent from each other so
              users don’t have to concern anything and design with everything
              user have.
            </TextContent>
            <SaveImage src={saveImage} />
          </BannerContainer>
        </Wrapper>
      </Banner>
      <Banner>
        <Wrapper>
          <BannerContainer>
            <RoomImage src={roomImage} />
            <TextContent>
              After finish design. User can preview with virtual reality
              function to look into the virtual world with only user’s phone and
              cardboard.
            </TextContent>
          </BannerContainer>
        </Wrapper>
      </Banner>
    </PageSection>
  )

  renderAbout = () => (
    <div
      style={{
        backgroundColor: 'rgba(247, 125, 9, 0.7)',
        color: 'white',
        paddingBottom: '40px',
      }}
    >
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
    </div>
  )

  render() {
    const { authUser } = this.props
    return (
      authUser !== false && (
        <>
          <PageWrapper {...this.props}>
            <PartationGrid>
              <Color>
                <Wrapper>
                  <PageSection title="Example Rooms">
                    <ExampleRoom />
                  </PageSection>
                  <AddMargin />
                </Wrapper>
              </Color>
              {this.renderFeatures()}
              {this.renderAbout()}
            </PartationGrid>
          </PageWrapper>
          {authUser !== null ? (
            <OnlyDesktop>
              <LinkMyRoom to="/save">
                <IconSizing className="far fa-save" />
              </LinkMyRoom>
            </OnlyDesktop>
          ) : (
            ''
          )}
        </>
      )
    )
  }
}

export default withAuthentication(LandingPage)
