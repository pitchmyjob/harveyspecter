import React from 'react'

export default class JobList extends React.Component {
    componentDidMount() {
        this.props.listJob()
    }

    render() {
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
                            {job.created}
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                )
            })
        }

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Annonces</th>
                            <th></th>
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
