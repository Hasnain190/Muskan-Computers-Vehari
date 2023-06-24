import {
    getProductsRequest,
    getProductsSuccess,
    getProductsFail,

    getProductRequest,
    getProductSuccess,
    getProductFail



} from './slice'

import axios from 'axios'
import { Dispatch } from 'redux'
import type { Product } from '../../types'

export const getProducts = () => async (dispatch: Dispatch) => {
    try {
        dispatch(getProductsRequest())

        const { data } = await axios.get<Product[]>('/api/products/')
        dispatch(getProductsSuccess(data))



    } catch (error) {
        dispatch(getProductsFail(error))


    }
}

export const getProduct = (id: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(getProductRequest())

        const { data } = await axios.get<Product>(`/api/products/${id}`)
        dispatch(getProductSuccess(data))



    } catch (error) {
        dispatch(getProductFail(error))


    }
}