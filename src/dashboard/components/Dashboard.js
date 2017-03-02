import React from 'react'

import ProCard from './ProCard'
import JobCounterCard from './JobCounterCard'
import CollaboratorCard from './CollaboratorCard'

export default class Dashboard extends React.Component {
    componentDidMount() {
        this.props.retrievePro()
        this.props.retrieveCounterJob()
        this.props.listCollaborator()
    }

    render() {
        const { destroyCollaborator } = this.props
        const { pro, jobCounter, collaborator, currentUser } = this.props

        return (
            <div className="page-content container-fluid">
                <div className="row" data-plugin="matchHeight" data-by-row="true">
                    <div className="col-xxl-4 col-xl-4 col-lg-12 col-xs-12">
                        <ProCard pro={pro} />
                    </div>
                    <div className="col-xxl-8 col-xl-8 col-lg-12 col-xs-12">
                        <JobCounterCard counter={jobCounter} />
                        <div className="col-xl-6 col-lg-6 col-xs-12">
                            <CollaboratorCard currentUser={currentUser} collaborators={collaborator} onDelete={destroyCollaborator} />
                        </div>
                        <div className="col-xl-6 col-lg-6 col-xs-12">
                            <div className="panel" id="daily-feed">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Activités</h3>
                                </div>
                                <div className="panel-body">
                                    <ul className="list-group list-group-dividered list-group-full">
                                        <li className="list-group-item">
                                            <div className="media">
                                                <div className="media-left">
                                                    <a className="avatar avatar-online" href="#">
                                                        <img src="https://s3-eu-west-1.amazonaws.com/spitchapp-dev/static/global/portraits/5.jpg" alt="" />
                                                        <i></i>
                                                    </a>
                                                </div>
                                                <div className="media-body">
                                                    <h4 className="media-heading">
                                                        <a href="" className="name">Edward Fletcher</a> a publié l'offre <a href=""> Developpeur Python</a>
                                                    </h4>
                                                    <small>Today 5:50 pm - 12.04.2017</small>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="media">
                                                <div className="media-left">
                                                    <a className="avatar avatar-online" href="#">
                                                        <img src="https://s3-eu-west-1.amazonaws.com/spitchapp-dev/static/global/portraits/5.jpg" alt="" />
                                                        <i></i>
                                                    </a>
                                                </div>
                                                <div className="media-body">
                                                    <h4 className="media-heading">
                                                        <a  href="" className="name">Edward Fletcher</a> a commenté la candidature de <a href=""> JHohn Doe</a>
                                                    </h4>
                                                    <small>Today 5:50 pm - 12.04.2017</small>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
