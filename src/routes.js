import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { loginRequired, logoutRequired } from './utils/auth'

import AppContainer from './core/containers/AppContainer'
import DashboardContainer from './dashboard/containers/DashboardContainer'
import ProCreateFormContainer from './pro/containers/ProCreateFormContainer'
import UserActivateContainer from './user/containers/UserActivateContainer'
import UserLoginFormContainer from './user/containers/UserLoginFormContainer'

export default (
    <Route path="/" component={AppContainer}>
        <IndexRoute component={DashboardContainer} onEnter={loginRequired} />
        <Route onEnter={logoutRequired}>
            <Route path="/register/" component={ProCreateFormContainer} />
            <Route path="/user/activate/:email/:token/" component={UserActivateContainer} />
            <Route path="/login/" component={UserLoginFormContainer} />
        </Route>
    </Route>
)
