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

class ExamplePage extends PureComponent {
  mainCamera = createRef()

  handleClick = () => {
    console.log('Clicked!')
  }

  handleCollide = () => {
    console.log('Collided!')
  }

  render() {
    return (
      <Scene joystick>
        <OnlyDesktop>
          <Inspector href="javascript:window.postMessage('INJECT_AFRAME_INSPECTOR','*')">
            Inspect Scene
          </Inspector>
        </OnlyDesktop>
        <Entity
          camera
          id="camera"
          position="0 1.6 0"
          look-controls
          wasd-controls
        />
        <Entity io3d-floor position="0 1 0" />
        <Entity io3d-floor position="4 1 0" />
        <Entity io3d-floor position="-4 1 0" />
        <Entity io3d-floor position="0 1 -4" />
        <Entity io3d-floor position="4 1 -4" />
        <Entity io3d-floor position="-4 1 -4" />
        <Entity io3d-wall position="8 1 0" rotation="0 90 0" />
        <Entity io3d-wall position="8 1 1" rotation="0 90 0" />
        <Entity io3d-wall position="8 1 2" rotation="0 90 0" />
        <Entity io3d-wall position="8 1 3" rotation="0 90 0" />
        <Entity io3d-wall position="8 1 4" rotation="0 90 0" />
        <Entity io3d-wall position="8 1 -1" rotation="0 90 0" />
        <Entity io3d-wall position="8 1 -2" rotation="0 90 0" />
        <Entity io3d-wall position="8 1 -3" rotation="0 90 0" />
        <Entity io3d-wall position="-4 1 1" rotation="0 90 0" />
        <Entity io3d-wall position="-4 1 2" rotation="0 90 0" />
        <Entity io3d-wall position="-4 1 3" rotation="0 90 0" />
        <Entity io3d-wall position="-4 1 4" rotation="0 90 0" />
        <Entity io3d-wall position="-4 1 0" rotation="0 90 0" />
        <Entity io3d-wall position="-4 1 -1" rotation="0 90 0" />
        <Entity io3d-wall position="-4 1 -2" rotation="0 90 0" />
        <Entity io3d-wall position="-4 1 -3" rotation="0 90 0" />
      </Scene>
    )
  }
}

export default ExamplePage
