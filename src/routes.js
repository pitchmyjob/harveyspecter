import React from 'react'
import { Route } from 'react-router'

import ProCreateFormContainer from './pro/containers/ProCreateFormContainer'
import UserActivateContainer from './user/containers/UserActivateContainer'
import UserLoginFormContainer from './user/containers/UserLoginFormContainer'

export default (
    <div>
        <Route path="/register/" component={ProCreateFormContainer} />
        <Route path="/user/activate/:email/:token/" component={UserActivateContainer} />
        <Route path="/login/" component={UserLoginFormContainer} />
    </div>
)
