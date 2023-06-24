import axios from 'axios'


import {
    loginRequest,
    loginFail,
    loginSuccess,

    logoutAction,

    registerRequest,
    registerFail,
    registerSuccess,

    updateProfileRequest,
    updateProfileSuccess,
    updateProfileFail,

} from './slice'
import type { User } from '../../types'
import { Dispatch } from 'redux';
import { RootState } from '../../app/store';

export const login = (user: User) => async (dispatch: Dispatch) => {
    try {
        dispatch(loginRequest())
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        const { data } = await axios.post(
            `/api/users/login/`,
            user,
            config
        )
        dispatch(loginSuccess(data))

        localStorage.setItem('user', JSON.stringify(data))
    } catch (error: any) {

        dispatch(loginFail(error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message))
    }
}

export const logout = () => (dispatch: Dispatch) => {
    localStorage.removeItem('user')
    dispatch(logoutAction())




}


export const register = (user: User) => async (dispatch: Dispatch) => {


    try {
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(
            '/api/users/register/',
            user,
            config
        )
        dispatch(registerRequest())

        dispatch(registerSuccess(data))

        dispatch(loginSuccess(data))
        localStorage.setItem('user', JSON.stringify(data))


    } catch (error: any) {
        dispatch(registerFail((error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message)))
    }
}


export const updateUserProfile = (userArg: User) => async (dispatch: Dispatch, getState: () => RootState) => {
    try {
        dispatch(updateProfileRequest())

        const {
            userLogin: { user },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `JWT ${user?.token}`
            }
        }

        const { data } = await axios.put(
            `/api/users/profile/update/`,
            userArg,
            config
        )

        dispatch(updateProfileSuccess(data))

        dispatch(loginSuccess(data))

        localStorage.setItem('user', JSON.stringify(data))

    } catch (error: any) {
        dispatch(updateProfileFail(error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message))
    }
}





// export const resetUserPassword = (email) => async (dispatch) => {
//     try {
//         dispatch({
//             type: USER_PASSWORD_RESET_REQUEST
//         })


//         const config = {
//             headers: {
//                 'Content-type': 'application/json',
//             }
//         }

//         const { data } = await axios.post(
//             `/auth/users/reset_password/`,
//             { 'email': email },
//             config
//         )

//         dispatch({
//             type: USER_PASSWORD_RESET_SUCCESS,
//         })



//     } catch (error) {
//         dispatch({
//             type: USER_PASSWORD_RESET_FAIL,
//             payload: error.response && error.response.data.detail
//                 ? error.response.data.detail
//                 : error.message,
//         })
//     }
// }


// export const resetUserPasswordConfirm = (uid, token, new_password, re_new_password) => async (dispatch) => {



//     const body = JSON.stringify({ uid, token, new_password, re_new_password });
//     try {
//         dispatch({
//             type: USER_PASSWORD_RESET_CONFIRM_REQUEST
//         })


//         const config = {
//             headers: {
//                 'Content-type': 'application/json',
//             }
//         }

//         await axios.post(
//             `/auth/users/reset_password_confirm/`,
//             body,
//             config
//         )

//         dispatch({
//             type: USER_PASSWORD_RESET_CONFIRM_SUCCESS,
//         })



//     } catch (error) {
//         dispatch({
//             type: USER_PASSWORD_RESET_CONFIRM_FAIL,
//             payload: error.response && error.response.data.detail
//                 ? error.response.data.detail
//                 : error.message,


//         })
//     }
// }