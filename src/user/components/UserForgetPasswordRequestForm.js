import React from 'react'
import { Field } from 'redux-form'

import { renderAuthInput  } from '../../utils/forms/renderers'
import { isRequired, isEmail } from '../../utils/forms/validators'

export default class UserForgetPasswordRequestForm extends React.Component {
    render() {
        const { handleSubmit, pristine, submitting, forgetPasswordRequested, error } = this.props

        if (forgetPasswordRequested) {
            return (
                <p>
                    Yo ! Check tes mails pour avoir le lien de réinitialisation.
                </p>
            )
        }

        return (
            <div>
                <h3 className="font-size-24">Mot de passe oublié</h3>
                {error && <p>{error}</p>}
                <form onSubmit={handleSubmit} role="form" autoComplete="off">
                    <Field
                        name="email"
                        component={renderAuthInput}
                        type="email"
                        validate={[isRequired, isEmail]}
                        placeholder="Adresse e-mail" />
                    <button type="submit" className="btn btn-primary btn-block" disabled={pristine || submitting}>Envoyer</button>
                </form>
            </div>
        )
    }
}
