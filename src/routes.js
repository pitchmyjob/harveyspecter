import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { loginRequired, logoutRequired } from './utils/auth'

import Error404 from './core/components/Error404'
import LayoutLoggedContainer from './core/containers/LayoutLoggedContainer'
import LayoutNotLoggedContainer from './core/containers/LayoutNotLoggedContainer'
import AppContainer from './core/containers/AppContainer'
import CandidacyListContainer from './candidacy/containers/CandidacyListContainer'
import CollaboratorCreateFormContainer from './collaborator/containers/CollaboratorCreateFormContainer'
import DashboardContainer from './dashboard/containers/DashboardContainer'
import JobCreateFormContainer from './job/containers/JobCreateFormContainer'
import JobListContainer from './job/containers/JobListContainer'
import JobUpdateFormContainer from './job/containers/JobUpdateFormContainer'
import JobPublishFormContainer from './job/containers/JobPublishFormContainer'
import JobQuestionFormContainer from './jobquestion/containers/JobQuestionFormContainer'
import ProCreateFormContainer from './pro/containers/ProCreateFormContainer'
import ProUpdateFormContainer from './pro/containers/ProUpdateFormContainer'
import UserActivateContainer from './user/containers/UserActivateContainer'
import UserForgetPasswordConfirmFormContainer from './user/containers/UserForgetPasswordConfirmFormContainer'
import UserForgetPasswordRequestFormContainer from './user/containers/UserForgetPasswordRequestFormContainer'
import UserLoginFormContainer from './user/containers/UserLoginFormContainer'
import UserUpdateFormContainer from './user/containers/UserUpdateFormContainer'

export default (
    <div>
        <Route path="/" component={AppContainer}>
            <Route onEnter={loginRequired} component={LayoutLoggedContainer}>
                <IndexRoute component={DashboardContainer} />
                <Route path="/company/edit/" component={ProUpdateFormContainer} />
                <Route path="/collaborators/create/" component={CollaboratorCreateFormContainer} />
                <Route path="/me/edit/" component={UserUpdateFormContainer} />
                <Route path="/jobs/create/" component={JobCreateFormContainer} />
                <Route path="/jobs/edit/:id/" component={JobUpdateFormContainer} />
                <Route path="/jobs/:jobId/candidacies/:status/(:page/)" component={CandidacyListContainer} />
                <Route path="/jobs/:jobId/question/" component={JobQuestionFormContainer} />
                <Route path="/jobs/:id/publish/" component={JobPublishFormContainer} />
                <Route path="/jobs/(:page/)" component={JobListContainer} />
            </Route>
            <Route onEnter={logoutRequired} component={LayoutNotLoggedContainer}>
                <Route path="/register/" component={ProCreateFormContainer} />
                <Route path="/user/activate/:email/:token/" component={UserActivateContainer} />
                <Route path="/login/" component={UserLoginFormContainer} />
                <Route path="/forget-password-confirm/:email/:token/" component={UserForgetPasswordConfirmFormContainer} />
                <Route path="/forget-password-request/" component={UserForgetPasswordRequestFormContainer} />
            </Route>
        </Route>
        <Route path="*" component={Error404} />
    </div>
)
