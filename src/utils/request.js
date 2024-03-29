import axios from 'axios'

const API_ROOT_URL = 'http://163.172.28.221:8000/api/'

let HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}

if (!!localStorage.token) {
    HEADERS['Authorization'] = 'Token ' + localStorage.getItem('token')
}

export default axios.create({
    baseURL: API_ROOT_URL,
    timeout: 10000,
    withCredentials: true,
    headers: HEADERS,
})
