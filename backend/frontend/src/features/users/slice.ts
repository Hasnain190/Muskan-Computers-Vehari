// DUCKS pattern

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../types";




const UserFromStorage: User | null = localStorage.getItem("User") !== null
    ? JSON.parse(localStorage.getItem("user")!)
    : null;

export const userLoginSlice = createSlice({

    name: 'login',
    initialState: {
        isLoading: false,
        error: null,
        user: UserFromStorage,
        isSuccess: false,

    },

    reducers: {
        // user login pending/request
        loginRequest(state) {
            state.isLoading = true;
            state.user = null

        },
        // user login success
        loginSuccess(state, action: PayloadAction<User>) {
            state.isLoading = false;
            state.user = action.payload;
            state.isSuccess = true;
        },

        // user login failed

        loginFail(state, action) {
            state.isLoading = false;
            state.error = action.payload
        },
        // user logout
        logoutAction() { }
    }
})

export const { loginRequest, loginFail, loginSuccess, logoutAction } = userLoginSlice.actions




export const userRegisterSlice = createSlice({

    name: 'register',
    initialState: {
        isLoading: false,
        isSuccess: false,
        User: {},
        error: null

    },

    reducers: {
        // user register pending/request
        registerRequest(state) {
            state.isLoading = true;
        },
        // user register success
        registerSuccess(state, action: PayloadAction<User>) {
            state.isLoading = false;
            state.isSuccess = true;
            state.User = action.payload
        },

        // user login failed
        registerFail(state, action) {
            state.isLoading = false;
            state.error = action.payload
        }

    }
})

export const { registerRequest, registerFail, registerSuccess } = userRegisterSlice.actions


// update user profile
export const userUpdateProfileSlice = createSlice({
    name: 'update-profile',
    initialState: {
        User: UserFromStorage,
        isLoading: false,
        error: null,
        isSuccess: false
    },
    reducers: {

        updateProfileRequest(state) {
            state.isLoading = true
        },
        updateProfileSuccess(state, action: PayloadAction<User>) {
            state.isLoading = false;
            state.User = action.payload;
            state.isSuccess = true;

        },
        updateProfileFail(state, action) { state.isLoading = false; state.error = action.payload },



    }
})
export const { updateProfileRequest, updateProfileFail, updateProfileSuccess } = userUpdateProfileSlice.actions