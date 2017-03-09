import React from 'react'
import { Link } from 'react-router'


export default class Resumes extends React.Component {

    componentWillMount() {
    }

    render() {
        return (
            <div className="resumes-dashboard">
                <div className="page-content container-fluid p-b-5">
                  <div className="card card-block text-xs-center">
                      <h3 className="card-title m-b-30">Rechercher le candidat idéal</h3>
                      <p className="font-size-16"> text blabla  text blabla  text blabla  text blabla  vtext blabla  text blabla  v  </p>
                      <p className="font-size-16"> text blabla  text blabla  text blabla  text blabla  vtext blabla  text blabla  vtext blabla  text blabla  vtext blabla  text blabla  v  </p>
                      <a href="#" className="btn btn-primary">Créer une offre</a>
                  </div>
               </div>

                <div className="page-content container-fluid p-t-0">
                    <div className="app-projects">

                        <h1 className="page-title font-size-26 font-weight-100">Mes offres</h1>

                        <div className="projects-wrap p-t-15">
                        <ul className="blocks blocks-100 blocks-xxl-5 blocks-lg-4 blocks-md-3 blocks-sm-2" data-plugin="animateList" data-child=">li">


                          <li className="animation-scale-up">
                            <div className="panel resumes-first-panel">
                                  <div className="text-xs-center p-t-40">
                                 <a href="#" className="btn btn-primary ">Créer une offre</a>
                                 </div>
                            </div>
                          </li>

                          <li className="animation-scale-up">
                            <div className="panel ">

                              <figure className="overlay overlay-hover animation-hover m-b-0">
                                <div>
                                    <h4><a>Business developer</a> </h4>
                                    <div className="time">CDI - CDD </div>
                                    <div className="time">Paris, France </div>
                                    <div className="pull-xs-right text-truncate p-t-10">posté le 27-01-2016</div>
                                </div>
                                <figcaption className="overlay-panel overlay-background overlay-fade text-xs-center vertical-align">
                                    <Link to="/resumes/list/">
                                        <button type="button" className="btn btn-outline btn-default project-button">Sourcez</button>
                                    </Link>
                                </figcaption>
                              </figure>
                            </div>
                          </li>

                        </ul>
                      </div>

                    </div>
                  </div>

            </div>
        )
    }
}
