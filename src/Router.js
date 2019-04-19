import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { paths } from 'common/constants'
import LandingPage from 'pages/LandingPage'
import RoomPage from 'pages/RoomPage'
import SavePage from 'pages/SavePage'
import LoginPage from 'pages/LoginPage'

const Router = () => (
  <Switch>
    <Route exact path={paths.landing} component={LandingPage} />
    <Route path={paths.room} component={RoomPage} />
    <Route path={paths.save} component={SavePage} />
    <Route path={paths.login} component={LoginPage} />
  </Switch>
)

export default Router
