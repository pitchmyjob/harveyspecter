import React from 'react'
import SlidingPane from 'react-sliding-pane'
import 'react-sliding-pane/dist/react-sliding-pane.css'

export default class CandidacyPanel extends React.Component {
    render() {
        return (
            <div>
                <SlidingPane
                    className='slidePanel slidePanel-right slidePanel-show'
                    isOpen={true}
                    onRequestClose={() => {this.props.router.goBack()}}>
                        <header className="slidePanel-header">
                            <div className="overlay-top overlay-panel overlay-background bg-light-green-600">
                                <div className="slidePanel-actions btn-group btn-group-flat" aria-label="actions" role="group">
                                    <div className="dropdown pull-xs-left">
                                        <button type="button" className="btn btn-pure icon md-calendar" data-toggle="dropdown" aria-hidden="true"></button>
                                    </div>
                                    <button type="button" className="btn btn-pure icon md-format-list-bulleted subtask-toggle" aria-hidden="true"></button>
                                    <div className="dropdown pull-xs-left">
                                        <button type="button" className="btn btn-pure icon md-chevron-down" data-toggle="dropdown" aria-hidden="true"></button>
                                        <div className="dropdown-menu dropdown-menu-right bullet" role="menu">
                                            <a className="dropdown-item" href="#" role="menuitem"><i className="icon md-edit" aria-hidden="true"></i>Envoyer le CV</a>
                                            <a className="dropdown-item" href="#" role="menuitem"><i className="icon md-delete" aria-hidden="true"></i> Supprimer</a>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-pure slidePanel-close icon md-close" aria-hidden="true"></button>
                                </div>
                                <h4 className="stage-name"> Tannier Yannis</h4>
                            </div>
                        </header>
                        <div className="slidePanel-inner">
                            <section className="slidePanel-inner-section">
                                <div className="nav-tabs-horizontal" data-plugin="tabs">
                                    <ul className="nav nav-tabs nav-tabs-line" role="tablist">
                                        <li className="nav-item" role="presentation"><a className="nav-link active" data-toggle="tab" href="#exampleTabsLineOne" aria-controls="exampleTabsLineOne" role="tab" aria-expanded="true">CV</a></li>
                                        <li className="nav-item" role="presentation"><a className="nav-link" data-toggle="tab" href="#exampleTabsLineTwo" aria-controls="exampleTabsLineTwo" role="tab" aria-expanded="false">Pré entretien Video</a></li>
                                        <li className="nav-item" role="presentation"><a className="nav-link" data-toggle="tab" href="#exampleTabsLineThree" aria-controls="exampleTabsLineThree" role="tab">Commentaires</a></li>
                                    </ul>
                                    <div className="tab-content p-t-20">
                                        <div className="tab-pane active" id="exampleTabsLineOne" role="tabpanel" aria-expanded="true">
                                            <img src="https://s3-eu-west-1.amazonaws.com/v2-pitchmyjob/static/assets/images/cv-tannier.PNG" alt="" style={{width: '95%'}} />
                                        </div>
                                        <div className="tab-pane" id="exampleTabsLineTwo" role="tabpanel" aria-expanded="false">
                                            <div>Question 1 : Pourquoi voulez-vosu travailler chez nous ? ? </div>
                                            <div className=" player" data-plugin="plyr">
                                                <video poster="https://v2-pitchmyjob.s3-eu-west-1.amazonaws.com/static/assets/examples/images/poster.jpg" controls="" crossorigin="" style={{width: '60%'}}>
                                                    <source type="video/mp4" src="https://cdn.selz.com/plyr/1.0/movie.mp4" />
                                                    <source type="video/webm" src="https://cdn.selz.com/plyr/1.0/movie.webm" />
                                                    <a href="https://cdn.selz.com/plyr/1.0/movie.mp4">Download</a>
                                                </video>
                                            </div>
                                            <br />
                                            <div>Question 2 : Sais tu compter jusqu'a 3 ? </div>
                                            <div className=" player" data-plugin="plyr">
                                                <video poster="https://v2-pitchmyjob.s3-eu-west-1.amazonaws.com/static/assets/examples/images/poster.jpg" controls="" crossorigin="" style={{width: '60%'}}>
                                                    <source type="video/mp4" src="https://cdn.selz.com/plyr/1.0/movie.mp4" />
                                                    <source type="video/webm" src="https://cdn.selz.com/plyr/1.0/movie.webm" />
                                                    <a href="https://cdn.selz.com/plyr/1.0/movie.mp4">Download</a>
                                                </video>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="exampleTabsLineThree" role="tabpanel">
                                            <div className="comments">
                                                <label><i className="icon md-comments m-r-10"></i>Comments</label>
                                                <div className="comments-history">
                                                    <div className="comment media">
                                                        <div className="media-left">
                                                            <a className="avatar avatar-lg" href="#"><img src="https://v2-pitchmyjob.s3-eu-west-1.amazonaws.com/static/portraits/3.jpg" alt="..." /></a>
                                                        </div>
                                                        <div className="media-body">
                                                            <div className="comment-body">
                                                                <a className="comment-author" href="#">Caleb Richards</a>
                                                                <div className="comment-meta"><span className="date">2 days ago</span></div>
                                                                <div className="comment-content">
                                                                    <p>Brute existimant adhibuit effugiendorum artem potiendi sabinum dicat sequitur parabilis, asperner alliciat mutat tale labefactetur corpora, albuci amori velim summam didicisset dubium</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="comment media">
                                                        <div className="media-left"><a className="avatar avatar-lg" href="#"><img src="https://v2-pitchmyjob.s3-eu-west-1.amazonaws.com/static/portraits/3.jpg" alt="..." /></a>
                                                        </div>
                                                        <div className="media-body">
                                                            <div className="comment-body">
                                                                <a className="comment-author" href="#">Mary Adams</a>
                                                                <div className="comment-meta"><span className="date">16 hours ago</span></div>
                                                                <div className="comment-content">
                                                                    <p>Deduceret, stabilitas diligenter stultorum diesque dolemus consoletur aristippus specie exeamu</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="comment media" style={{borderBottom: '0'}}>
                                                    <div className="media-left">
                                                        <a className="avatar avatar-lg" href="#">
                                                        <img src="https://v2-pitchmyjob.s3-eu-west-1.amazonaws.com/static/portraits/3.jpg" alt="..." />
                                                        </a>
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="comment-body">
                                                            <form className="comment-reply m-t-5" method="post" action="#">
                                                                <textarea className="form-control m-b-15" placeholder="Reply" rows="4"></textarea>
                                                                <button className="btn btn-primary" type="button" data-dismiss="modal">Reply</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                </SlidingPane>
            </div>
        )
    }
}
