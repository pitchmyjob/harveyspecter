import React from 'react'

export default class CandidacyList extends React.Component {
    componentDidMount() {
        this.props.listCandidacy(this.props.params.id)
    }

    render() {
        const { fetching, error, candidacies } = this.props.candidacy

        let candidacyList = null;

        if (error) {
            return (
                <p>Error list</p>
            )
        }
        else if (fetching) {
            candidacyList = (
                <tr><td>Chargement...</td></tr>
            )
        }
        else {
            candidacyList = candidacies.map((candidacy) => {
                return (
                    <tr key={candidacy.id}>
                        <td className="work-status">
                            <span className="tag tag-primary">{candidacy.applicant.user.first_name} {candidacy.applicant.user.last_name}</span>
                        </td>
                    </tr>
                )
            })
        }

        return (
            <div className="app-work">
                <div className="page-content">
                    <div className="panel">
                        <div className="panel-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Prénom Nom</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {candidacyList}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
