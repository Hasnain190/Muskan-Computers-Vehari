import { useEffect } from 'react'
import { useAppDispatch, useTypedSelector } from '../app/hooks'
import { getMyCart } from '../features/cart/action'
import { CartItem } from '../types'
import { TAX_RATE, SHIPPING_COST } from '../constant'


export default function CalculateTotals() {
    const dispatch = useAppDispatch()
    const { items: cartItems } = useTypedSelector(state => state.getMyCart)

    const { isSuccess } = useTypedSelector(state => state.removeFromCart)

    const total = cartItems ? cartItems.reduce((acc: number, item: CartItem) => {
        //@ts-ignore
        return acc + item.quantity * item.product.price
    }, 0) : 0
    const shippingCost = SHIPPING_COST
    const tax = (total * TAX_RATE)

    const grandTotal = total + shippingCost + tax

    useEffect(() => {
        dispatch(getMyCart())

    }, [isSuccess]);
    return { total, shippingCost, tax, grandTotal }


}
