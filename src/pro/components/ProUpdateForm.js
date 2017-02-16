import React from 'react'
import { Field } from 'redux-form'

import { renderInput, renderSelect, renderTextarea } from '../../utils/forms/renderers'
import ImageBase64Field from '../../utils/forms/Fields/ImageBase64Field'
import LocationField from '../../utils/forms/Fields/LocationField'
import { isRequired } from '../../utils/forms/validators'

export default class ProUpdateForm extends React.Component {
    componentDidMount(){
        this.props.listEmployee()
        this.props.listIndustry()
        this.props.retrievePro()
    }

    render() {
        const { handleSubmit, pristine, submitting, employee, industry } = this.props

        return (
            <div>
                <h3 className="font-size-24">Modifier la page pro</h3>
                <form onSubmit={handleSubmit} role="form" autoComplete="off">
                    <Field
                        name="logo"
                        component={ImageBase64Field}
                        validate={isRequired}
                        label="Logo" />
                    <Field
                        name="company"
                        component={renderInput}
                        type="text"
                        validate={isRequired}
                        label="Raison sociale" />
                    <Field
                        name="address"
                        component={LocationField}
                        validate={isRequired}
                        label="Adresse"
                        placeholder="Saisiez l'adresse du siège social" />
                    <Field
                        name="website"
                        component={renderInput}
                        type="text"
                        validate={isRequired}
                        label="Site internet" />
                    <Field
                        name="description"
                        component={renderTextarea}
                        validate={isRequired}
                        label="Description" />
                    <Field
                        name="phone"
                        component={renderInput}
                        type="text"
                        validate={isRequired}
                        label="Téléphone" />
                    <Field
                        name="ca"
                        component={renderInput}
                        type="text"
                        validate={isRequired}
                        label="Chiffre d'affaire" />
                    <Field
                        name="employes"
                        component={renderSelect}
                        options={employee.employees}
                        validate={isRequired}
                        label="Taille de l'entreprise"
                        placeholder="Choisissez la taille de l'entreprise" />
                    <Field
                        name="industry"
                        component={renderSelect}
                        options={industry.industries}
                        validate={isRequired}
                        label="Secteur d'activité" />
                    <button type="submit" className="btn btn-primary btn-block" disabled={pristine || submitting}>Modifier</button>
                </form>
            </div>
        )
    }
}
