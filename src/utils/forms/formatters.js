import { SubmissionError } from 'redux-form'

export const formatErrors = (errors) => {
    let formattedErrors = {}
    for (let key in errors) {
        if (errors.hasOwnProperty(key)) {
            let formatted_key = (key === 'non_field_errors' ? '_error' : key)
            formattedErrors[formatted_key] = errors[key].join()
        }
    }
    return formattedErrors
}

export const handleFormErrors = (response, handleNotFound=false) => {
    if (response) {
        let formErrors = {}

        if (response.status === 400) {
            formErrors = response.data.error_description

            if ('non_field_errors' in formErrors) {
                formErrors['_error'] = formErrors['non_field_errors']
                delete formErrors['non_field_errors']
            }
        }
        else if (response.status === 404 && handleNotFound) {
            formErrors['_error'] = response.data.error_description
        }

        if (formErrors) {
            throw new SubmissionError(formErrors)
        }
    }
}
