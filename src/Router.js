import React from 'react'
import { paths } from 'common/constants'
import LandingPage from 'pages/LandingPage'
import EmptyPage from 'pages/EmptyPage'
import TemplatePage from 'pages/TemplatePage'
import { Switch, Route } from 'react-router-dom'

const Router = () => (
  <Switch>
    <Route exact path={paths.landing} component={LandingPage} />
    <Route path={paths.empty} component={EmptyPage} />
    <Route path={paths.template} component={TemplatePage} />
  </Switch>
)

export default Router
