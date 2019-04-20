import React, { Component, createRef } from 'react'
import styled from 'styled-components'
import { Entity, Scene } from 'aframe-react'
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
        {this.getComponents(element)}
      </Scene>
    )
  }
}

const condition = authUser => !!authUser
export default withAuthorization(condition)(RoomPage)
