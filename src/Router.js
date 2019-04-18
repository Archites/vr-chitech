import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { paths } from 'common/constants'
import LandingPage from 'pages/LandingPage'
import RoomPage from 'pages/RoomPage'
import SavePage from 'pages/SavePage'

const Router = () => (
  <Switch>
    <Route exact path={paths.landing} component={LandingPage} />
    <Route path={paths.room_one} component={RoomPage} />
    <Route path={paths.room_two} component={RoomPage} />
    <Route path={paths.save} component={SavePage} />
  </Switch>
)

export default Router
