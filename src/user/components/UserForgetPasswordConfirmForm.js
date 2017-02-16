import React from 'react'
import { Link } from 'react-router'
import { Field } from 'redux-form'

import { renderAuthInput  } from '../../utils/forms/renderers'
import { isRequired, minLength } from '../../utils/forms/validators'

export default class UserForgetPasswordConfirmForm extends React.Component {
    render() {
        const { handleSubmit, pristine, submitting, error, user } = this.props

        if (user.error) {
            if (user.error.status === 404) {
                // TODO: create an API endpoint which should be called at init and verify if email / token in URL are valid
                // instead of checking it on form submit only
                return (
                    <p>Aucune demande de réinitialisation n'a été faites pour cette adresse e-mail ou le token est invalide.</p>
                )
            }
        }
        else if (user.forgetPasswordConfirmed) {
            return (
                <p>Votre mot de passe a été réinitialisé, <Link to="/login/">connectez-vous</Link> à votre compte avec votre nouveau mot de passe</p>
            )
        }

        return (
            <div>
                <h3 className="font-size-24">Réinitialisation du mot de passe</h3>
                {error && <p>{error}</p>}
                <form onSubmit={handleSubmit} role="form" autoComplete="off">
                    <Field
                        name="password"
                        component={renderAuthInput}
                        type="password"
                        validate={[isRequired, minLength(6)]}
                        placeholder="Nouveau mot de passe" />
                    <button type="submit" className="btn btn-primary btn-block" disabled={pristine || submitting}>Réinitialiser</button>
                </form>
            </div>
        )
    }
}
