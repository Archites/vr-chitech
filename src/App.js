/* eslint-disable */

import React, { Component, Fragment } from 'react'
// import { Switch, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import ExamplePage from 'pages/ExamplePage'

// const state = {
// 	status: 'inpector'
// }

// const setStatus = () => {
// 	if (state.status === 'inspector') {
// 		state.status = 'view'
// 	} else {
// 		state.status = 'inspector'
// 	}
// }

export class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			status: 'inspector',
		}
	}

	setStatus = () => {
		if (this.state.status === 'inspector') {
			this.setState({ status: 'view' })
		} else {
			this.setState({ status: 'inspector' })
		}
	}

	render = () => (
		<div style={{ position: 'relative', width: '100%', height: '100%' }}>
			{this.state.status === 'inspector' ? (
				<button
					style={{
						width: '100px',
						height: '50px',
						position: 'absolute',
						zIndex: '2',
					}}
					onClick={this.setStatus}
				>
					Inspector
				</button>
			) : (
				<button
					style={{
						width: '100px',
						height: '50px',
						position: 'absolute',
						zIndex: '2',
					}}
					onClick={this.setStatus}
				>
					View
				</button>
			)}
			<div>
				<ExamplePage style={{ zIndex: '1' }} />
			</div>
		</div>
	)
}

// const App = () => (
// 	// <Switch>
// 	// 	<Route exact path="/" component={ExamplePage} />
// 	// </Switch>
// <div style={{ position: 'relative', width: '100%', height: '100%' }}>
// 	{ console.log(state.status) }
// 	<button style={{ width: '100px', height: '50px', position: 'absolute', zIndex: '2' }} onClick={setStatus}>{state.status}</button>
// 	<div>
// 	{/* <ExamplePage style={{ zIndex: '1' }} /> */}
// 	</div>
// </div>
// )

export default App
