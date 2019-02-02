import React, { PureComponent, createRef } from 'react'
import styled from 'styled-components'
import { Entity, Scene } from 'aframe-react'

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
        <Inspector href="javascript:window.postMessage('INJECT_AFRAME_INSPECTOR','*')">
          Inspect Scene
        </Inspector>
        <a-entity
          camera
          id="camera"
          position="0 1.6 0"
          look-controls
          wasd-controls
        />
        <Entity
          io3d-furniture="id:10344b13-d981-47a0-90ac-f048ee2780a6"
          position={{ x: -2, y: 0, z: -3.2 }}
          rotation={{ x: 0, y: 180, z: 0 }}
          events={{
            click: this.handleClick,
            collided: [this.handleCollide],
          }}
        />
      </Scene>
    )
  }
}

export default ExamplePage
