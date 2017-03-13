import React from 'react'
import { Link } from 'react-router'

export default class MessageJobCandidacyListItem extends React.Component {
    render() {
        const { jobCandidacyMessage, isActive } = this.props

        return (
            <Link className={'list-group-item' + (isActive ? ' active' : '')} role="tab">
                <span className="list-group-item-content font-weight-400">
                    {jobCandidacyMessage.applicant.first_name} {jobCandidacyMessage.applicant.last_name}
                </span>
            </Link>
        )
    }
}
