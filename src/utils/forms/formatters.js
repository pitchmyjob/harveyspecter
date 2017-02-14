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
