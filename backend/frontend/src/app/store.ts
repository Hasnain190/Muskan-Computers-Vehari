import { configureStore } from "@reduxjs/toolkit";

import { userLoginSlice, userRegisterSlice, userUpdateProfileSlice } from "../../src/features/users/slice";

import { productsSlice, productSlice } from "../../src/features/products/slice";

import { productsByCategorySlice, categoriesSlice } from "../../src/features/category/slice";
import {
    addItemsToCartSlice, removeItemsFromCartSlice, getMyCartSlice,
    updateItemQuantitySlice

} from "../features/cart/slice";
import { createOrderSlice } from "../features/order/slice";

export const store = configureStore({
    reducer: {
        // user reducers
        userLogin: userLoginSlice.reducer,
        userRegister: userRegisterSlice.reducer,

        userUpdateProfile: userUpdateProfileSlice.reducer,

        products: productsSlice.reducer,
        product: productSlice.reducer,

        // category reducers

        categories: categoriesSlice.reducer,
        productsByCategory: productsByCategorySlice.reducer,

        // cart reducers
        addToCart: addItemsToCartSlice.reducer,
        removeFromCart: removeItemsFromCartSlice.reducer,
        getMyCart: getMyCartSlice.reducer,
        updateItemQuantity: updateItemQuantitySlice.reducer,


        // order reducers
        createOrder: createOrderSlice.reducer


    }

})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

