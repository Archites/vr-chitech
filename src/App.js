import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import ExamplePage from './pages/ExamplePage'

const App = () => (
	<Switch>
		<Route exact path="/" component={ExamplePage} />
	</Switch>
)

export default hot(module)(App)
