import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader'
import { GlobalStyle } from 'styled'
import styled from 'styled-components'

import ExamplePage from 'pages/ExamplePage'

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

export class App extends Component {
	render = () => (
		<div style={{ position: 'relative', width: '100%', height: '100%' }}>
			<Inspector href="javascript:window.postMessage('INJECT_AFRAME_INSPECTOR','*')">
				Inspect Scene
			</Inspector>
			<div style={{ zIndex: '1' }}>
				<ExamplePage />
    		<GlobalStyle />
			</div>
		</div>
	)
}

export default App
