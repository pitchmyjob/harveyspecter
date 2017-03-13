import React from 'react'

import SlidingPane from 'react-sliding-pane'


export default class MessagePanel extends React.Component {

    render() {
        return (

            <SlidingPane
                className='slidePanel slidePanel-right slidePanel-show app-mailbox-custom'
                isOpen={true}
                onRequestClose={() => {this.props.router.goBack()}}>
                    <div className="app-mailbox ">
                        <header className="slidePanel-header">
                          <div className="slidePanel-actions" aria-label="actions" role="group">
                            <button type="button" className="btn btn-icon btn-pure btn-inverse slidePanel-close actions-top icon md-close"
                              aria-hidden="true"></button>
                            <div className="btn-group actions-bottom btn-group-flat" role="group">
                              <div className="pull-xs-left">
                                <button type="button" className="btn btn-icon btn-pure btn-inverse icon md-more" data-toggle="dropdown"
                                  aria-expanded="false" aria-hidden="true"></button>
                                <div className="dropdown-menu dropdown-menu-right" role="menu">
                                  <a className="dropdown-item" href="javascript:void(0)"><i className="icon md-inbox" aria-hidden="true"></i> Archive</a>
                                  <a className="dropdown-item" href="javascript:void(0)"><i className="icon md-alert-circle" aria-hidden="true"></i> Report Spam</a>
                                  <a className="dropdown-item" href="javascript:void(0)"><i className="icon md-delete" aria-hidden="true"></i> Delete</a>
                                  <a className="dropdown-item" href="javascript:void(0)"><i className="icon md-print" aria-hidden="true"></i> Print</a>
                                </div>
                              </div>
                              <button type="button" className="btn btn-icon btn-pure btn-inverse icon md-chevron-left"
                                aria-hidden="true"></button>
                              <button type="button" className="btn btn-icon btn-pure btn-inverse icon md-chevron-right"
                                aria-hidden="true"></button>
                            </div>
                          </div>
                          <h1>Martial Dahan </h1>
                            <div>
                                <div>Offre Developpeur Python</div>
                            </div>
                        </header>
                        <div className="slidePanel-inner">
                          <section className="slidePanel-inner-section">
                            <div className="mail-header">
                              <div className="mail-header-main">
                                <a className="avatar" href="">
                                  <img src="https://v2-pitchmyjob.s3-eu-west-1.amazonaws.com/static/portraits/5.jpg" alt="..." />
                                </a>
                                <div>
                                  <span className="name">Martial Dahan</span>
                                </div>
                                <div><a href="">Mazhesee@gmail.com</a> to <a href="">me</a>

                                </div>
                              </div>
                              <div className="mail-header-right">
                                <span className="time">3 minutes ago</span>
                              </div>
                            </div>
                            <div className="mail-content">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam.
                                Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper
                                sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat.
                                Phasellus at ultricies neque, quis malesuada augue. Donec eleifend condimentum
                                nisl eu consectetur. Integer eleifend, nisl venenatis consequat iaculis,
                                lectus arcu malesuada sem, dapibus porta quam lacus eu neque.Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit. </p>
                              <p>Morbi id neque quam. Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum
                                ullamcorper sodales nisi nec condimentum. Mauris convallis mauris at pellentesque
                                volutpat. Phasellus at ultricies neque, quis malesuada augue. Donec eleifend
                                condimentum nisl eu consectetur. Integer eleifend, nisl venenatis consequat
                                iaculis, lectus arcu malesuada sem, dapibus porta quam lacus eu neque.</p>
                            </div>
                          </section>
                          <section className="slidePanel-inner-section">
                            <div className="mail-header">
                              <div className="mail-header-main">
                                <a className="avatar" href="">
                                  <img src="https://v2-pitchmyjob.s3-eu-west-1.amazonaws.com/static/portraits/5.jpg" alt="..." />
                                </a>
                                <div>
                                  <span className="name">Seevisual</span>
                                </div>
                                <div><a href="">Mazhesee@gmail.com</a> to <a href="">me</a>
                                </div>
                              </div>
                              <div className="mail-header-right">
                                <span className="time">2 minutes ago</span>
                              </div>
                            </div>
                            <div className="mail-content">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam.
                                Aliquam sollicitudin venenatis ipsum ac feugiat. Vestibulum ullamcorper
                                sodales nisi nec condimentum. Mauris convallis mauris at pellentesque volutpat.</p>
                            </div>
                          </section>
                          <section className="slidePanel-inner-section">
                            <div className="mail-header">
                              <div className="mail-header-main">
                                <a className="avatar" href="">
                                  <img src="https://v2-pitchmyjob.s3-eu-west-1.amazonaws.com/static/portraits/5.jpg" alt="..." />
                                </a>
                                <div>
                                  <span className="name">Seevisual</span>
                                </div>
                                <div><a href="javascript:void(0)">Mazhesee@gmail.com</a> to <a href="">me</a>
                                </div>
                              </div>
                              <div className="mail-header-right">
                                <span className="time">1 minutes ago</span>
                              </div>
                            </div>
                            <div className="mail-content">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam.
                                Aliquam sollicitudin venenatis ipsum ac feugiat. </p>
                            </div>
                          </section>
                          <div className="slidePanel-comment">
                            <textarea className="maxlength-textarea form-control mb-sm m-b-20" rows="4"></textarea>
                            <button className="btn btn-primary" data-dismiss="modal" type="button">Reply</button>
                          </div>
                        </div>
                    </div>
             </SlidingPane>
        )
    }
}
