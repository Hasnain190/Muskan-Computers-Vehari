import React, { useEffect } from 'react'

export default function Cart() {
    const [cartItems, setCartItems] = React.useState<any>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const cartResponse = await fetch('https://fakestoreapi.com/carts');
                const cartData = await cartResponse.json();
                setCartItems(cartData);

                // const response = await fetch('https://fakestoreapi.com/products/');
                // const data = await response.json();
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className=''>

            {cartItems.map((item: any) => (
                <div className="border-primary border-2  p-4 rounded-sm max-w-lg ">
                    <div className="flex justify-between">
                        <div className="image">
                            <img src="" alt="product image" />
                        </div>

                        <div className="non-image">
                            <div className="title">{item?.id}</div>
                            <div className="price">{item?.price}</div>
                            <div className="quantity">{item?.quantity}</div>

                        </div>

                    </div>
                    <div className="delete">X</div>
                </div>


            )
            )
            }





            {/* Order Summary component */}
            {/* <div className="order-summary bg-lightBlue rounded-sm max-w-lg  p-4 ">
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

                <button className="custom-button w-3/4">
                    Checkout

                </button>
            </div> */}




        </div >
    )
}

