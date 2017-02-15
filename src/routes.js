import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { loginRequired, logoutRequired } from './utils/auth'

import AppContainer from './core/containers/AppContainer'
import CollaboratorPage from './collaborator/components/CollaboratorPage'
import DashboardContainer from './dashboard/containers/DashboardContainer'
import ProCreateFormContainer from './pro/containers/ProCreateFormContainer'
import ProUpdateFormContainer from './pro/containers/ProUpdateFormContainer'
import UserActivateContainer from './user/containers/UserActivateContainer'
import UserForgetPasswordRequestFormContainer from './user/containers/UserForgetPasswordRequestFormContainer'
import UserLoginFormContainer from './user/containers/UserLoginFormContainer'

export default (
    <Route path="/" component={AppContainer}>
        <IndexRoute component={DashboardContainer} onEnter={loginRequired} />
        <Route onEnter={loginRequired}>
            <Route path="/profile/" component={ProUpdateFormContainer} />
            <Route path="/collaborators/" component={CollaboratorPage} />
        </Route>
        <Route onEnter={logoutRequired}>
            <Route path="/register/" component={ProCreateFormContainer} />
            <Route path="/user/activate/:email/:token/" component={UserActivateContainer} />
            <Route path="/login/" component={UserLoginFormContainer} />
            <Route path="/forget-password-request/" component={UserForgetPasswordRequestFormContainer} />
        </Route>
    </Route>
)
