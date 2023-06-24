import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../types";


export const addItemsToCartSlice = createSlice({
    name: 'add-items-to-cart',
    initialState: {
        items: [] as CartItem[],
        totalQuantity: 0,
        isChanged: false,
        isSuccess: false,
        isLoading: false,
        error: null


    }
    ,
    reducers: {
        addItemsToCartRequest: (state) => {
            state.isLoading = true;


        },
        addItemsToCartSuccess: (state, action) => {
            state.isChanged = true;
            state.items = action.payload;
            state.isLoading = false;
            state.isSuccess = true;
        },
        addItemsToCartFail: (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.error = action.payload;
        }
    }
}
)
export const { addItemsToCartRequest, addItemsToCartSuccess, addItemsToCartFail, } = addItemsToCartSlice.actions;




export const removeItemsFromCartSlice = createSlice({
    name: 'remove-items-from-cart',
    initialState: {
        isLoading: false,
        isSuccess: false,
        itemRemoved: null,
        message: null,
        error: null,

    }
    , reducers: {
        removeItemsFromCartRequest: (state) => {
            state.isLoading = true;
        },
        removeItemsFromCartSuccess: (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            // TODO:
            state.itemRemoved = action.payload.id;
            state.message = action.payload;
        },
        removeItemsFromCartFail: (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.message = action.payload;
            state.error = action.payload;
        }
    }
}
)

export const { removeItemsFromCartRequest, removeItemsFromCartSuccess, removeItemsFromCartFail } = removeItemsFromCartSlice.actions;

export const getMyCartSlice = createSlice({
    name: 'get-my-cart',
    initialState: {
        isLoading: false,
        isSuccess: false,
        items: [] as CartItem[],
        message: null,
        error: null

    }
    , reducers: {
        getMyCartRequest: (state) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.items = [];
        },
        getMyCartSuccess: (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.items = action.payload;

        }
        ,
        getMyCartFail: (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.message = action.payload;
            state.error = action.payload;
        }
    }
})

export const { getMyCartRequest, getMyCartSuccess, getMyCartFail } = getMyCartSlice.actions;

export const updateItemQuantitySlice = createSlice({
    name: 'update-item-quantity',
    initialState: {
        isLoading: false,
        isSuccess: false,
        message: null,

        error: null

    }
    , reducers: {
        updateItemQuantityRequest: (state) => {
            state.isLoading = true;
            state.isSuccess = false;

        }
        , updateItemQuantitySuccess: (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.message = action.payload;


        },
        updateItemQuantityFail: (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.message = action.payload;
            state.error = action.payload;
        }
        ,
    }
})

export const { updateItemQuantityRequest, updateItemQuantitySuccess, updateItemQuantityFail } = updateItemQuantitySlice.actions;
