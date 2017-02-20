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
                        <td>
                            {job.title}<br />
                            {job.created} - {job.contract_types_extra.join(', ')}
                        </td>
                        <td>
                            <Link to={'/jobs/edit/' + job.id + '/'}>Modifier</Link>
                            <button onClick={() => destroyJob(job.id)}>Supprimer</button>
                        </td>
                    </tr>
                )
            })
        }

        return (
            <div>
                <p>
                    <Link to="/jobs/create/">Ajouter une offre</Link>
                </p>
                <table>
                    <thead>
                        <tr>
                            <th>Annonces</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobList}
                    </tbody>
                </table>
            </div>
        )
    }
}
