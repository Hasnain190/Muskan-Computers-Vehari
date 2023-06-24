import { createSlice } from "@reduxjs/toolkit";
import type { Category } from "../../types";

const CategoryFromLocalStorage: Category[] = JSON.parse(
    localStorage.getItem("categories") || "[]"
);

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categories: CategoryFromLocalStorage,
        isLoading: false,
        error: null,
        isSuccess: false
    }
    , reducers: {

        getCategoriesRequest: (state) => {
            state.isLoading = true;
        },
        getCategoriesSuccess: (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.categories = action.payload;


        }
        ,
        getCategoriesFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.isSuccess = false;
            state.categories = [];
        }

    }

})

export const { getCategoriesRequest, getCategoriesSuccess, getCategoriesFail } = categoriesSlice.actions;



export const productsByCategorySlice = createSlice({
    name: "products-by-category",
    initialState: {
        products: [],
        isLoading: false,
        error: null,
        isSuccess: false
    }
    , reducers: {

        getProductsByCategoryRequest: (state) => {
            state.isLoading = true;
        },
        getProductsByCategorySuccess: (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.products = action.payload;
        }
        ,
        getProductsByCategoryFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.isSuccess = false;

        }

    }

})

export const { getProductsByCategoryRequest, getProductsByCategorySuccess, getProductsByCategoryFail } = productsByCategorySlice.actions; 