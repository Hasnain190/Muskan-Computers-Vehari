import { createSlice } from "@reduxjs/toolkit";
import { CartItem, Cart } from "../../types";


export const addItemsToCartSlice = createSlice({
    name: 'add-items-to-cart',
    initialState: {
        items: [] as CartItem[],
        totalQuantity: 0,
        changed: false,
        IsSuccess: false,
        IsLoading: false,
        error: null


    }
    ,
    reducers: {
        addItemsToCartRequest: (state, action) => {
            state.changed = true;
            state.IsLoading = true;

            state.items = action.payload;
            // const newItem = action.payload;
            // const existingItem = state.items.find(item => item.product === newItem.product);
            // state.totalQuantity++;
            // if (!existingItem) {
            //     state.items = [
            //         ...state.items,

            //         {
            //             product: newItem.id,
            //             quantity: 1
            //         }
            //     ]


            // }


        },
        removeItemsFromCart: (state, action) => {
            state.changed = true;
            state.items = action.payload
            // const id = action.payload;
            // const existingItem = state.items.find(item => item.product === id);
            // state.totalQuantity--;
            // if (existingItem) {
            //     state.items = state.items.filter(item => item.product !== id);

            // }
        },
        getMyCart: (state, action) => {
            state.changed = false;
            state.items = action.payload.items;


        },
        updateItemQuantity: (state, action) => {
            state.changed = true;
            state.items = action.payload.items;

        }






    }

})
export const { addItemsToCart, removeItemsFromCart, getMyCart, updateItemQuantity } = cartSlice.actions;