import { createSlice }
    from "@reduxjs/toolkit";


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