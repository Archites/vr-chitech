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
		const angle = camera.getAttribute('rotation')
		const x = 0.1 * Math.cos((angle.y * Math.PI) / 180)
		const y = 0.1 * Math.sin((angle.y * Math.PI) / 180)
		const pos = camera.getAttribute('position')
		pos.x -= y
		pos.z -= x
	}

	render() {
		return (
			<a-scene>
				<WalkButton type="button" onClick={this.handleOnClick}>
					WALK

</WalkButton>
				<a-camera ref={this.mainCamera} id="main">
					<a-cursor />
				</a-camera>
				<a-entity
					io3d-furniture="id:10344b13-d981-47a0-90ac-f048ee2780a6"
					position="-2 0 -3.2"
					rotation="0 180 0"
				/>
				<a-entity
					io3d-data3d="key:/3f995099-d624-4c8e-ab6b-1fd5e3799173/170515-0913-4p3ktf/1e588a3b-90ac-4a32-b5b8-ff2fda7f87c4.gz.data3d.buffer"
					position="0 0 0"
				/>
			</a-scene>
		)
	}
}

export default ExamplePage
