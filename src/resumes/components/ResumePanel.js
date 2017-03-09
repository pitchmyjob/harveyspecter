import React from 'react'
import SlidingPane from 'react-sliding-pane'
import 'react-sliding-pane/dist/react-sliding-pane.css'


export default class ResumePanel extends React.Component {

    componentWillMount() {
    }

    render() {
        return (
                <SlidingPane
                    className='slidePanel slidePanel-right slidePanel-show'
                    isOpen={true}
                    onRequestClose={() => {this.props.router.goBack()}}>

                    <div className="app-work app-panel" >
                        <header className="card m-0">
                            <div className="card-header white bg-cyan-600 p-30 clearfix">
                                <a className="avatar avatar-100 pull-xs-left m-r-20 img-bordered bg-white" href="#">
                                    <img src="https://spitchapp-dev.s3.amazonaws.com/barney/media/user/photo/default.jpg" alt="" />
                                </a>
                                <div className="pull-xs-left">
                                    <div className="font-size-20 m-b-0">Marion Helly</div>
                                    <p className="m-b-5 text-nowrap">
                                        <span className="text-break font-size-18">Etudiant, Université Avignon Pays Du Vaucluse</span>
                                    </p>
                                    <p className="m-b-5 text-nowrap"><i className="icon wb-map m-r-10" aria-hidden="true"></i>
                                        <span className="text-break"> France Paris </span>
                                    </p>
                                </div>
                            </div>
                            <div className="slidePanel-actions" aria-label="actions" role="group">
                                    <div className="dropdown pull-xs-left">
                                        <button type="button" className="btn btn-pure icon md-chevron-down" data-toggle="dropdown" aria-hidden="true"></button>
                                        <div className="dropdown-menu dropdown-menu-right bullet" role="menu">
                                            <a className="dropdown-item" href="#" role="menuitem"><i className="icon md-edit" aria-hidden="true"></i>Envoyer le CV</a>
                                            <a className="dropdown-item" href="#" role="menuitem"><i className="icon md-delete" aria-hidden="true"></i> Supprimer</a>
                                        </div>
                                    </div>
                                <button type="button" className="btn btn-pure btn-inverse slidePanel-close actions-top icon wb-close" aria-hidden="true"onClick={() => this.props.router.goBack()}></button>
                            </div>
                        </header>
                        <div className="slidePanel-inner p-t-20">
                            <div className="col-sm-6">
                                <button className="btn btn-primary btn-block">Inviter à passer Video </button>
                            </div>
                            <div className="col-sm-6">
                                <button className="btn btn-primary btn-block">Contacter</button>
                            </div>
                        </div>
                    </div>

                </SlidingPane>
        )
    }
}
