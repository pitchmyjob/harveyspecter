export const convertStatusParamsToAPI = (status) => {
    if (status === 'liked') {
        return 'L'
    }
    else if (status === 'pending') {
        return 'R'
    }
    else if (status === 'to-validate') {
        return 'V'
    }
    else if (status === 'accepted') {
        return 'S'
    }
    else if (status === 'rejected') {
        return 'N'
    }
}

export const convertStatusAPIToParams = (status) => {
    if (status === 'L') {
        return 'liked'
    }
    else if (status === 'R') {
        return 'pending'
    }
    else if (status === 'V') {
        return 'to-validate'
    }
    else if (status === 'S') {
        return 'accepted'
    }
    else if (status === 'N') {
        return 'rejected'
    }
}
