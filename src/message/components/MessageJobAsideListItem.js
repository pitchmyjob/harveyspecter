import React from 'react'
import { Link } from 'react-router'

export default class MessageJobAsideListItem extends React.Component {
    render() {
        const { job, isActive } = this.props

        return (
            <Link to={'/messages/' + job.id + '/'} className={'list-group-item' + (isActive ? ' active' : '')} role="tab">
                <span className="list-group-item-content font-weight-400">
                    {job.title}
                </span>
            </Link>
        )
    }
}
