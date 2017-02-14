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
            <div>
                <h3 className="font-size-24">Connexion</h3>
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
                    <button type="submit" className="btn btn-primary btn-block" disabled={pristine || submitting}>Connexion</button>
                </form>
                <p>
                    <Link to="/register/">M'inscrire</Link>
                </p>
            </div>
        )
    }
}
