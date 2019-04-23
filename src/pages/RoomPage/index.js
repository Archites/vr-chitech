import React, { Component, createRef } from 'react'
import styled from 'styled-components'
import { Entity, Scene } from 'aframe-react'
import Loader from 'react-loader-spinner'
import JSSoup from 'jssoup'
import OnlyDesktop from 'common/OnlyDesktop'
import { withAuthorization } from 'common/Session'
import { paths } from 'common/constants'

const Inspector = styled.a`
  color: #fafafa;
  width: 204px;
  background-color: #92374d;
  z-index: 2;
  position: fixed;
  text-decoration: none;
  text-align: center;
  padding: 6px 10px;
  top: 3px;
  left: 3px;
  font-size: 15px;
`

const HomeBtn = styled.a`
  color: #fafafa;
  width: 204px;
  background-color: #92374d;
  z-index: 2;
  position: fixed;
  text-decoration: none;
  text-align: center;
  padding: 6px 10px;
  top: 3px;
  right: 3px;
  font-size: 15px;
`

const LoadingWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

const LoadingContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const LoadinBody = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  left: 50%;
  top: 50%;
  text-align: center;
`

class RoomPage extends Component {
  mainCamera = createRef()

  getComponents = value => {
    if (value === undefined) return []
    const soup = new JSSoup(value)
    const arr = []
    soup.contents.forEach((element, index) => {
      arr.push(React.createElement(Entity, { key: index, ...element.attrs }))
    })
    return arr
  }

  hiddenInspector = () => {
    const x = document.getElementById('inspector')
    x.style.display = 'none'
  }

  render() {
    const { element } = this.props

    return (
      <>
        {element !== false ? (
          <Scene>
            <OnlyDesktop>
              <Inspector
                id="inspector"
                onClick={this.hiddenInspector}
                href="javascript:window.postMessage('INJECT_AFRAME_INSPECTOR','*')"
              >
                Inspect Scene
              </Inspector>
            </OnlyDesktop>
            <HomeBtn href={paths.save}>Back to home</HomeBtn>
            <Entity id="rig" movement-controls>
              <Entity
                camera
                id="camera"
                position="0 1 4"
                wasd-controls
                touch-controls
                look-controls
              />
            </Entity>
            <Entity primitive="a-sky" color="#EDF2F4" />
            <Entity io3d-lighting />
            {this.getComponents(element)}
          </Scene>
        ) : (
          <LoadingWrapper>
            <LoadingContainer>
              <LoadinBody>
                <Loader type="Watch" color="#FF886C" height="100" width="200" />
              </LoadinBody>
            </LoadingContainer>
          </LoadingWrapper>
        )}
      </>
    )
  }
}

const condition = authUser => !!authUser
export default withAuthorization(condition)(RoomPage)
