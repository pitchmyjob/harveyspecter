import React from 'react'
import { Link } from 'react-router'

import { toLocaleDateString } from '../../utils/date'

export default class CandidacyListItem extends React.Component {
    render() {
        const { candidacy } = this.props
        const { jobId, status, page } = this.props.params

        return (
            <tr key={candidacy.id}>
                <td className="w-100">
                    <div className="btn-group">
                            <button type="button" className="btn btn-outline btn-default dropdown-toggle btn-xs" id="exampleSizingDropdown3" data-toggle="dropdown" aria-expanded="false">
                             CV Recu &nbsp;
                            </button>
                            <div className="dropdown-menu" aria-labelledby="exampleSizingDropdown3" role="menu">
                              <a className="dropdown-item" href="#" role="menuitem">Action</a>
                              <a className="dropdown-item" href="#" role="menuitem">Another action</a>
                            </div>
                      </div>
                </td>
                <td className="w-50">
                   <div className="media-left">
                        <div className="avatar">
                            <img src={candidacy.applicant.user.photo} alt="..." />
                        </div>
                    </div>
                </td>
                <td className="subject">
                    <div className="table-content">
                        <p className="blue-grey-500">
                            <Link to={'/jobs/' + jobId + '/candidacies/' + status + '/' + page + '/cv/' + candidacy.id + '/'}>
                                {candidacy.applicant.user.first_name} {candidacy.applicant.user.last_name}
                            </Link>
                        </p>
                        <p>
                            {candidacy.applicant.title}
                        </p>
                    </div>
                </td>
                <td className="text-xs-center">
                    <span> {toLocaleDateString(candidacy.date_matching)} </span>
                </td>
            </tr>
        )
    }
}
