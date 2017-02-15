import React from 'react'

import CollaboratorCreateFormContainer from '../containers/CollaboratorCreateFormContainer'
import CollaboratorListContainer from '../containers/CollaboratorListContainer'

export default class CollaboratorPage extends React.Component {
    render() {
        return (
            <div>
                <CollaboratorListContainer />
                <CollaboratorCreateFormContainer />
            </div>
        )
    }
}
