import {
    addItemsToCartRequest,
    addItemsToCartSuccess, addItemsToCartFail,

    removeItemsFromCartRequest, removeItemsFromCartSuccess, removeItemsFromCartFail,

    getMyCartRequest, getMyCartSuccess,
    getMyCartFail,

    updateItemQuantityRequest, updateItemQuantitySuccess, updateItemQuantityFail
}

    from './slice'

import { Dispatch } from '@reduxjs/toolkit'

import { CartItem } from '../../types'
import axios from 'axios'
import { RootState } from '../../app/store'

export const addItemsToCart = (cartItem: CartItem) => async (dispatch: Dispatch, getState: () => RootState) => {
    try {
        dispatch(addItemsToCartRequest())

        // TODO:
        const { userLogin: { user } } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `JWT ${user?.token}`
            }
        }
        const { data } = await axios.post('api/cart/add/', cartItem, config)

        dispatch(addItemsToCartSuccess(data))


    } catch (error: any) {
        dispatch(addItemsToCartFail(error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message))
        console.error(error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message)
    }





}


export const removeItemsFromCart = (item: CartItem) => async (dispatch: Dispatch, getState: () => RootState) => {
    try {
        dispatch(removeItemsFromCartRequest())

        // TODO:
        const { userLogin: { user } } = getState()

        const config = {
            headers: {

                'Authorization': `JWT ${user!.token}`
            }
        }
        // @ts-ignore
        const { data } = await axios.put(`api/cart/${item.product.id}/remove-cart-item/`, null, config)

        dispatch(removeItemsFromCartSuccess(data))


    } catch (error: any) {
        dispatch(removeItemsFromCartFail(error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message))
    }





}

export const getMyCart = () => async (dispatch: Dispatch, getState: () => RootState) => {
    try {
        dispatch(getMyCartRequest())

        // TODO:
        const { userLogin: { user } } = getState()

        const config = {
            headers: {

                'Authorization': `JWT ${user?.token}`
            }
        }
        const { data } = await axios.get('api/cart/my-cart/', config)

        dispatch(getMyCartSuccess(data))


    } catch (error: any) {
        dispatch(getMyCartFail(error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message))
    }
}


export const updateItemQuantity = (quantity: number, id: number) => async (dispatch: Dispatch, getState: () => RootState) => {
    try {
        dispatch(updateItemQuantityRequest())

        // TODO:
        const { userLogin: { user } } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `JWT ${user?.token}`
            }
        }
        const { data } = await axios.put(`api/cart/${id}/update-quantity/`, quantity, config)

        dispatch(updateItemQuantitySuccess(data))


    } catch (error: any) {
        dispatch(updateItemQuantityFail(error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message))
    }
}