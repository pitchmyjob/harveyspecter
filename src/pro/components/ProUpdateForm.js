import React from 'react'
import { Field } from 'redux-form'

import Loader from '../../core/components/Loader'
import LoadingError from '../../core/components/LoadingError'
import { renderInput, renderSelect, renderTextarea } from '../../utils/forms/renderers'
// import ImageBase64Field from '../../utils/forms/Fields/ImageBase64Field'
import LocationField from '../../utils/forms/Fields/LocationField'
// import SummernoteField from '../../utils/forms/Fields/SummernoteField'
import { isRequired } from '../../utils/forms/validators'

export default class ProUpdateForm extends React.Component {
    componentDidMount(){
        this.props.listEmployee()
        this.props.listIndustry()
        this.props.retrievePro()
    }

    render() {
        const { handleSubmit, pristine, submitting, employee, industry } = this.props
        const { fetched, error, pro } = this.props.pro

        if (error) {
            return <LoadingError />
        }
        else if (!fetched) {
            return <Loader />
        }

        return (
            <div className="page-profile-v3">
                <div className="page-content container-fluid">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="card">
                                <img className="card-img-top w-full" src="http://placehold.it/1200x500" alt="..." />
                                <div className="card-block wall-person-info">
                                    <a className="avatar bg-white img-bordered person-avatar">
                                        <img src={pro.logo} alt="..." />
                                    </a>
                                    <h2 className="person-name">
                                        <a href="#">{pro.company}</a>
                                    </h2>
                                    <p className="card-text">
                                        <span className="blue-grey-400">{pro.address}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} role="form" autoComplete="off">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="panel">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Information entreprise</h3>
                                    </div>
                                    <div className="panel-body container-fluid">
                                        {/*<Field
                                            name="logo"
                                            component={ImageBase64Field}
                                            validate={isRequired}
                                            label="Logo" />*/}
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
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="panel">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Description</h3>
                                    </div>
                                    <div className="panel-body container-fluid">
                                        <Field
                                            name="description"
                                            component={renderTextarea}
                                            validate={isRequired} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <button type="submit" className="btn btn-primary btn-block" disabled={pristine || submitting}>Modifier</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
