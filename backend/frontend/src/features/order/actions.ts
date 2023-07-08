import {
    createOrderRequest, createOrderSuccess, createOrderFail
    , getMyOrdersRequest, getMyOrdersSuccess, getMyOrdersFail,

} from './slice'
import { Dispatch } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import axios from 'axios'
import { Order } from '../../types'


export const createOrder = (order: Order) => async (dispatch: Dispatch, getState: () => RootState) => {

    try {
        dispatch(createOrderRequest())
        const { userLogin: { user } } = getState()
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `JWT ${user?.token}`
            }
        }
        const { data } = await axios.post(`api/orders/create/`, order, config)
        dispatch(createOrderSuccess(data))
    } catch (error: any) {
        createOrderFail(error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message)
    }
}

export const getMyOrders = () => async (dispatch: Dispatch, getState: () => RootState) => {

    try {
        dispatch(getMyOrdersRequest())
        const { userLogin: { user } } = getState()
        const config = {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `JWT ${user?.token}`
            }
        }
        const { data } = await axios.get(`api/orders/mine/`, config)
        dispatch(getMyOrdersSuccess(data))
    } catch (error: any) {
        getMyOrdersFail(error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message)
    }
}