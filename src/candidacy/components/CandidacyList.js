import React from 'react'
import { Link } from 'react-router'

import Loader from '../../core/components/Loader'
import LoadingError from '../../core/components/LoadingError'
import Pagination from '../../core/components/Pagination'
import { convertStatusParamsToAPI, convertStatusAPIToParams } from '../utils'

export default class CandidacyList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            status: convertStatusParamsToAPI(this.props.params.status),
            page: this.props.params.page - 1 || 0,
            search: this.props.location.query.search || '',
        }

        this.handleTabClick = this.handleTabClick.bind(this)
        this.handlePageClick = this.handlePageClick.bind(this)
        this.searchUpdated = this.searchUpdated.bind(this)
        this.handleSearchFormSubmit = this.handleSearchFormSubmit.bind(this)
    }

    componentDidMount() {
        const jobId = this.props.params.jobId

        this.props.listCandidacy(jobId, this.state.status, this.props.params.page || null, this.state.search)
        this.props.retrieveCounterCandidacy(jobId)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.action === 'POP') {
            if (this.props.params.status !== nextProps.params.status) {
                let status = convertStatusParamsToAPI(nextProps.params.status)
                let page = parseInt(nextProps.params.page || 0, 10)
                this.handleTabClick(status, page, false)
            }
            else if (this.props.params.page !== nextProps.params.page || this.props.params.status !== nextProps.params.status) {
                this.handlePageClick({selected: parseInt(nextProps.params.page - 1 || 0, 10)}, false)
            }
        }
    }

    handleTabClick(status, page=1, pushRoute=true) {
        page = parseInt(page)

        this.setState({status: status, page: (page - 1), search: ''})
        this.props.listCandidacy(this.props.params.jobId, status, (page || null), null)

        const statusParams = convertStatusAPIToParams(status)
        const route = {
            pathname: '/jobs/' + this.props.params.jobId + '/candidacies/' + statusParams + '/' + page + '/',
            query: this.props.location.query
        }

        if (pushRoute) {
            this.props.router.push(route)
        }
        else {
            this.props.router.replace(route)
        }
    }

    handlePageClick(data, pushRoute=true) {
        let newPage = data.selected + 1

        this.setState({page: data.selected})
        this.props.listCandidacy(this.props.params.jobId, this.state.status, newPage, this.state.search)

        const statusParams = convertStatusAPIToParams(this.state.status)
        const route = {
            pathname: '/jobs/' + this.props.params.jobId + '/candidacies/' + statusParams + '/' + newPage + '/',
            query: this.props.location.query
        }

        if (pushRoute) {
            this.props.router.push(route)
        }
        else {
            this.props.router.replace(route)
        }
    }

    searchUpdated(event) {
        this.setState({search: event.target.value})
    }

    handleSearchFormSubmit(event) {
        event.preventDefault()
        this.setState({page: 0})
        this.props.listCandidacy(this.props.params.jobId, this.state.status, null, this.state.search)

        let query = {}
        if (this.state.search) {
            query['search'] = this.state.search
        }

        const statusParams = convertStatusAPIToParams(this.state.status)
        this.props.router.push({
            pathname: '/jobs/' + this.props.params.jobId + '/candidacies/' + statusParams + '/',
            query: query
        })
    }

    render() {
        const { candidacyList, candidacyCounter } = this.props

        let candidacyListResult = null;
        if (candidacyList.error) {
            candidacyListResult = (
                <li className="list-group-item">
                    <LoadingError />
                </li>
            )
        }
        else if (candidacyList.fetched) {
            if (candidacyList.candidacies.length > 0) {
                candidacyListResult = candidacyList.candidacies.map((candidacy) => {
                    return (
                        <li className="list-group-item" key={candidacy.id}  data-toggle="slidePanel">
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
                candidacyListResult = (
                    <li className="list-group-item">
                        Aucun résultat
                    </li>
                )
            }
        }
        else {
            candidacyListResult = (
                <li className="list-group-item">
                    <Loader />
                </li>
            )
        }

        return (
            <div className="page-user">
                <div className="page-content">
                    <div className="panel">
                        <div className="panel-body">
                            <form className="page-search-form" role="search" onSubmit={this.handleSearchFormSubmit}>
                                <div className="input-search input-search-dark">
                                    <i className="input-search-icon wb-search" aria-hidden="true"></i>
                                    <input className="form-control" id="inputSearch" name="search" value={this.state.searchTerm} placeholder="Rechercher..." type="text" onChange={this.searchUpdated} />
                                    <button type="button" className="input-search-close icon wb-close" aria-label="Close"></button>
                                </div>
                            </form>
                            <div className="nav-tabs-horizontal nav-tabs-animate">
                                <ul className="nav nav-tabs nav-tabs-line">
                                    <li className="nav-item" role="presentation">
                                        <Link className="nav-link" activeClassName="active" role="tab" onClick={() => this.handleTabClick('L')}>
                                            Ils ont aimé votre offre
                                            <span className="tag tag-pill tag-default">{candidacyCounter.fetched ? candidacyCounter.results.like : '...'}</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <Link className="nav-link" activeClassName="active" role="tab" onClick={() => this.handleTabClick('R')}>
                                            Vidéo en attente
                                            <span className="tag tag-pill tag-warning">{candidacyCounter.fetched ? candidacyCounter.results.request : '...'}</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <Link className="nav-link" activeClassName="active" role="tab" onClick={() => this.handleTabClick('V')}>
                                            Vidéo reçu
                                            <span className="tag tag-pill tag-primary">{candidacyCounter.fetched ? candidacyCounter.results.video : '...'}</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <Link className="nav-link" activeClassName="active" role="tab" onClick={() => this.handleTabClick('S')}>
                                            Candidat retenu
                                            <span className="tag tag-pill tag-success">{candidacyCounter.fetched ? candidacyCounter.results.selected : '...'}</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <Link className="nav-link" activeClassName="active" role="tab" onClick={() => this.handleTabClick('N')}>
                                            Candidat non retenu
                                            <span className="tag tag-pill tag-danger">{candidacyCounter.fetched ? candidacyCounter.results.not_selected : '...'}</span>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <ul className="list-group">
                                        {candidacyListResult}
                                    </ul>
                                    <nav>
                                        {candidacyList.pagination && candidacyList.pagination.count > 0 &&
                                            <Pagination
                                                forcePage={this.state.page}
                                                pageCount={candidacyList.pagination.num_pages}
                                                marginPagesDisplayed={1}
                                                pageRangeDisplayed={2}
                                                onPageChange={this.handlePageClick} />
                                        }
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
