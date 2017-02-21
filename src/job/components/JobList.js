import React from 'react'
import { Link } from 'react-router'

export default class JobList extends React.Component {
    componentDidMount() {
        this.props.listJob()
    }

    render() {
        const { destroyJob } = this.props
        const { fetching, error, jobs } = this.props.job

        let jobList = null;

        if (error) {
            return (
                <p>Error list</p>
            )
        }
        else if (fetching) {
            jobList = (
                <tr><td colSpan="4">Chargement...</td></tr>
            )
        }
        else {
            jobList = jobs.map((job) => {
                return (
                    <tr key={job.id}>
                        <td className="work-status">
                            <span className="tag tag-primary">{job.state}</span>
                        </td>
                        <td className="subject">
                            <div className="table-content">
                                <p className="blue-grey-500">{job.title}</p>
                                <span className="blue-grey-400">{job.created} - {job.contract_types_extra.join(', ')}</span>
                            </div>
                        </td>
                        <td></td>
                        <td>
                            <Link to={'/jobs/edit/' + job.id + '/'}>Modifier</Link>
                            <button onClick={() => destroyJob(job.id)}>Supprimer</button>
                        </td>
                    </tr>
                )
            })
        }

        return (
            <div className="app-work">
                <div className="page-content">
                    <div className="panel">
                        <div className="panel-heading">
                            <form className="panel-search-form" role="search" style={{paddingLeft: 0, marginLeft: 0}}>
                                <div className="input-search">
                                    <i className="input-search-icon md-search" aria-hidden="true"></i>
                                    <input type="text" className="form-control" id="inputSearch" name="search" placeholder="Rechercher..." />
                                </div>
                            </form>
                            <ul className="panel-info">
                                <li>
                                    <div className="num green-600">23</div>
                                    <p>En cours</p>
                                </li>
                                <li>
                                    <div className="num red-600">8</div>
                                    <p>Expirées</p>
                                </li>
                                <li>
                                    <div className="num orange-600">5</div>
                                    <p>En attente</p>
                                </li>
                            </ul>
                        </div>
                        <p>
                            <Link to="/jobs/create/">Ajouter une offre</Link>
                        </p>
                        <div className="panel-body">
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
                                <ul data-plugin="paginator" data-total="50" data-skin="pagination-gap" className="pagination pagination-gap">
                                    <li className="pagination-prev page-item">
                                        <a className="page-link" href="#">
                                            <span>Previous</span>
                                        </a>
                                    </li>
                                    <li className="pagination-items page-item" data-value="1"><a className="page-link" href="#">1</a></li>
                                    <li className="pagination-items page-item" data-value="2"><a className="page-link" href="#">2</a></li>
                                    <li className="pagination-items page-item" data-value="3"><a className="page-link" href="#">3</a></li>
                                    <li className="pagination-items page-item" data-value="4"><a className="page-link" href="#">4</a></li>
                                    <li className="pagination-items page-item active" data-value="5"><a className="page-link" href="#">5</a></li>
                                    <li className="pagination-items page-item disabled">
                                        <a className="page-link" href="#">
                                            <span>Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
