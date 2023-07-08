import { createSlice }
    from "@reduxjs/toolkit";
import { Order } from "../../types";




export const createOrderSlice = createSlice({
    name: "order-create",
    initialState: {
        isSuccess: false,
        isLoading: false,
        error: null,
        order: null,


    },
    reducers: {
        createOrderRequest(state) {
            state.isLoading = true
            state.isSuccess = true

        },
        createOrderSuccess(state, action) {
            state.isLoading = false
            state.order = action.payload
            state.isSuccess = true

        },
        createOrderFail(state, action) {
            state.error = action.payload
            state.isSuccess = false
            state.isLoading = false
        }
    }

})

export const { createOrderRequest, createOrderSuccess, createOrderFail } = createOrderSlice.actions

export const getMyOrdersSlice = createSlice({
    name: "my-orders",
    initialState: {
        isSuccess: false,
        isLoading: false,
        error: null,
        orders: [] as Order[]

        ,


    },
    reducers: {
        getMyOrdersRequest(state) {
            state.isLoading = true
            state.isSuccess = true

        },
        getMyOrdersSuccess(state, action) {
            state.isLoading = false
            state.orders = action.payload
            state.isSuccess = true

        },
        getMyOrdersFail(state, action) {
            state.error = action.payload
            state.isSuccess = false
            state.isLoading = false
        },
        getMyOrdersReset(state) {
            state.orders = []
        }
    }

})

export const { getMyOrdersRequest, getMyOrdersSuccess, getMyOrdersFail, getMyOrdersReset } = getMyOrdersSlice.actions