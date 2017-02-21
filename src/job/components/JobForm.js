import React from 'react'
import { Field } from 'redux-form'

import { renderInput, renderSelectMultiple, renderTextarea } from '../../utils/forms/renderers'
import ImageBase64Field from '../../utils/forms/Fields/ImageBase64Field'
import LocationField from '../../utils/forms/Fields/LocationField'
import { isRequired } from '../../utils/forms/validators'

export default class JobForm extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    componentDidMount(){
        this.props.listContractType()
        this.props.listExperience()
        this.props.listStudyLevel()

        if (this.props.params.hasOwnProperty('id')) {
            this.props.retrieveJob(this.props.params.id)
        }
    }

    render() {
        const { handleSubmit, pristine, submitting, contractType, experience, studyLevel } = this.props
        const labelForm = this.props.params.hasOwnProperty('id') ? 'Modifier' : 'Ajouter'

        return (
            <div className="page-content container-fluid">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="panel">
                            <div className="panel-heading">
                                <h3 className="panel-title">Information entreprise</h3>
                            </div>
                            <div className="panel-body container-fluid">
                                <form onSubmit={handleSubmit} role="form" autoComplete="off">
                                    <Field
                                        name="logo"
                                        component={ImageBase64Field}
                                        validate={isRequired}
                                        label="Logo" />
                                    <Field
                                        name="title"
                                        component={renderInput}
                                        type="text"
                                        validate={isRequired}
                                        label="Titre de l'offre" />
                                    <Field
                                        name="address"
                                        component={LocationField}
                                        validate={isRequired}
                                        label="Lieu" />
                                    <Field
                                        name="starting_date"
                                        component={renderInput}
                                        type="text"
                                        validate={isRequired}
                                        label="Date de début" />
                                    <Field
                                        name="contract_types"
                                        component={renderSelectMultiple}
                                        options={contractType.contractTypes}
                                        validate={isRequired}
                                        label="Contrat(s)"
                                        placeholder="Choisissez un ou plusieurs contrats" />
                                    <Field
                                        name="experiences"
                                        component={renderSelectMultiple}
                                        options={experience.experiences}
                                        validate={isRequired}
                                        label="Expérience(s)"
                                        placeholder="Choisissez un ou plusieurs expériences" />
                                    <Field
                                        name="study_levels"
                                        component={renderSelectMultiple}
                                        options={studyLevel.studyLevels}
                                        validate={isRequired}
                                        label="Niveau d'études"
                                        placeholder="Choisissez un ou plusieurs niveau d'études" />
                                    <Field
                                        name="salary"
                                        component={renderInput}
                                        type="text"
                                        validate={isRequired}
                                        label="Salaire" />
                                    <Field
                                        name="skills"
                                        component={renderInput}
                                        type="text"
                                        validate={isRequired}
                                        label="Compétence(s) recherchée(s)" />
                                    <Field
                                        name="description"
                                        component={renderTextarea}
                                        validate={isRequired}
                                        label="Description" />
                                    <button type="submit" className="btn btn-primary btn-block" disabled={pristine || submitting}>{labelForm}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
