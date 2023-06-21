import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

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
        <div className='grid justify-center'>
            <h2 className='text-2xl text-start font-bold'>My Cart</h2>
            {cartItems.map((item: any) => (
                <div className="border-primary border  p-2 rounded-md m-2 max-w-lg relative flex gap-2 items-start">

                    <div className="image w-1/4 object-scale-down">
                        <img
                            className=' '
                            src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg" alt="product image" />
                    </div>

                    <div className="non-image">
                        <div className="title">
                            Lenovo Legion
                        </div>
                        <div className="price">Price: 1212</div>
                        <div className="quantity">Qty: 23</div>

                    </div>


                    <div className="delete absolute top-0 right-0 m-1 px-1 border-2 border-primary hover:bg-primary hover:text-white transition rounded-md cursor-default">X</div>
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
                <Link to={'/checkout'}>
                    <button className="custom-button w-3/4">
                        Checkout

                    </button>
                </Link>
            </div>




        </div >
    )
}

