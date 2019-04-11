import React, { PureComponent, createRef } from 'react'
import styled from 'styled-components'
import { Entity, Scene } from 'aframe-react'
import OnlyDesktop from 'common/OnlyDesktop'

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

class RoomPage extends PureComponent {
  mainCamera = createRef()

  hiddenInspector = () => {
    const x = document.getElementById('inspector')
    x.style.display = 'none'
  }

  render() {
    return (
      <Scene joystick>
        <OnlyDesktop>
          <Inspector href="javascript:window.postMessage('INJECT_AFRAME_INSPECTOR','*')">
            Inspect Scene
          </Inspector>
        </OnlyDesktop>
        <Inspector
          id="inspector"
          href="javascript:window.postMessage('INJECT_AFRAME_INSPECTOR','*')"
          onClick={this.hiddenInspector}
        >
          Inspect Scene
        </Inspector>
        <Entity
          camera
          id="camera"
          position="0 0.8 0"
          look-controls
          wasd-controls
        />
        <Entity id="environment" environment="preset: forest; fog: false" />
        <Entity io3d-floor position="0 0 0" />
        <Entity io3d-floor position="4 0 0" />
        <Entity io3d-floor position="-4 0 0" />
        <Entity io3d-floor position="0 0 -4" />
        <Entity io3d-floor position="4 0 -4" />
        <Entity io3d-floor position="-4 0 -4" />
        <Entity io3d-wall position="8 0 0" rotation="0 90 0" />
        <Entity io3d-wall position="8 0 1" rotation="0 90 0" />
        <Entity io3d-wall position="8 0 2" rotation="0 90 0" />
        <Entity io3d-wall position="8 0 3" rotation="0 90 0" />
        <Entity io3d-wall position="8 0 4" rotation="0 90 0" />
        <Entity io3d-wall position="8 0 -1" rotation="0 90 0" />
        <Entity io3d-wall position="8 0 -2" rotation="0 90 0" />
        <Entity io3d-wall position="8 0 -3" rotation="0 90 0" />
        <Entity io3d-wall position="-4 0 1" rotation="0 90 0" />
        <Entity io3d-wall position="-4 0 2" rotation="0 90 0" />
        <Entity io3d-wall position="-4 0 3" rotation="0 90 0" />
        <Entity io3d-wall position="-4 0 4" rotation="0 90 0" />
        <Entity io3d-wall position="-4 0 0" rotation="0 90 0" />
        <Entity io3d-wall position="-4 0 -1" rotation="0 90 0" />
        <Entity io3d-wall position="-4 0 -2" rotation="0 90 0" />
        <Entity io3d-wall position="-4 0 -3" rotation="0 90 0" />
      </Scene>
    )
  }
}

export default RoomPage
