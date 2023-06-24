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

export const addItemsToCart = (cartItem: CartItem) => async (dispatch: Dispatch, getState: any) => {
    try {
        dispatch(addItemsToCartRequest())

        // TODO:
        const { userLogin: { User } } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `JWT ${User.token}`
            }
        }
        const { data } = await axios.post('api/cart/add/', cartItem, config)

        dispatch(addItemsToCartSuccess(data))


    } catch (error) {
        dispatch(addItemsToCartFail(error))
        console.error(error)
    }





}


export const removeItemsFromCart = (id: number) => async (dispatch: Dispatch, getState: any) => {
    try {
        dispatch(removeItemsFromCartRequest())

        // TODO:
        const { userLogin: { User } } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `JWT ${User.token}`
            }
        }
        const { data } = await axios.put(`api/cart/${id}/remove-cart-item/`, config)

        dispatch(removeItemsFromCartSuccess(data))


    } catch (error) {
        dispatch(removeItemsFromCartFail(error))
    }





}

export const getMyCart = () => async (dispatch: Dispatch, getState: any) => {
    try {
        dispatch(getMyCartRequest())

        // TODO:
        const { userLogin: { User } } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `JWT ${User.token}`
            }
        }
        const { data } = await axios.post('api/cart/my-cart/', config)

        dispatch(getMyCartSuccess(data))


    } catch (error) {
        dispatch(getMyCartFail(error))
    }
}


export const updateItemQuantity = (quantity: number, id: number) => async (dispatch: Dispatch, getState: any) => {
    try {
        dispatch(updateItemQuantityRequest())

        // TODO:
        const { userLogin: { User } } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `JWT ${User.token}`
            }
        }
        const { data } = await axios.post(`api/cart/${id}/update-quantity/`, quantity, config)

        dispatch(updateItemQuantitySuccess(data))


    } catch (error) {
        dispatch(updateItemQuantityFail(error))
    }
}