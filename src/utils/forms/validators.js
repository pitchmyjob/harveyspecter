import { emailExistsUser } from '../../user/UserActions'

export const isRequired = (value) => {
    return value ? undefined : 'Obligatoire'
}

export const isEmail = (value) => {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Adresse e-mail invalide' : undefined
}

export const minLength = (min) => {
    return (value) => {
        return value && value.length < min ? `${min} caractères minimum` : undefined
    }
}

export const asyncValidateEmailExists = (values, dispatch) => {
    return dispatch(emailExistsUser(values)).then((response) => {
        // eslint-disable-next-line
        throw {email: 'Cet adresse e-mail n\'est pas disponible.'}
    })
}
