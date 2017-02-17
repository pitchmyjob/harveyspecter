import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { loginRequired, logoutRequired } from './utils/auth'

import AppContainer from './core/containers/AppContainer'
import CollaboratorPage from './collaborator/components/CollaboratorPage'
import DashboardContainer from './dashboard/containers/DashboardContainer'
import ProCreateFormContainer from './pro/containers/ProCreateFormContainer'
import ProUpdateFormContainer from './pro/containers/ProUpdateFormContainer'
import UserActivateContainer from './user/containers/UserActivateContainer'
import UserForgetPasswordConfirmFormContainer from './user/containers/UserForgetPasswordConfirmFormContainer'
import UserForgetPasswordRequestFormContainer from './user/containers/UserForgetPasswordRequestFormContainer'
import UserLoginFormContainer from './user/containers/UserLoginFormContainer'
import UserUpdateFormContainer from './user/containers/UserUpdateFormContainer'

export default (
    <Route path="/" component={AppContainer}>
        <IndexRoute component={DashboardContainer} onEnter={loginRequired} />
        <Route onEnter={loginRequired}>
            <Route path="/company/profile/" component={ProUpdateFormContainer} />
            <Route path="/collaborators/" component={CollaboratorPage} />
            <Route path="/me/edit/" component={UserUpdateFormContainer} />
        </Route>
        <Route onEnter={logoutRequired}>
            <Route path="/register/" component={ProCreateFormContainer} />
            <Route path="/user/activate/:email/:token/" component={UserActivateContainer} />
            <Route path="/login/" component={UserLoginFormContainer} />
            <Route path="/forget-password-confirm/:email/:token/" component={UserForgetPasswordConfirmFormContainer} />
            <Route path="/forget-password-request/" component={UserForgetPasswordRequestFormContainer} />
        </Route>
    </Route>
)
