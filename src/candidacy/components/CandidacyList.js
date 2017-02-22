import React from 'react'

import Loader from '../../core/components/Loader'
import LoadingError from '../../core/components/LoadingError'

export default class CandidacyList extends React.Component {
    componentDidMount() {
        this.props.listCandidacy(this.props.params.id)
    }

    render() {
        const { fetched, error, candidacies } = this.props.candidacy

        let candidacyList = null;
        if (error) {
            candidacyList = <LoadingError />
        }
        else if (fetched) {
            candidacyList = candidacies.map((candidacy) => {
                return (
                    <li className="list-group-item" key={candidacy.id}>
                        <div className="media">
                            <div className="media-left">
                                <div className="avatar">
                                    <img src={candidacy.applicant.user.photo} alt="..." />
                                </div>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">
                                    {candidacy.applicant.user.first_name} {candidacy.applicant.user.last_name}
                                </h4>
                                <p>
                                    {candidacy.applicant.title}
                                </p>
                            </div>
                            <div className="media-right">
                                {candidacy.date_request}
                            </div>
                        </div>
                    </li>
                )
            })
        }
        else {
            candidacyList = <Loader />
        }

        return (
            <div className="page-user">
                <div className="page-content container-fluid">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="panel">
                                <div className="panel-body">
                                    <form className="page-search-form" role="search">
                                        <div className="input-search input-search-dark">
                                            <i className="input-search-icon wb-search" aria-hidden="true"></i>
                                            <input className="form-control" id="inputSearch" name="search" placeholder="Search Users" type="text" />
                                            <button type="button" className="input-search-close icon wb-close" aria-label="Close"></button>
                                        </div>
                                    </form>
                                    <div className="nav-tabs-horizontal">
                                        <ul className="nav nav-tabs nav-tabs-line" data-plugin="nav-tabs" role="tablist">
                                            <li className="active" role="presentation"><a href="#">Ils ont aimé votre offre</a></li>
                                            <li role="presentation"><a href="#">Vidéo en attente</a></li>
                                            <li role="presentation"><a href="#">Vidéo reçu</a></li>
                                            <li role="presentation"><a href="#">Candidat retenu</a></li>
                                            <li role="presentation"><a href="#">Candidat non retenu</a></li>
                                        </ul>
                                        <div className="tab-content">
                                            <ul className="list-group">
                                                {candidacyList}
                                            </ul>
                                            <nav>
                                                <ul data-plugin="paginator" data-total="50" data-skin="pagination-no-border" className="pagination pagination-no-border">
                                                    <li className="pagination-prev disabled"><a href="#"><span className="icon wb-chevron-left-mini"></span></a></li>
                                                    <li className="pagination-items active" data-value="1"><a href="#">1</a></li>
                                                    <li className="pagination-items" data-value="2"><a href="#">2</a></li>
                                                    <li className="pagination-items" data-value="3"><a href="#">3</a></li>
                                                    <li className="pagination-items" data-value="4"><a href="#">4</a></li>
                                                    <li className="pagination-items" data-value="5"><a href="#">5</a></li>
                                                    <li className="pagination-next"><a href="#"><span className="icon wb-chevron-right-mini"></span></a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
