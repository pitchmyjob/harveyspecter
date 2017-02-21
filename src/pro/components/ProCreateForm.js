import React from 'react'
import { Link } from 'react-router'
import { Field } from 'redux-form'

import { renderAuthInput, renderAuthCheckbox  } from '../../utils/forms/renderers'
import { isRequired, isEmail, minLength } from '../../utils/forms/validators'

export default class ProCreateForm extends React.Component {
    render() {
        const { handleSubmit, pristine, submitting, created } = this.props

        if (created) {
            return (
                <p>
                    Yo ! Check tes mails pour confirmer ton adresse.
                </p>
            )
        }

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

                                <form onSubmit={handleSubmit} role="form" autoComplete="off">
                                    <Field
                                        name="company"
                                        component={renderAuthInput}
                                        type="text"
                                        validate={isRequired}
                                        placeholder="Raison sociale" />
                                    <Field
                                        name="last_name"
                                        component={renderAuthInput}
                                        type="text"
                                        validate={isRequired}
                                        placeholder="Nom" />
                                    <Field
                                        name="first_name"
                                        component={renderAuthInput}
                                        type="text"
                                        validate={isRequired}
                                        placeholder="Prénom" />
                                    <Field
                                        name="position"
                                        component={renderAuthInput}
                                        type="text"
                                        placeholder="Fonction" />
                                    <Field
                                        name="phone"
                                        component={renderAuthInput}
                                        type="text"
                                        placeholder="Téléphone" />
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
                                    <Field
                                        name="cgu"
                                        component={renderAuthCheckbox}
                                        validate={isRequired}
                                        label="Accepter les conditions générales d'utilisation" />
                                    <button type="submit" className="btn btn-primary btn-block" disabled={pristine || submitting}>Inscription</button>
                                </form>
                                <p>
                                    Déjà inscrit ? <Link to="/login/">Connexion</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
