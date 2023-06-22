

const Checkout = () => {
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-lg">
                <form className="bg-white shadow-md rounded px-8 py-6">
                    <h2 className="text-2xl mb-6">Checkout</h2>
                    {/* <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your name"
                            required
                        />
                    </div> */}
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
                            Delivered to  Address
                        </label>
                        <textarea
                            id="address"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your address"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="payment" className="block text-gray-700 font-bold mb-2">
                            Payment Method
                        </label>
                        <select
                            id="payment"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        >
                            <option value="">Select payment method</option>
                            <option value="credit_card">Credit Card</option>
                            <option value="paypal">Easy Paisa</option>
                        </select>
                    </div>

                    {/* Order Summary component */}
                    <div className="order-summary bg-lightBlue rounded-sm max-w-lg  p-4 ">
                        <div className=" text-2xl  mb-2">Order Summary</div>
                        <div className="grid gap-2 ">
                            <div className="box  flex justify-between  ">
                                <div className="box-title">Subtotal
                                </div>
                                <div className="subtotal-value">8343
                                </div>
                            </div>
                            <div className="box flex justify-between ">
                                <div className="box-title">Tax
                                </div>
                                <div className="subtotal-value">2323
                                </div>
                            </div>

                            <div className="box flex justify-between  ">
                                <div className="box-title">Shipping Cost
                                </div>
                                <div className="subtotal-value">2323
                                </div>
                            </div>


                            <div className="box flex justify-between   border-t-2 border-gray-200 ">
                                <h2 className="box-title">Grand Total
                                </h2>
                                <h2 className="subtotal-value">2323
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
            </div>
        </div>
    );
};

export default Checkout;
