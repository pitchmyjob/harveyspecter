import React from 'react'
import { Link } from 'react-router'

export default class CandidacyListItem extends React.Component {
    render() {
        const { candidacy } = this.props
        const { jobId, status, page } = this.props.params

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
                            <Link to={'/jobs/' + jobId + '/candidacies/' + status + '/' + page + '/cv/' + candidacy.id + '/'}>
                                {candidacy.applicant.user.first_name} {candidacy.applicant.user.last_name}
                            </Link>
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
    }
}
