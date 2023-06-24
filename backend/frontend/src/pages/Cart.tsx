import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getMyCart, removeItemsFromCart } from '../features/cart/action';
import { useAppDispatch, useTypedSelector } from '../app/hooks';
import { CartItem } from '../types';


export default function Cart() {

    const dispatch = useAppDispatch()
    const { items: cartItems } = useTypedSelector(state => state.getMyCart)



    const total = cartItems.reduce((acc: number, item: CartItem) => {
        //@ts-ignore
        return acc + item.quantity * item.product.price



    }, 0)
    const shippingCost = 400
    const tax = total * 0.1

    const grandTotal = total + shippingCost + tax

    useEffect(() => {
        dispatch(getMyCart())
    }, []);
    return (
        <div className='grid justify-center'>
            <h2 className='text-2xl text-start font-bold'>My Cart</h2>
            {cartItems.map((item: CartItem) => (
                <div className="border-primary border  p-2 rounded-md m-2 max-w-lg relative flex gap-2 items-start">

                    <div className="image w-1/4 object-scale-down">
                        <img
                            className=' '
                            //@ts-ignore
                            src={item.product?.image} />
                    </div>

                    <div className="non-image">
                        <div className="title">

                        </div>
                        {/* @ts-ignore */}
                        <div className="price">Price: {item.product?.price}</div>
                        <div className="quantity">Qty: {item.quantity}</div>

                    </div>

                    <div
                        // @ts-ignore
                        onClick={() => dispatch(removeItemsFromCart(item.product?.id))}
                        className="delete absolute top-0 right-0 m-1 px-1 border-2 border-primary hover:bg-primary hover:text-white transition rounded-md cursor-default">X</div>
                </div>


            )
            )
            }





            {/* Order Summary component */}
            <div className="order-summary bg-lightBlue rounded-sm max-w-lg  p-4 ">
                <div className=" text-2xl  mb-2">Order Summary</div>
                <div className="grid gap-2 ">
                    <div className="box  flex justify-between  ">
                        <div className="box-title">Subtotal
                        </div>
                        <div className="subtotal-value">{total}
                        </div>
                    </div>
                    <div className="box flex justify-between ">
                        <div className="box-title">Tax
                        </div>
                        <div className="subtotal-value">{tax}
                        </div>
                    </div>

                    <div className="box flex justify-between  ">
                        <div className="box-title">Shipping Cost
                        </div>
                        <div className="subtotal-value">{shippingCost}
                        </div>
                    </div>


                    <div className="box flex justify-between   border-t-2 border-gray-200 ">
                        <h2 className="box-title">Grand Total
                        </h2>
                        <h2 className="subtotal-value">{grandTotal}
                        </h2>
                    </div>

                </div>
                <Link to={'/checkout'}>
                    <button className="custom-button w-3/4">
                        Checkout

                    </button>
                </Link>
            </div>




        </div >
    )
}

