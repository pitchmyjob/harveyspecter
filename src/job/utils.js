import React from 'react'

export const getTagClass = (code) => {
    switch (code) {
        case 'P':
            return 'primary'
        case 'V':
            return 'success'
        case 'E':
            return 'warning'
        default:
            return 'default'
    }
}

export const getButtonAction = (code, id) => {
    switch (code) {
        case 'P':
            return (
                <button className="btn btn-block btn-primary">Publier</button>
            )
        case 'V':
            return (
                <button className="btn btn-block btn-success">Inviter par e-mail</button>
            )
        case 'E':
            return (
                <button className="btn btn-block btn-warning">Republier</button>
            )
        default:
            return
    }
}
