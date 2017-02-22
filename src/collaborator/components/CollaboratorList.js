import React from 'react'

import Loader from '../../core/components/Loader'
import LoadingError from '../../core/components/LoadingError'

export default class CollaboratorList extends React.Component {
    componentDidMount() {
        this.props.listCollaborator()
    }

    render() {
        const { destroyCollaborator } = this.props
        const { fetched, error, collaborators } = this.props.collaborator

        if (error) {
            return <LoadingError />
        }
        else if (fetched) {
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

        return <Loader />
    }
}
