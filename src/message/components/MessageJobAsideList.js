import React from 'react'

import Loader from '../../core/components/Loader'
import LoadingError from '../../core/components/LoadingError'
import MessageJobAsideListItem from './MessageJobAsideListItem'

export default class MessageJobAsideList extends React.Component {
    render() {
        const { jobList, currentJob } = this.props

        let jobListResult = null
        if (jobList.error) {
            jobListResult = (
                <a className="list-group-item" href="#">
                    <LoadingError />
                </a>
            )
        }
        else if (jobList.fetched) {
            if (jobList.fetched) {
                if (jobList.jobs.length > 0) {
                    jobListResult = jobList.jobs.map((job) => {
                        return (
                            <MessageJobAsideListItem
                                key={job.id}
                                job={job}
                                isActive={(job.id === currentJob)}
                            />
                        )
                    })

                    jobListResult = <div>{jobListResult}</div>
                }
                else {
                    jobListResult = (
                        <a className="list-group-item" href="#">
                            Aucune offre en cours
                        </a>
                    )
                }
            }
        }
        else {
            jobListResult = (
                <a className="list-group-item" href="#">
                    <Loader />
                </a>
            )
        }

        return jobListResult
    }
}
