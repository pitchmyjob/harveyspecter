import React from 'react'
import { Field } from 'redux-form'

import { renderInput } from '../../utils/forms/renderers'
import { isRequired, isEmail, minLength } from '../../utils/forms/validators'

export default class CollaboratorCreateForm extends React.Component {
    render() {
        const { handleSubmit, pristine, submitting } = this.props

        return (
            <div>
                <h3 className="font-size-24">Ajout d'un collaborateur</h3>
                <form onSubmit={handleSubmit} role="form" autoComplete="off">
                    <Field
                        name="first_name"
                        component={renderInput}
                        type="text"
                        validate={isRequired}
                        label="Prénom"
                        placeholder="Saisissiez le prénom" />
                    <Field
                        name="last_name"
                        component={renderInput}
                        type="text"
                        validate={isRequired}
                        label="Nom"
                        placeholder="Saisissiez le nom" />
                    <Field
                        name="email"
                        component={renderInput}
                        type="email"
                        validate={[isRequired, isEmail]}
                        label="Email"
                        placeholder="Saisissiez l'adresse e-mail" />
                    <Field
                        name="password"
                        component={renderInput}
                        type="password"
                        validate={[isRequired, minLength(6)]}
                        label="Mot de passe"
                        placeholder="Saisissiez le mot de passe" />
                    <button type="submit" className="btn btn-primary btn-block" disabled={pristine || submitting}>Ajouter</button>
                </form>
            </div>
        )
    }
}
