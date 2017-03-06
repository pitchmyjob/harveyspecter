import React from 'react'

export default class CandidacyPanel extends React.Component {
    render() {
        return (
            <div style={{display: 'none'}} data-slide-panel={this.props.params.candidacyId}>
                <p>
                    Bonjour c'est moi, maximilien raulic. Tu vois le délire ?
                </p>
            </div>
        )
    }
}
