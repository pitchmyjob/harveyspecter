import React from 'react'
import SlidingPane from 'react-sliding-pane'
import 'react-sliding-pane/dist/react-sliding-pane.css'

import Loader from '../../core/components/Loader'
import LoadingError from '../../core/components/LoadingError'

export default class CandidacyPanel extends React.Component {
    componentDidMount() {
        this.props.retrieveCandidacy(this.props.params.candidacyId)
    }

    render() {
        const { candidacyActive } = this.props

        let candidacyResult = null
        if (candidacyActive.error) {
            candidacyResult = <LoadingError />
        }
        else if (candidacyActive.fetched) {
            const { candidacy } = candidacyActive

            candidacyResult = (
                <div className="app-work app-panel" >

                    <header className="card m-0">
                        <div className="card-header white bg-cyan-600 p-30 clearfix">
                          <a className="avatar avatar-100 pull-xs-left m-r-20 img-bordered bg-white" href="javascript:void(0)" >
                            <img src={candidacy.applicant.user.photo} alt="" />
                          </a>
                          <div className="pull-xs-left">
                            <div className="font-size-20 m-b-0">{candidacy.applicant.user.first_name} {candidacy.applicant.user.last_name}</div>
                            <p className="m-b-5 text-nowrap">
                              <span className="text-break font-size-18">{candidacy.applicant.title}</span>
                            </p>
                            <p className="m-b-5 text-nowrap"><i className="icon wb-map m-r-10" aria-hidden="true"></i>
                              <span className="text-break">{candidacy.applicant.country} {candidacy.applicant.locality}</span>
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


                    <div className="slidePanel-inner  p-0">
                        <section className="slidePanel-inner-section p-t-5">
                            <div className="nav-tabs-horizontal" data-plugin="tabs">
                                <ul className="nav nav-tabs nav-tabs-line cv-panel-3" role="tablist">
                                    <li className="nav-item " role="presentation"><a className="nav-link active" data-toggle="tab" href="#exampleTabsLineOne" aria-controls="exampleTabsLineOne" role="tab" aria-expanded="true">CV du candidat</a></li>
                                    <li className="nav-item" role="presentation"><a className="nav-link" data-toggle="tab" href="#exampleTabsLineTwo" aria-controls="exampleTabsLineTwo" role="tab" aria-expanded="false">Video</a></li>
                                    <li className="nav-item" role="presentation"><a className="nav-link" data-toggle="tab" href="#exampleTabsLineThree" aria-controls="exampleTabsLineThree" role="tab">Commentaires</a></li>
                                </ul>
                                <div className="tab-content p-t-20 p-x-20">

                                    <div className="tab-pane active" id="exampleTabsLineOne" role="tabpanel" aria-expanded="true">

                                        <div className="user-background card card-shadow">
                                                <div className="card-header card-header-transparent p-20">
                                                  <h4 className="card-title m-b-0 text-uppercase">Information au recruteur</h4>
                                                </div>

                                                    <div className="card-block p-t-5">
                                                            <table>
                                                                <tr className="p-y-10 ">
                                                                    <td className="p-r-25"> Coordonnées </td>
                                                                    <td className="p-b-10">
                                                                        <div> {candidacy.applicant.user.email}  </div>
                                                                    </td>
                                                                </tr>

                                                                <tr className="p-y-10">
                                                                    <td className="p-r-25"> Poste recherchés </td>
                                                                    <td className="p-b-10">
                                                                        <div className="tags">
                                                                            {
                                                                                candidacy.applicant.wanted_jobs.map((job) => {
                                                                                    return (
                                                                                        <button key={job} type="button" className="btn btn-outline btn-default m-r-10"> {job} </button>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </div>
                                                                    </td>
                                                                </tr>

                                                                <tr className="p-y-10">
                                                                    <td className="p-r-25"> Contrat recherchés </td>
                                                                    <td className="p-b-10">
                                                                          <div className="tags">
                                                                            <button type="button" className="btn btn-outline btn-default">CDI</button>
                                                                          </div>
                                                                    </td>
                                                                </tr>

                                                            </table>
                                                    </div>

                                                <div className="card-header card-header-transparent p-20">
                                                  <h4 className="card-title m-b-0 text-uppercase">Information sur le candidat</h4>
                                                </div>

                                                 <div className="card-block p-t-5">
                                                  <h5 className="card-title font-size-16">
                                                    <i className="icon wb-clipboard"></i>
                                                    <span>Description</span>
                                                  </h5>
                                                  <p className="card-text">
                                                      {candidacy.applicant.description}
                                                  </p>
                                                </div>
                                                <div className="card-block p-t-5 p-b-0">
                                                  <h5 className="card-title p-b-5 font-size-16">
                                                    <i className="icon wb-briefcase"></i>
                                                    <span>Experience</span>
                                                  </h5>
                                                  <ul className="timeline timeline-single">
                                                      {
                                                        candidacy.applicant.experiences.map((experience) => {
                                                            return (

                                                                <li className="timeline-item" key={experience.id}>
                                                                  <div className="timeline-dot"></div>
                                                                  <div className="timeline-content">

                                                                    <span className="block font-weight-400 m-b-5">{experience.position}</span>
                                                                    <span className="block m-b-5">{experience.company}</span>
                                                                    <span className="block m-b-5">{experience.description}</span>
                                                                  </div>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                  </ul>
                                                </div>
                                                <div className="card-block p-t-5 p-b-0">
                                                      <h5 className="card-title p-b-5 font-size-16">
                                                        <i className="icon wb-flag"></i>
                                                        <span>Formations</span>
                                                      </h5>
                                                      <ul className="timeline timeline-single">
                                                          {
                                                            candidacy.applicant.educations.map((education) => {
                                                                return (

                                                                    <li className="timeline-item" key={education.id}>
                                                                      <div className="timeline-dot"></div>
                                                                      <div className="timeline-content">

                                                                        <span className="block font-weight-400 m-b-5">{education.degree}</span>
                                                                        <span className="block m-b-5">{education.school}</span>
                                                                        <span className="block m-b-5">{education.date_start}  {education.data_end}</span>
                                                                      </div>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                      </ul>
                                                </div>
                                                <div className="card-block p-t-5 p-b-0">
                                                      <h5 className="card-title p-b-5 font-size-16">
                                                        <i className="icon wb-share"></i>
                                                        <span>Competences</span>
                                                      </h5>
                                                        {
                                                            candidacy.applicant.skills.map((skill) => {
                                                                return (
                                                                    <span key={skill.id} className="tag m-b-10 m-r-10 tag-primary font-weight-400 font-size-14">{skill.name}</span>
                                                                )
                                                            })
                                                        }
                                                </div>
                                                <div className="card-block p-t-15 p-b-0">
                                                      <h5 className="card-title p-b-5 font-size-16">
                                                        <i className="icon wb-chat"></i>
                                                        <span>Languages</span>
                                                      </h5>
                                                        {
                                                            candidacy.applicant.languages.map((language) => {
                                                                return (
                                                                    <span key={language.id} className="tag m-b-10 m-r-10 tag-default font-weight-400 font-size-14">{language.name}</span>
                                                                )
                                                            })
                                                        }
                                                </div>
                                                <div className="card-block p-t-15 p-b-0">
                                                      <h5 className="card-title p-b-5 font-size-16">
                                                        <i className="icon wb-star"></i>
                                                        <span>Interets</span>
                                                      </h5>
                                                        {
                                                            candidacy.applicant.interests.map((interest) => {
                                                                return (
                                                                    <span key={interest.id} className="tag m-b-10 m-r-10 tag-default font-weight-400 font-size-14">{interest.name}</span>
                                                                )
                                                            })
                                                        }
                                                </div>
                                          </div>

                                    </div>

                                    <div className="tab-pane" id="exampleTabsLineTwo" role="tabpanel" aria-expanded="false">
                                        <div>Question 1 : Pourquoi voulez-vosu travailler chez nous ? ? </div>
                                        <div className=" player" data-plugin="plyr">
                                            <video poster="https://v2-pitchmyjob.s3-eu-west-1.amazonaws.com/static/assets/examples/images/poster.jpg" controls="" crossOrigin="" style={{width: '60%'}}>
                                                <source type="video/mp4" src="https://cdn.selz.com/plyr/1.0/movie.mp4" />
                                                <source type="video/webm" src="https://cdn.selz.com/plyr/1.0/movie.webm" />
                                                <a href="https://cdn.selz.com/plyr/1.0/movie.mp4">Download</a>
                                            </video>
                                        </div>
                                    </div>

                                    <div className="tab-pane" id="exampleTabsLineThree" role="tabpanel">
                                        <div className="comments">
                                            <label><i className="icon md-comments m-r-10"></i>Commentaire sur le candidat</label>
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
                </div>
            )
        }
        else {
            candidacyResult = <Loader />
        }

        return (
            <div>
                <SlidingPane
                    className='slidePanel slidePanel-right slidePanel-show'
                    isOpen={true}
                    onRequestClose={() => {this.props.router.goBack()}}>
                        {candidacyResult}
                </SlidingPane>
            </div>
        )
    }
}
