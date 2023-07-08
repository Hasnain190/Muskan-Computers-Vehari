// DUCKS pattern

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../types";




const UserFromStorage: User | null = localStorage.getItem("user") !== null
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


export const userProfileSlice = createSlice({

    name: 'profile',
    initialState: {
        isLoading: false,
        error: null,
        profile: UserFromStorage,
        isSuccess: false,

    },

    reducers: {
        // user login pending/request
        profileRequest(state) {
            state.isLoading = true;

        },
        // user login success
        profileSuccess(state, action: PayloadAction<User>) {
            state.isLoading = false;
            state.profile = action.payload;
            state.isSuccess = true;
        },

        // user login failed

        profileFail(state, action) {
            state.isLoading = false;
            state.error = action.payload
        },
        profileReset(state) {
            state.profile = {}

        }
    }
})

export const { profileRequest, profileSuccess, profileFail, profileReset } = userProfileSlice.actions




export const userRegisterSlice = createSlice({

    name: 'register',
    initialState: {
        isLoading: false,
        isSuccess: false,
        user: {},
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
            state.user = action.payload
        },

        // user login failed
        registerFail(state, action) {
            state.isLoading = false;
            state.error = action.payload
        }

    }
})

export const { registerRequest, registerFail, registerSuccess } = userRegisterSlice.actions


// update user info
export const userUpdateProfileSlice = createSlice({
    name: 'update-profile',
    initialState: {
        user: UserFromStorage,
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
            state.user = action.payload;
            state.isSuccess = true;

        },
        updateProfileFail(state, action) { state.isLoading = false; state.error = action.payload },

        updateProfileReset() { },

    }
})
export const { updateProfileRequest, updateProfileFail, updateProfileSuccess, updateProfileReset } = userUpdateProfileSlice.actions