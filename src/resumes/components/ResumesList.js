import React from 'react'
import { Link } from 'react-router'


export default class ResumesList extends React.Component {

    componentWillMount() {
    }

    render() {
        return (
            <div className="bg-white app-mailbox page-aside-left">
                <div className="page-aside">
                      <div className="page-aside-switch">
                        <i className="icon wb-chevron-left" aria-hidden="true"></i>
                        <i className="icon wb-chevron-right" aria-hidden="true"></i>
                      </div>
                      <div className="page-aside-inner page-aside-scroll">
                        <div data-role="container">
                          <div data-role="content">
                            <section className="page-aside-section">
                              <h5 className="page-aside-title">Mes offres</h5>
                              <div className="list-group">
                                <a className="list-group-item" href="javascript:void(0)">
                                  <span className="list-group-item-content font-weight-400">Community Manager</span>
                                  <div className="metas">15/02/2017 - Stage</div>
                                </a>
                                <a className="list-group-item" href="javascript:void(0)">
                                  <span className="list-group-item-content font-weight-400">Developpeur Python</span>
                                  <div className="metas">14/02/2017 - CDI</div>
                                </a>
                                <a className="list-group-item" href="javascript:void(0)">
                                  <span className="list-group-item-content font-weight-400">Business developper</span>
                                  <div className="metas">25/02/2017 - CDI</div>
                                </a>
                              </div>
                            </section>

                          </div>
                        </div>
                      </div>
                </div>


                <div className="page-main">
                    <div className="page-header">
                        <h1 className="page-title">CvTheque Business Developer</h1>
                        <div className="page-header-actions">
                          <form>
                            <div className="input-search input-search-dark">
                              <i className="input-search-icon wb-search" aria-hidden="true"></i>
                              <input type="text" className="form-control" name="" placeholder="Search..." />
                            </div>
                          </form>
                        </div>
                      </div>

                       <div className="page-content-table" data-plugin="selectable">
                            <div className="page-content-actions">
                              <div className="pull-xs-left filter">
                                <span>Filter :</span>
                                <div className="dropdown">
                                  <button type="button" className="btn btn-pure" data-toggle="dropdown" aria-expanded="false">
                                    Check all
                                    <span className="icon wb-chevron-down-mini" aria-hidden="true"></span>
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-right animation-scale-up animation-top-right animation-duration-250"
                                  role="menu">
                                    <a className="dropdown-item" href="javascript:void(0)">Check read</a>
                                    <a className="dropdown-item" href="javascript:void(0)">Check unread</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="javascript:void(0)">French</a>
                                    <a className="dropdown-item" href="javascript:void(0)">Spanish</a>
                                  </div>
                                </div>
                              </div>
                              <div className="actions-main">

                              </div>
                            </div>

                                <table id="mailboxTable" className="table no-underline" data-plugin="animateList" data-animate="fade" data-child="tr">
                                  <tbody>
                                    <tr id="mid_1">

                                              <td className="cell-30 responsive-hide">
                                              </td>
                                              <td className="cell-100 responsive-hide">
                                                <a className="avatar" href="javascript:void(0)">
                                                  <img className="img-fluid" src="https://s3-eu-west-1.amazonaws.com/spitchapp-dev/harvey/static/global/portraits/5.jpg" alt="..." />
                                                </a>
                                              </td>
                                              <td>
                                                <div className="content">
                                                    <Link to="/resumes/panel/">
                                                  <div className="title font-weight-400 font-size-16">
                                                      Maximilien Raulic <span className="font-weight-300"> - Developper python django react aws</span>
                                                    </div>
                                                        </Link>
                                                  <div className="metas">
                                                      <span className="tags">Master 1 </span>
                                                      <span className="tags">Experience 2-3 ans </span>
                                                      <span className="tags">Paris, France</span>
                                                    </div>
                                                </div>

                                              </td>
                                              <td className="cell-30 responsive-hide">
                                              </td>
                                              <td className="cell-130">
                                                <div className="time">27/20/2019</div>
                                              </td>
                                    </tr>
                                  </tbody>
                                </table>

                                <ul className="pagination pagination-gap m-b-20">
                                    <li className="disabled page-item"><a className="page-link" href="javascript:void(0)">Previous</a></li>
                                    <li className="active page-item"><a className="page-link" href="javascript:void(0)">1 <span className="sr-only">(current)</span></a></li>
                                    <li className="page-item"><a className="page-link" href="javascript:void(0)">2</a></li>
                                    <li className="page-item"><a className="page-link" href="javascript:void(0)">3</a></li>
                                    <li className="page-item"><a className="page-link" href="javascript:void(0)">4</a></li>
                                    <li className="page-item"><a className="page-link" href="javascript:void(0)">5</a></li>
                                    <li className="page-item"><a className="page-link" href="javascript:void(0)">Next</a></li>
                               </ul>
                          </div>


                </div>
                {this.props.children}
            </div>
        )
    }
}
