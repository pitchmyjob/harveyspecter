import React from 'react'

export default class App extends React.Component {
    componentDidMount() {
        this.props.retrieveUserFromToken()
    }

    render() {
        const { fetching, error } = this.props.currentUser

        if (error) {
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
            <div>{this.props.children}</div>
        )
    }
}
