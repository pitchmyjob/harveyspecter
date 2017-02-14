import React from 'react'
import { Route } from 'react-router'

import AppContainer from './core/containers/AppContainer'
import ProCreateFormContainer from './pro/containers/ProCreateFormContainer'
import UserActivateContainer from './user/containers/UserActivateContainer'
import UserLoginFormContainer from './user/containers/UserLoginFormContainer'

export default (
    <Route path="/" component={AppContainer}>
        <Route path="/register/" component={ProCreateFormContainer} />
        <Route path="/user/activate/:email/:token/" component={UserActivateContainer} />
        <Route path="/login/" component={UserLoginFormContainer} />
    </Route>
)
