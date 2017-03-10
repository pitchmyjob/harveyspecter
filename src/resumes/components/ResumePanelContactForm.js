import React from 'react'

export default class ResumePanelContactForm extends React.Component {
    render() {
        const { onClose } = this.props

        return (
            <div className="modal fade modal-fill-in in " id="exampleFillIn" aria-hidden="false" aria-labelledby="exampleFillIn" role="dialog" tabIndex="-1" style={{display: 'block'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => onClose()}>
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 className="modal-title" id="exampleFillInModalTitle">Envoyer un message à Maxmilien</h4>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row">
                                    <div className="col-xl-12 col-xs-12 form-group">
                                        <textarea className="form-control" rows="5" placeholder="Veuillez ecrire votre message"></textarea>
                                    </div>
                                    <div className="col-xs-12 col-md-12 ">
                                        <button className="btn btn-primary btn-outline pull-xs-right" data-dismiss="modal" type="button">Envoyer</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
