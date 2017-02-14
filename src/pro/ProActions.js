import request from '../utils/request'

import { CREATE_PRO } from './ProConstants'

export function createPro(values) {
    return {
        type: CREATE_PRO,
        payload: request.post('/auth/pro/register/', values)
    }
}
