import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { loginRequired, logoutRequired } from './utils/auth'

import LayoutLoggedContainer from './core/containers/LayoutLoggedContainer'
import AppContainer from './core/containers/AppContainer'
import CollaboratorPage from './collaborator/components/CollaboratorPage'
import DashboardContainer from './dashboard/containers/DashboardContainer'
import JobCreateFormContainer from './job/containers/JobCreateFormContainer'
import JobListContainer from './job/containers/JobListContainer'
import JobUpdateFormContainer from './job/containers/JobUpdateFormContainer'
import ProCreateFormContainer from './pro/containers/ProCreateFormContainer'
import ProUpdateFormContainer from './pro/containers/ProUpdateFormContainer'
import UserActivateContainer from './user/containers/UserActivateContainer'
import UserForgetPasswordConfirmFormContainer from './user/containers/UserForgetPasswordConfirmFormContainer'
import UserForgetPasswordRequestFormContainer from './user/containers/UserForgetPasswordRequestFormContainer'
import UserLoginFormContainer from './user/containers/UserLoginFormContainer'
import UserUpdateFormContainer from './user/containers/UserUpdateFormContainer'

export default (
    <Route path="/" component={AppContainer}>
        <Route onEnter={loginRequired} component={LayoutLoggedContainer}>
            <IndexRoute component={DashboardContainer} />
            <Route path="/company/edit/" component={ProUpdateFormContainer} />
            <Route path="/collaborators/" component={CollaboratorPage} />
            <Route path="/me/edit/" component={UserUpdateFormContainer} />
            <Route path="/jobs/" component={JobListContainer} />
            <Route path="/jobs/create/" component={JobCreateFormContainer} />
            <Route path="/jobs/edit/:id/" component={JobUpdateFormContainer} />
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
