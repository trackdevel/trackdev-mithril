import Api from '../api';
import User from '../models/user'
import {ps} from '../pubsub';

let loggedUser = User()

const Auth = {}

Auth.login = function (data) {
    return Api.post('/auth/login', data)
        .then(function (user) {
            loggedUser.set(user.userdata)
        })
        .catch(function (e) {
            console.log(JSON.stringify(e))
            ps.publish('error.auth.login', {
                show: true,
                data: new Error(e.response ? e.response.message : 'Error logging in')
            })
        })
}

Auth.signup = function (data) {
    return Api.post('/users', data)
        .catch(function (e) {
            ps.publish('error.auth.login', {
                show: true,
                data: new Error(e.response.message)
            })
        })
}

Auth.logout = function () {
    return Api.post('/auth/logout')
        .then(function (user) {
            loggedUser.set({username:null})
        })
        .catch(function (e) {
            ps.publish('error.auth.logout', {
                show: true,
                data: new Error(e.response ? e.response.message : 'Error logging out')
            })
        })
}

Auth.checkActiveSession = function () {
    return Api.get('/auth/self')
        .then(function (user) {
            loggedUser.set(user)
        })
        .catch(function (e) {
            loggedUser.set()
        })
}

Auth.isLoggedIn = () => loggedUser.get('username') != null;

Auth.getUsername = () => loggedUser.get('username')

Auth.getLoggedUser = () => loggedUser

export default Auth;
