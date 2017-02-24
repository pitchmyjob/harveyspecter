import React from 'react'
import { Link } from 'react-router'

import Loader from '../../core/components/Loader'
import LoadingError from '../../core/components/LoadingError'
import Pagination from '../../core/components/Pagination'
import { getTagClass, getButtonAction } from '../utils'
import { toLocaleDateString } from '../../utils/date'

export default class JobList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchTerm: ''};

        this.searchUpdated = this.searchUpdated.bind(this);
        this.handleSearchFormSubmit = this.handleSearchFormSubmit.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    componentDidMount() {
        this.initialPage = this.props.params.page - 1 || 0
        this.props.listJob(this.props.params.page || null)
        this.props.retrieveCounterJob()
    }

    searchUpdated(event) {
        this.setState({searchTerm: event.target.value})
    }

    handleSearchFormSubmit(event) {
        event.preventDefault()
        this.props.listJob(null, this.state.searchTerm)
        this.props.router.replace({
            pathname: '/jobs/' + (this.state.searchTerm ? '?search=' + this.state.searchTerm : '')
        })
    }

    handlePageClick(data) {
        let newPage = data.selected + 1
        this.props.listJob(newPage, this.state.searchTerm)
        this.props.router.replace({
            pathname: '/jobs/' + newPage + '/' + (this.state.searchTerm ? '?search=' + this.state.searchTerm : '')
        })
    }

    render() {
        const { destroyJob } = this.props
        const { fetched, error, jobs, counter } = this.props.job

        let jobList = null
        if (error) {
            jobList = (
                <tr>
                    <td colSpan="5"><LoadingError /></td>
                </tr>
            )
        }
        else if (fetched) {
            jobList = jobs.results.map((job) => {
                return (
                    <tr key={job.id}>
                        <td className="work-status">
                            <span className={'tag tag-' + getTagClass(job.state.code)}>{job.state.label}</span>
                        </td>
                        <td className="subject">
                            <div className="table-content">
                                <p className="blue-grey-500">
                                    <Link to={'/jobs/' + job.id + '/candidacies/'}>{job.title}</Link>
                                </p>
                                <span className="blue-grey-400">{toLocaleDateString(job.created)} - {job.contract_types_extra.join(', ')} - {job.locality}</span>
                            </div>
                        </td>
                        <td className="text-xs-center"><span className="tag tag-pill tag-danger">{job.candidacy_count}</span></td>
                        <td>{getButtonAction(job.state.code, job.id)}</td>
                        <td className="text-xs-center">
                            <div className="btn-group">
                                <span className="icon wb-menu dropdown-toggle" data-toggle="dropdown" aria-expanded="false"></span>
                                <ul role="menu" className="dropdown-menu dropdown-menu-right">
                                    <li role="presentation">
                                        <Link to={'/jobs/edit/' + job.id + '/'} role="menuitem">Modifier l'offre</Link>
                                    </li>
                                    <li role="presentation">
                                        <a href="#" role="menuitem" onClick={() => destroyJob(job.id)}>Supprimer</a>
                                    </li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                )
            })
        }
        else {
            jobList = (
                <tr>
                    <td colSpan="5"><Loader /></td>
                </tr>
            )
        }

        return (
            <div className="app-work">
                <div className="page-content">
                    <div className="panel">
                        <div className="panel-heading">
                            <form className="panel-search-form" role="search" style={{paddingLeft: 0, marginLeft: 0}} onSubmit={this.handleSearchFormSubmit}>
                                <div className="input-search">
                                    <i className="input-search-icon md-search" aria-hidden="true"></i>
                                    <input type="text" className="form-control" id="inputSearch" name="search" placeholder="Rechercher..." onChange={this.searchUpdated} />
                                </div>
                            </form>
                            <ul className="panel-info">
                                <li>
                                    <div className="num green-600">{counter.fetched ? counter.results.visible : '...'}</div>
                                    <p>En cours</p>
                                </li>
                                <li>
                                    <div className="num red-600">{counter.fetched ? counter.results.expired : '...'}</div>
                                    <p>Expirées</p>
                                </li>
                                <li>
                                    <div className="num orange-600">{counter.fetched ? counter.results.pending : '...'}</div>
                                    <p>En attente</p>
                                </li>
                            </ul>
                        </div>
                        <div className="panel-body">
                            <p>
                                <Link to="/jobs/create/" className="btn btn-success">Ajouter une offre</Link>
                            </p>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Status</th>
                                        <th>Annonces</th>
                                        <th>Candidatures</th>
                                        <th></th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {jobList}
                                </tbody>
                            </table>
                        </div>
                        <div className="panel-footer">
                            <nav>
                                {jobs && !error &&
                                    <Pagination
                                        forcePage={this.initialPage}
                                        pageCount={jobs.num_pages}
                                        marginPagesDisplayed={1}
                                        pageRangeDisplayed={2}
                                        onPageChange={this.handlePageClick} />
                                }
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
