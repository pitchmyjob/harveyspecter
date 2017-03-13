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
            <div className="bg-white app-mailbox page-aside-left">
                <div className="page-aside">
                    <div className="page-aside-switch">
                        <i className="icon md-chevron-left" aria-hidden="true"></i>
                        <i className="icon md-chevron-right" aria-hidden="true"></i>
                    </div>

                    <div className="page-aside-inner page-aside-scroll">
                        <div data-role="container">
                          <div data-role="content">
                            <div className="page-aside-section">
                              <div className="list-group">
                                <a className="list-group-item" href="">
                                  <span className="item-right">61</span><i className="icon md-inbox" aria-hidden="true"></i>All
                                  messages
                                </a>
                              </div>
                            </div>
                            <div className="page-aside-section">
                              <h5 className="page-aside-title">Par offre active</h5>

                              <div className="list-group has-actions">

                                  <MessageJobAsideList
                                    jobList={jobList}
                                    currentJob={jobId}
                                  />

                              </div>
                            </div>

                            <div className="page-aside-section">
                              <h5 className="page-aside-title">Par Offre expiré</h5>

                              <div className="list-group has-actions">


                                <div className="list-group-item">
                                  <div className="list-content">
                                    <span className="item-right active"><span className="badge badge-success">6</span></span>
                                    <span className="list-text">Product Owner</span>
                                    <div className="item-actions">
                                      <span>Sur 150</span>
                                    </div>
                                  </div>
                                </div>

                                <div className="list-group-item">
                                  <div className="list-content">
                                    <span className="item-right">10</span>
                                    <span className="list-text">Integration</span>
                                    <div className="item-actions">
                                      <span>/150</span>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div>


                          </div>
                        </div>
                      </div>
                 </div>


                <div className="page-main">
                    <div className="page-header">
                        <h1 className="page-title">Growth hacker</h1>
                        <div className="tags">
                            <span className="tag tag-default m-r-5 m-b-5">Management</span>
                            <span className="tag tag-default m-r-5 m-b-5">Gros hacker</span>
                            -
                            <span> Publié</span> le 15 Mars
                        </div>
                        <div className="page-header-actions">
                          <form>
                            <div className="input-search input-search-dark">
                              <i className="input-search-icon md-search" aria-hidden="true"></i>
                              <input type="text" className="form-control" name="" placeholder="Search..." />
                            </div>
                          </form>
                        </div>
                    </div>

                    <div id="mailContent" className="page-content page-content-table" data-plugin="asSelectable">
                        <div className="page-content-actions">
                          <div className="pull-xs-right filter">
                            <span>Filter :</span>
                            <div className="dropdown">
                              <button type="button" className="btn btn-pure" data-toggle="dropdown" aria-expanded="false">
                                Check all
                                <span className="icon md-chevron-down" aria-hidden="true"></span>
                              </button>
                              <div className="dropdown-menu dropdown-menu-right animation-scale-up animation-top-right animation-duration-250"
                              role="menu">
                                <a className="dropdown-item" href="">Check read</a>
                                <a className="dropdown-item" href="">Check unread</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="">French</a>
                                <a className="dropdown-item" href="">Spanish</a>
                              </div>
                            </div>
                          </div>
                          <div className="actions-main">
                            <span className="checkbox-custom checkbox-primary checkbox-lg inline-block vertical-align-bottom">
                              <input type="checkbox" className="mailbox-checkbox selectable-all" id="select_all" />
                              <label></label>
                            </span>
                            <div className="btn-group">
                              <div className="dropdown">
                                <button className="btn btn-icon btn-pure btn-default" data-toggle="dropdown" aria-expanded="false" type="button">
                                    <i className="icon md-folder" aria-hidden="true" data-toggle="tooltip"
                                  data-original-title="Folder" data-container="body" title=""></i></button>
                                <div className="dropdown-menu" role="menu">
                                  <a className="dropdown-item" href="">work</a>
                                  <a className="dropdown-item" href="">Family</a>
                                  <a className="dropdown-item" href="">Private</a>
                                  <a className="dropdown-item" href="">Friends</a>
                                  <div className="dropdown-divider"></div>
                                  <a className="dropdown-item" href="">Trash</a>
                                  <a className="dropdown-item" href="">Spam</a>
                                </div>
                              </div>
                              <div className="dropdown">
                                <button className="btn btn-icon btn-pure btn-default" data-toggle="dropdown" aria-expanded="false"
                                type="button"><i className="icon md-tag" aria-hidden="true" data-toggle="tooltip"
                                  data-original-title="Tag" data-container="body" title=""></i></button>
                                <div className="dropdown-menu" role="menu">
                                  <a className="dropdown-item" href="">work</a>
                                  <a className="dropdown-item" href="">Family</a>
                                  <a className="dropdown-item" href="">Private</a>
                                  <a className="dropdown-item" href="">Friends</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <table id="mailboxTable" className="table" data-plugin="animateList" data-animate="fade" data-child="tr">
                          <tbody>
                            <tr id="mid_7" data-url="panel-email.html" data-toggle="slidePanel" className="unread">
                              <td className="cell-60">
                                <span className="checkbox-custom checkbox-primary checkbox-lg">
                                  <input type="checkbox" className="mailbox-checkbox selectable-item" id="mail_mid_7" />
                                  <label htmlFor="mail_mid_7"></label>
                                </span>
                              </td>
                              <td className="cell-30 responsive-hide">
                                <span className="checkbox-important checkbox-default">
                                  <input type="checkbox" className="mailbox-checkbox mailbox-important" id="mail_mid_7_important" />
                                  <label htmlFor="mail_mid_7_important"></label>
                                </span>
                              </td>
                              <td className="cell-60 responsive-hide">
                                <a className="avatar" href="">
                                  <img className="img-fluid" src="https://v2-pitchmyjob.s3-eu-west-1.amazonaws.com/static/portraits/11.jpg" alt="..." />
                                </a>
                              </td>
                              <td>
                                <div className="content">
                                  <div className="title">Antoine Boudic</div>
                                  <div className="abstract">Bonjour, merci d'avoir postuler, t'as l'air bonne, peux tu venir nous s...
                                  </div>
                                </div>
                              </td>
                              <td className="cell-30 responsive-hide">
                              </td>
                              <td className="cell-130">
                                <div className="time">30 hours ago</div>
                              </td>
                            </tr>

                            <tr id="mid_8" data-url="panel-email.html" data-toggle="slidePanel" className="">
                              <td className="cell-60">
                                <span className="checkbox-custom checkbox-primary checkbox-lg">
                                  <input type="checkbox" className="mailbox-checkbox selectable-item" id="mail_mid_7" />
                                  <label htmlFor="mail_mid_7"></label>
                                </span>
                              </td>
                              <td className="cell-30 responsive-hide">
                                <span className="checkbox-important checkbox-default">
                                  <input type="checkbox" className="mailbox-checkbox mailbox-important" id="mail_mid_7_important" />
                                  <label htmlFor="mail_mid_7_important"></label>
                                </span>
                              </td>
                              <td className="cell-60 responsive-hide">
                                <a className="avatar" href="">
                                  <img className="img-fluid" src="https://v2-pitchmyjob.s3-eu-west-1.amazonaws.com/static/portraits/11.jpg" alt="..." />
                                </a>
                              </td>
                              <td>
                                <div className="content">
                                  <div className="title">Martial Dahan</div>
                                  <div className="abstract">Cum personae causas hae diligamus opibus morbi formidinum voluntates.
                                  </div>
                                </div>
                              </td>
                              <td className="cell-30 responsive-hide">
                              </td>
                              <td className="cell-130">
                                <div className="time">30 hours ago</div>
                              </td>
                            </tr>



                          </tbody>
                        </table>

                        <ul className="pagination pagination-gap m-b-20">

                        </ul>


                    </div>
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
                
                {this.props.children}
            </div>
        )
    }
}
