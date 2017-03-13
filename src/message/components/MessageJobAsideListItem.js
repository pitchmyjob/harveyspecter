import React from 'react'
import { Link } from 'react-router'

export default class MessageJobAsideListItem extends React.Component {
    render() {
        const { job, isActive } = this.props

        return (


                <Link to={'/messages/' + job.id + '/'} className={'list-group-item' + (isActive ? ' active' : '')} role="tab">

                  <div className="list-content ">
                    <span className="item-right"> <span className="tag tag-success up">5</span> </span>
                    <span className="list-text">{job.title}</span>
                    <div className="item-actions">
                      <span>Sur 150</span>
                    </div>
                  </div>

                </Link>
  

        )
    }
}
