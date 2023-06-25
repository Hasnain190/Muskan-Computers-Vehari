import {
    createOrderRequest, createOrderSuccess, createOrderFail

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