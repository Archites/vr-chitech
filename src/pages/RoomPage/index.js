import React, { Component, createRef } from 'react'
import styled from 'styled-components'
import { Entity, Scene } from 'aframe-react'
import { Link } from 'react-router-dom'
import JSSoup from 'jssoup'
import OnlyDesktop from 'common/OnlyDesktop'
import { withFirebase } from 'common/Firebase'

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

  constructor(props) {
    super(props)

    const { firebase, location } = this.props
    console.log(location.state.id)

    const ref = firebase.database
      .child(firebase.auth.currentUser.uid)
      .child('room')
    this.state = {
      element: false,
    }
    ref
      .child(location.state.id)
      .child('element')
      .on('value', snapshot => this.getDatabase(snapshot.val()))
  }

  getDatabase = value => {
    this.setState({
      element: value,
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

  hiddenInspector = () => {
    const x = document.getElementById('inspector')
    x.style.display = 'none'
  }

  render() {
    const { element } = this.state

    return (
      element && (
        <Scene joystick>
          <OnlyDesktop>
            <Inspector
              id="inspector"
              onClick={this.hiddenInspector}
              href="javascript:window.postMessage('INJECT_AFRAME_INSPECTOR','*')"
            >
              Inspect Scene
            </Inspector>
          </OnlyDesktop>
          <Link to="/">
            <HomeBtn>Back to home</HomeBtn>
          </Link>
          <Entity id="rig" movement-controls>
            <Entity
              camera
              id="camera"
              position="0 0.8 0"
              wasd-controls
              touch-controls
              look-controls="pointerLockEnabled: true"
            />
          </Entity>
          <Entity id="environment" environment="preset: forest; fog: false" />
          {this.getComponents(element)}
        </Scene>
      )
    )
  }
}

export default withFirebase(RoomPage)
