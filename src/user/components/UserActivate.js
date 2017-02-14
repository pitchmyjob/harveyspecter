import React from 'react'

export default class UserActivate extends React.Component {
    componentDidMount() {
        const { email, token } = this.props.params
        this.props.activateUser(email, token);
    }

    render() {
        const { activated, error } = this.props.user

        if (error) {
            return (
                <p>Erreur...</p>
            )
        }
        else if (activated) {
            return (
                <p>Votre compte a été activé, vous pouvez vous connecter avec</p>
            )
        }

        return (
            <p>Activation en cours</p>
        )
    }
}
