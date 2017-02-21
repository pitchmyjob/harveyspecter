import React from 'react'
import { Link } from 'react-router'
import { Field } from 'redux-form'

import { renderAuthInput  } from '../../utils/forms/renderers'
import { isRequired, isEmail, minLength } from '../../utils/forms/validators'

export default class UserLoginForm extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    render() {
        const { handleSubmit, pristine, submitting, error } = this.props

        return (
            <div className="page-login-v3 layout-full">
                <div className="page vertical-align text-xs-center" data-animsition-in="fade-in" data-animsition-out="fade-out">
                    <div className="page-content vertical-align-middle animation-slide-top animation-duration-1">
                        <div className="panel">
                            <div className="panel-body">

                                <div className="brand">

                                  <img className="brand-img" src="https://s3-eu-west-1.amazonaws.com/spitchapp-dev/static/assets/images/logo-blue.png" />
                                  <h2 className="brand-text font-size-18">Spitch</h2>
                                  <p>Sign up to find interesting thing</p>
                                </div>

                                {error && <p>{error}</p>}
                                <form onSubmit={handleSubmit} role="form" autoComplete="off">

                                    <Field
                                        name="email"
                                        component={renderAuthInput}
                                        type="email"
                                        validate={[isRequired, isEmail]}
                                        placeholder="Adresse e-mail" />
                                    <Field
                                        name="password"
                                        component={renderAuthInput}
                                        type="password"
                                        validate={[isRequired, minLength(6)]}
                                        placeholder="Mot de passe" />

                                    <div className="form-group clearfix">
                                        <Link className="pull-xs-right"  to="/forget-password-request/" > Mot de passe oublié ? </Link>
                                      </div>

                                    <button type="submit" className="btn btn-primary btn-block btn-lg m-t-40 ladda-button" disabled={submitting}>Connexion</button>
                                </form>

                                <p>Still no account? Please go to <Link to="/register/">Sign up</Link></p>

                            </div>
                        </div>


                        <footer className="page-copyright page-copyright-inverse">
                          <p>WEBSITE BY Spitch</p>
                          <p>© 2016. All RIGHT RESERVED.</p>
                          <div className="social">
                            <a className="btn btn-icon btn-pure">
                              <i className="icon bd-twitter" aria-hidden="true"></i>
                            </a>
                            <a className="btn btn-icon btn-pure">
                              <i className="icon bd-facebook" aria-hidden="true"></i>
                            </a>
                            <a className="btn btn-icon btn-pure" >
                              <i className="icon bd-google-plus" aria-hidden="true"></i>
                            </a>
                          </div>
                        </footer>


                    </div>
                </div>
            </div>
        )
    }
}
