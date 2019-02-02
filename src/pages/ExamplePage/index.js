import React, { PureComponent, createRef } from 'react'
// import styled from 'styled-components'
import { Entity, Scene } from 'aframe-react'

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
