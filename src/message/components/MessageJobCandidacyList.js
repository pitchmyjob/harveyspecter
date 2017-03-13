import React from 'react'

import Loader from '../../core/components/Loader'
import LoadingError from '../../core/components/LoadingError'
import MessageJobCandidacyListItem from './MessageJobCandidacyListItem'

export default class MessageJobCandidacyList extends React.Component {
    render() {
        const { jobCandidacyMessageList, currentJob, currentCandidacy } = this.props

        let resultList = null
        if (jobCandidacyMessageList.error) {
            resultList = (
                <a className="list-group-item" href="#">
                    <LoadingError />
                </a>
            )
        }
        else if (jobCandidacyMessageList.fetched) {
            if (jobCandidacyMessageList.fetched) {
                if (jobCandidacyMessageList.jobCandidacyMessages.length > 0) {
                    resultList = jobCandidacyMessageList.jobCandidacyMessages.map((jobCandidacyMessage) => {
                        return (
                            <MessageJobCandidacyListItem
                                key={jobCandidacyMessage.id}
                                jobCandidacyMessage={jobCandidacyMessage}
                                isActive={(jobCandidacyMessage.id === currentCandidacy)}
                            />
                        )
                    })

                    resultList = <div>{resultList}</div>
                }
                else {
                    resultList = (
                        <a className="list-group-item" href="#">
                            Aucune conversation pour cette offre
                        </a>
                    )
                }
            }
        }
        else {
            resultList = (
                <a className="list-group-item" href="#">
                    <Loader />
                </a>
            )
        }

        return resultList
    }
}
