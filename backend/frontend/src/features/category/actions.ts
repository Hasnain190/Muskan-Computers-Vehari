import {
    getCategoriesRequest,
    getCategoriesSuccess,
    getCategoriesFail,

    getProductsByCategoryRequest,
    getProductsByCategorySuccess,
    getProductsByCategoryFail



} from './slice'

import axios from 'axios'
import { Dispatch } from 'redux'
import type { Category, Product } from '../../types'

export const getCategories = () => async (dispatch: Dispatch) => {
    try {
        dispatch(getCategoriesRequest())

        const { data } = await axios.get<Category[]>('/api/category/list/')
        dispatch(getCategoriesSuccess(data))



    } catch (error: any) {
        dispatch(getCategoriesFail(error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message))


    }
}

export const getProductsByCategory = (id: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(getProductsByCategoryRequest())

        const { data } = await axios.get<Product>(`/api/category/${id}`)
        dispatch(getProductsByCategorySuccess(data))



    } catch (error: any) {
        dispatch(getProductsByCategoryFail(error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message))


    }
}