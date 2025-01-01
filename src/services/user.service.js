import { LOGOUT_USER, SET_USER } from '../store/reducers/userReducer.js'
import { store } from '../store/store.js'
import { storageService } from './async-storage.service.js'


const STORAGE_KEY = 'userDB'
const STORAGE_KEY_LOGGEDIN = 'loggedinUser'


export const userService = {
    login,
    logout,
    signup,
    getById,
    getLoggedinUser,
    getEmptyCredentials
}


function getById(userId) {
    return storageService.get(STORAGE_KEY, userId)
}


function login({ username, password }) {
    return storageService.query(STORAGE_KEY)
        .then(users => {
            const user = users.find(user => {
                return user.username === username
            })
            if (user && user.password === password) return _setLoggedinUser(user)
            else return Promise.reject('Insufficient credentials, please try again.')
        })
}


function signup({ username, password, fullname }) {
    const user = { username, password, fullname, isAdmin: false }
    return storageService.post(STORAGE_KEY, user)
        .then(_setLoggedinUser)
}


function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN)
    store.dispatch({ type: LOGOUT_USER })
    return Promise.resolve()
}


function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN))
}


function _setLoggedinUser(user) {
    const userToSave = { _id: user._id, fullname: user.fullname, isAdmin: !!user.isAdmin }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(userToSave))
    store.dispatch({ type: SET_USER, payload: userToSave })
    return userToSave
}


function getEmptyCredentials() {
    return {
        username: '',
        password: '',
        fullname: ''
    }
}
