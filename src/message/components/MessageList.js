import React from 'react'

import MessageJobAsideList from './MessageJobAsideList'
import MessageJobCandidacyList from './MessageJobCandidacyList'

export default class ResumesList extends React.Component {
    componentDidMount() {
        this.props.listJob()

        const jobId = parseInt(this.props.params.jobId, 10) || null
        if (jobId) {
            this.props.listJobCandidacyMessage(jobId)
        }
    }

    render() {
        const { jobList, jobCandidacyMessageList } = this.props

        const jobId = parseInt(this.props.params.jobId, 10) || null
        const candidacyId = parseInt(this.props.params.candidacyId, 10) || null

        return (
            <div>
                <MessageJobAsideList
                    jobList={jobList}
                    currentJob={jobId}
                />
                {
                    jobId &&
                    <MessageJobCandidacyList
                        jobCandidacyMessageList={jobCandidacyMessageList}
                        currentJob={jobId}
                        currentCandidacy={candidacyId}
                    />
                }
                {
                    !jobId &&
                    <div>
                        Veuillez selectionner une offre pour afficher les conversations liées
                    </div>
                }
            </div>
        )
    }
}
