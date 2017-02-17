import React from 'react'
import { Field } from 'redux-form'

import { renderInput } from '../../utils/forms/renderers'
import ImageBase64Field from '../../utils/forms/Fields/ImageBase64Field'
import { isRequired } from '../../utils/forms/validators'

export default class UserUpdateForm extends React.Component {
    render() {
        const { handleSubmit, pristine, submitting } = this.props

        return (
            <div>
                <h3 className="font-size-24">Modifier mes informations</h3>
                <form onSubmit={handleSubmit} role="form" autoComplete="off">
                    <Field
                        name="photo"
                        component={ImageBase64Field}
                        validate={isRequired}
                        label="Photo" />
                    <Field
                        name="first_name"
                        component={renderInput}
                        type="text"
                        validate={isRequired}
                        label="Prénom" />
                    <Field
                        name="last_name"
                        component={renderInput}
                        validate={isRequired}
                        label="Nom" />
                    <button type="submit" className="btn btn-primary btn-block" disabled={pristine || submitting}>Modifier</button>
                </form>
            </div>
        )
    }
}
