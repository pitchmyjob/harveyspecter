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
                    <li className="list-group-item" key={candidacy.id}  data-toggle="slidePanel" >
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
                <div className="page-content">
                    <div className="panel">
                        <div className="panel-body">
                            <form className="page-search-form" role="search">
                                <div className="input-search input-search-dark">
                                    <i className="input-search-icon wb-search" aria-hidden="true"></i>
                                    <input className="form-control" id="inputSearch" name="search" placeholder="Search Users" type="text" />
                                    <button type="button" className="input-search-close icon wb-close" aria-label="Close"></button>
                                </div>
                            </form>
                            <div className="nav-tabs-horizontal nav-tabs-animate" data-plugin="tabs">
                                <ul className="nav nav-tabs nav-tabs-line" data-plugin="nav-tabs" role="tablist">

                                    <li className="nav-item" role="presentation">
                                        <a href="#" className="active nav-link" data-toggle="tab" href="#like" aria-controls="like" role="tab">Ils ont aimé votre offre</a>
                                    </li>

                                    <li className="nav-item" role="presentation">
                                        <a href="#" className="nav-link" data-toggle="tab" href="#waiting" aria-controls="waiting" role="tab">Vidéo en attente</a>
                                    </li>

                                    <li className="nav-item" role="presentation">
                                        <a href="#" className="nav-link" data-toggle="tab" href="#video" aria-controls="video" role="tab">Vidéo reçu</a>
                                    </li>

                                    <li className="nav-item" role="presentation">
                                        <a href="#" className="nav-link" data-toggle="tab" href="#accepted" aria-controls="accepted" role="tab">Candidat retenu</a>
                                    </li>

                                    <li className="nav-item" role="presentation">
                                        <a href="#" className="nav-link" data-toggle="tab" href="#rejected" aria-controls="rejected" role="tab">Candidat non retenu</a>
                                    </li>

                                </ul>
                                <div className="tab-content">
                                    <ul className="list-group">
                                        {candidacyList}
                                    </ul>
                                    <nav>
                                        <ul data-plugin="paginator" data-total="50" data-skin="pagination-no-border" className="pagination pagination-no-border">
                                            <li className="pagination-prev page-item disabled">
                                                <a href="#" className="page-link"><span className="icon wb-chevron-left-mini"></span></a>
                                            </li>
                                            <li className="pagination-items page-item active" data-value="1"><a href="#" className="page-link">1</a></li>
                                            <li className="pagination-items page-item" data-value="2"><a href="#" className="page-link">2</a></li>
                                            <li className="pagination-items page-item" data-value="3"><a href="#" className="page-link">3</a></li>
                                            <li className="pagination-items page-item" data-value="4"><a href="#" className="page-link">4</a></li>
                                            <li className="pagination-items page-item" data-value="5"><a href="#" className="page-link">5</a></li>
                                            <li className="pagination-next page-item"><a href="#" className="page-link"><span className="icon wb-chevron-right-mini"></span></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
