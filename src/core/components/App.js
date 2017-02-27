import React from 'react'

import AlertContainer from '../../alert/containers/AlertContainer'

export default class App extends React.Component {
    componentWillMount() {
        document.body.classList.remove('layout-full');
    }

    componentDidMount() {
        this.props.retrieveUserFromToken()
    }

    render() {
        const { fetching, errorRetrieve } = this.props.currentUser

        if (errorRetrieve) {
            return (
                <p>Error user loading</p>
            )
        }
        else if (fetching) {
            return (
                <p>Chargement...</p>
            )
        }

        return (
            <div className="full-height">
                {this.props.children}
                <AlertContainer />
            </div>
        )
    }
}
