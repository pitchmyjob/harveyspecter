import React from 'react'

export default class CandidacyListItem extends React.Component {
    render() {
        const { candidacy, handleCandidacyClick } = this.props

        return (
            <li className="list-group-item" key={candidacy.id}  data-toggle="slidePanel" onClick={() => handleCandidacyClick(candidacy)}>
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
    }
}
