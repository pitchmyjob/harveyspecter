import React from 'react'

export default class CollaboratorList extends React.Component {
    componentDidMount() {
        this.props.listCollaborator()
    }

    render() {
        const { destroyCollaborator } = this.props
        const { fetching, error, collaborators } = this.props.collaborator

        if (error) {
            return (
                <p>Error list</p>
            )
        }
        else if (fetching) {
            return (
                <p>Chargement...</p>
            )
        }

        const collaboratorList = collaborators.map((collaborator) => {
            return (
                <li key={collaborator.id}>
                    {collaborator.first_name} {collaborator.last_name} <button onClick={() => destroyCollaborator(collaborator.id)}>Supprimer</button>
                </li>
            )
        })

        return (
            <ul>
                {collaboratorList}
            </ul>
        )
    }
}
