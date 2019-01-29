import React, { PureComponent, createRef } from 'react'
import styled from 'styled-components'

const WalkButton = styled.button`
	position: absolute;
`

class ExamplePage extends PureComponent {
	mainCamera = createRef()

	handleOnClick = e => {
		e.preventDefault()
		const camera = this.mainCamera.current
		const rotation = camera.getAttribute('rotation')
		const x = 0.1 * Math.cos((rotation.y * Math.PI) / 180)
		const y = 0.1 * Math.sin((rotation.y * Math.PI) / 180)
		const pos = camera.getAttribute('position')
		pos.x -= y
		pos.z -= x
	}

	render() {
		return (
			<a-scene>
				<WalkButton onClick={this.handleOnClick}>WALK</WalkButton>
				<a-camera ref={this.mainCamera} id="main">
					<a-cursor />
				</a-camera>
				<a-entity
					io3d-furniture="id:10344b13-d981-47a0-90ac-f048ee2780a6"
					position="-2 0 -3.2"
					rotation="0 180 0"
				/>
			</a-scene>
		)
	}
}

export default ExamplePage
