import React from 'react'
import { paths } from 'common/constants'
import HomePage from 'pages/HomePage'
import EmptyPage from 'pages/EmptyPage'
import TemplatePage from 'pages/TemplatePage'
import { Switch, Route } from 'react-router-dom'

const Router = () => (
  <Switch>
    <Route exact path={paths.home} component={HomePage} />
    <Route path={paths.empty} component={EmptyPage} />
    <Route path={paths.template} component={TemplatePage} />
  </Switch>
)

export default Router
