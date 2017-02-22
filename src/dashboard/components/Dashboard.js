import React from 'react'
import { Link } from 'react-router'

import CollaboratorListContainer from '../../collaborator/containers/CollaboratorListContainer'

export default class Dashboard extends React.Component {
    render() {
        return (
            <div className="page-content container-fluid">
                <div className="row" data-plugin="matchHeight" data-by-row="true">
                    <div className="col-xxl-4 col-xl-4 col-lg-12 col-xs-12">
                        <div className="card card-shadow">
                            <div className="card-block text-xs-center bg-white p-40">
                                <div className="avatar avatar-100 m-b-20">
                                    <img src="https://s3-eu-west-1.amazonaws.com/spitchapp-dev/static/assets/images/logopitch.png" alt="" />
                                </div>
                                <p className="font-size-20 blue-grey-700">Spitch</p>
                                <p className="blue-grey-400 m-b-20">Recrutement</p>
                                <p className="m-b-10">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                    nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                                </p>
                                <p className="m-b-35">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                    nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                                </p>
                                <ul className="list-inline font-size-18 m-b-35">
                                    <li className="list-inline-item">
                                        <a className="blue-grey-400" href="#">
                                            <i className="icon bd-twitter" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item m-l-10">
                                        <a className="blue-grey-400" href="#">
                                            <i className="icon bd-facebook" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item m-l-10">
                                        <a className="blue-grey-400" href="#">
                                            <i className="icon bd-dribbble" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item m-l-10">
                                        <a className="blue-grey-400" href="#">
                                            <i className="icon bd-instagram" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                </ul>
                                <Link to="/company/edit/">
                                    <button type="button" className="btn btn-primary p-x-40">Modifier</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-8 col-xl-8 col-lg-12 col-xs-12" >
                        <div className="col-xxl-4 col-xl-4 col-lg-12 col-xs-12" >
                            <div className="card card-block p-10 bg-blue-600" >
                                <div className="counter counter-lg counter-inverse">
                                    <div className="counter-label text-uppercase">Offres en cours</div>
                                    <span className="counter-number">220</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-12 col-xs-12">
                            <div className="card card-block p-10 bg-purple-600">
                                <div className="counter counter-lg counter-inverse">
                                    <div className="counter-label text-uppercase">Offres en attente</div>
                                    <span className="counter-number">220</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-12 col-xs-12">
                            <div className="card card-block p-10 bg-red-600">
                                <div className="counter counter-lg counter-inverse">
                                    <div className="counter-label text-uppercase">Offres expirées</div>
                                    <span className="counter-number">220</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-xs-12">
                            <div className="panel" id="followers">
                                <div className="panel-heading">
                                    <h3 className="panel-title">
                                        Collaborateurs
                                    </h3>
                                </div>
                                <div className="panel-body">
                                    <CollaboratorListContainer />
                                    <Link to="/collaborators/create/">
                                        <button type="button" className="btn btn-block btn-primary">Ajouter</button>
                                    </Link>
                                </div>
                            </div>
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
                                                        <img src="https://s3-eu-west-1.amazonaws.com/spitchapp-dev/static/portraits/5.jpg" alt="" />
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
                                                        <img src="https://s3-eu-west-1.amazonaws.com/spitchapp-dev/static/portraits/5.jpg" alt="" />
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
