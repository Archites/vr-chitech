import React, { PureComponent, createRef } from 'react'
import styled from 'styled-components'
import { Entity, Scene } from 'aframe-react'
// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import JSSoup from 'jssoup'
import OnlyDesktop from 'common/OnlyDesktop'

import firebase from '../../config/firebase'

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

  constructor(props) {
    super(props)

    const ref = firebase.database().ref('room1')
    this.state = {
      database: <Entity position="0 0 0" rotation="0 0 0" />,
    }
    ref.on('value', snapshot => this.getDatabase(snapshot.val()))
  }

  getDatabase = value => {
    this.setState({
      database: value,
    })
  }

  getComponents = value => {
    if (value === undefined) return []
    const soup = new JSSoup(value)
    const arr = []
    soup.contents.forEach(element => {
      arr.push(React.createElement(Entity, { ...element.attrs }))
    })
    return arr
  }

  handleClick = () => {
    console.log('Clicked!')
  }

  handleCollide = () => {
    console.log('Collided!')
  }

  hiddenInspector = () => {
    const x = document.getElementById('inspector')
    x.style.display = 'none'
  }

  render() {
    const { database } = this.state
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
          position="0 1.6 0"
          look-controls
          wasd-controls
        />
        {this.getComponents(database)}
      </Scene>
    )
  }
}

export default ExamplePage
