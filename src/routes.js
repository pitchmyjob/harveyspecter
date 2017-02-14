import React from 'react'
import { Route } from 'react-router'

import ProCreateFormContainer from './pro/containers/ProCreateFormContainer'

export default (
    <div>
        <Route path="/register/" component={ProCreateFormContainer} />
    </div>
)
