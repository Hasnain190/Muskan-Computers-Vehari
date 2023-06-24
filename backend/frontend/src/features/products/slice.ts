import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../types";

const ProductsFromLocalStorage: Product[] = JSON.parse(
    localStorage.getItem("Products") || "[]"
);

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: ProductsFromLocalStorage,
        isLoading: false,
        error: null,
        isSuccess: false
    }
    , reducers: {

        getProductsRequest: (state) => {
            state.isLoading = true;
        },
        getProductsSuccess: (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.products = action.payload;


        }
        ,
        getProductsFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.isSuccess = false;
            state.products = [];
        }

    }

})

export const { getProductsRequest, getProductsSuccess, getProductsFail } = productsSlice.actions;



export const productSlice = createSlice({
    name: "product",
    initialState: {
        product: {
            _id: "",
            name: "",
            description: "",
            price: 0,
            countInStock: 0,
            image: "",
            rating: 0,
            image_1: "",
            image_2: "",




        },
        isLoading: false,
        error: null,
        isSuccess: false
    }
    , reducers: {

        getProductRequest: (state) => {
            state.isLoading = true;
        },
        getProductSuccess: (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.product = action.payload;
        }
        ,
        getProductFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.isSuccess = false;

        }

    }

})

export const { getProductRequest, getProductSuccess, getProductFail } = productSlice.actions; 