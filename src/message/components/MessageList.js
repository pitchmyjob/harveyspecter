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

        let currentJob = null
        if (!jobList.error && jobList.fetched && jobId) {
            currentJob = jobList.jobs.find((job) => {
                return job.id === jobId
            })
        }

        return (
            <div className="bg-white app-mailbox page-aside-left">
                <MessageJobAsideList
                    jobList={jobList}
                    currentJobId={jobId}
                />
                <div className="page-main">
                    {
                        jobId &&
                        <MessageJobCandidacyList
                            jobCandidacyMessageList={jobCandidacyMessageList}
                            currentJob={currentJob}
                            currentCandidacy={candidacyId}
                        />
                    }
                    {
                        !jobId &&
                        <p>Veuillez selectionner une offre pour afficher les conversations liées</p>
                    }
                </div>
                {this.props.children}
            </div>
        )
    }
}
