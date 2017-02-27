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
        return (
            <div className="full-height">
                {this.props.children}
                <AlertContainer />
            </div>
        )
    }
}
