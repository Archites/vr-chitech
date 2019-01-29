import React from 'react'
import { paths } from 'common/constants'
import HomePage from 'pages/HomePage'
import ExamplePage from 'pages/ExamplePage'
import { Switch, Route } from 'react-router-dom'

const Router = () => (
	<Switch>
		<Route exact path={paths.home} component={HomePage} />
		<Route path={paths.example} component={ExamplePage} />
	</Switch>
)

export default Router
