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
                <li className="list-group-item">Erreur lors du chargement</li>
            )
        }
        else if (fetching) {
            return (
                <li className="list-group-item">Chargement...</li>
            )
        }

        const collaboratorList = collaborators.map((collaborator) => {
            return (
                <li className="list-group-item" key={collaborator.id}>
                    <div className="media">
                        <div className="media-left">
                            <a className="avatar avatar-online" href="#">
                                <img src={collaborator.photo} alt=""/>
                            </a>
                        </div>
                        <div className="media-body">
                            <div className="pull-xs-right"></div>
                            <div>
                                <span>{collaborator.first_name} {collaborator.last_name}</span>
                            </div>
                            <small><button onClick={() => destroyCollaborator(collaborator.id)}>Supprimer</button></small>
                        </div>
                    </div>
                </li>
            )
        })

        return (
            <ul className="list-group list-group-dividered list-group-full h-250" data-plugin="scrollable">
                <div data-role="container">
                    <div data-role="content">
                        {collaboratorList}
                    </div>
                </div>
            </ul>
        )
    }
}
