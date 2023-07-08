import { useEffect, useState } from "react";
import { useAppDispatch, useTypedSelector } from "../app/hooks";
import { createOrder } from "../features/order/actions";
import CalculateTotals from "../components/CalculateTotals";
import { updateUserProfile } from "../features/users/actions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { total, tax, shippingCost, grandTotal } = CalculateTotals()


    const dispatch = useAppDispatch()

    // user 
    const { user } = useTypedSelector(state => state.userLogin)


    const [name, setName] = useState(user?.name || '')
    const [phone, setPhone] = useState(user?.phone || '')
    const [email, setEmail] = useState(user?.email || '')




    // cart info
    const { items } = useTypedSelector(state => state.getMyCart)
    // 

    const { isLoading, error, isSuccess } = useTypedSelector(state => state.createOrder)
    const [paymentMethod, setPaymentMethod] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [province, setProvince] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const country = "Pakistan"

    const navigate = useNavigate()

    const orderSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault;
        dispatch(updateUserProfile({ name, phone, email }))
        const order = {
            paymentMethod: paymentMethod,

            taxPrice: tax,
            shippingPrice: shippingCost,
            totalPrice: grandTotal,

            shippingAddress: {
                address, city, postalCode, country


            },
            orderItems: items.map((item) => {
                return {
                    // @ts-ignore
                    product: item.product.id,
                    // @ts-ignore
                    price: item.product.price,
                    quantity: item.quantity
                };
            })
        }
        console.log(order)
        dispatch(createOrder(order))
    }
    useEffect(() => {
        if (!user) {
            navigate('account/login')

        }


    }, [user])

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-lg">
                {isLoading ? <Loader /> : error ? <Message type="error" text={error} /> : isSuccess ? <Message type="success" text={"Your order is placed successfully. In order to be it dispatch complete payement and see the status of your order on your account page. For more info send a message at 34345343"} /> :
                    <form onSubmit={orderSubmitHandler} className="bg-white shadow-md rounded px-8 py-6">
                        <h2 className="text-2xl mb-6">Checkout</h2>
                        {/* Order Summary */}
                        <div className="order-summary bg-lightBlue rounded-sm max-w-lg  p-4 ">
                            <div className=" text-2xl  mb-2">Items Bought</div>
                            <div className="grid gap-2 ">
                                {items.map((item) =>
                                    // @ts-ignore
                                    <div key={item?.product.id} className="box  flex justify-between  ">
                                        {/* @ts-ignore */}
                                        <div className="box-title">{item?.product.name} {item.quantity}  `
                                        </div>
                                        {/* @ts-ignore */}
                                        <div className="subtotal-value">{item?.product.price}
                                        </div>
                                    </div>
                                )}



                            </div>

                        </div>



                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                Name
                            </label>
                            <input
                                value={name}
                                onChange={e => setName(e.target.value)}
                                type="text"
                                id="name"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                id="phone"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
                                Delivered to  Address
                            </label>
                            <input
                                id="address"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your address"
                                onChange={e => setAddress(e.target.value)}
                                value={address}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="province" className="block text-gray-700 font-bold mb-2">
                                Province
                            </label>
                            <input
                                type="text"
                                id="province"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Province"
                                required
                                onChange={e => setProvince(e.target.value)}
                                value={province}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
                                City
                            </label>
                            <input
                                type="text"
                                id="city"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter city"
                                required
                                value={city}
                                onChange={e => setCity(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="postalCode" className="block text-gray-700 font-bold mb-2">
                                Postal Code
                            </label>
                            <input
                                type="text"
                                id="postal-code"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter city"
                                required
                                value={postalCode}
                                onChange={e => setPostalCode(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="payment" className="block text-gray-700 font-bold mb-2">
                                Payment Method
                            </label>
                            <select
                                id="payment"
                                value={paymentMethod}
                                onChange={e => setPaymentMethod(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            >
                                <option disabled selected >Select payment method</option>
                                <option value="cash-on-Delivery">Cash on Delivery</option>
                                <option value="easypaise">Easy Paisa</option>
                                <option value="nayapay">NayaPay</option>
                                <option value="sadapay">SadaPay</option>
                            </select>
                        </div>

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

                        </div>


                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-primary bg-primary  px-8 py-3 text-base font-medium text-white hover:bg-lightBlue hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Place Order
                            </button>
                        </div>
                    </form>
                }

            </div>
        </div>
    );
};

export default Checkout;
