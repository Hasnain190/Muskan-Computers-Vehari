import { useParams } from 'react-router-dom'



import Loader from '../components/Loader'

import { useEffect, useState } from 'react'
import { getProduct } from '../features/products/actions'
import { useAppDispatch, useTypedSelector } from '../app/hooks'
import { addItemsToCart } from '../features/cart/action'

export default function Details() {
    const { id } = useParams()
    const dispatch = useAppDispatch()
    const [qty, setQty] = useState(1)

    useEffect(() => {
        dispatch(getProduct(id as string))
    }, [id])

    const { product, error, isLoading } = useTypedSelector(state => state.product)

    const { isSuccess, isLoading: isLoadingCart, error: errorCart } = useTypedSelector(state => state.addToCart)

    useEffect(() => {
        if (isSuccess) {
            alert("Item added to cart")

        }
    }, [isSuccess])

    const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch(addItemsToCart(
            {


                product: Number(id),
                quantity: qty




            }



        ))


    }
    return (
        <div className="bg-white">
            {isLoading || isLoadingCart ? <Loader /> : error || errorCart ? <h1>Oops! There is some error {String(error) || JSON.stringify(errorCart)}</h1> :
                <div className="pt-6">


                    {/* Image gallery */}
                    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">

                            <img
                                src={product?.image}
                                alt={product?.name}
                                className="h-full w-full object-scale-down object-center"
                            />
                        </div>
                        {product?.image_1 &&

                            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                                    <img
                                        src={product?.image_1}
                                        alt={product?.name}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                                    <img
                                        src={product?.image_1}
                                        alt={product?.name}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                            </div>
                        }
                        {product?.image_2 &&
                            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                                <img
                                    src={product?.image_2}
                                    alt={product?.name}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        }
                    </div>

                    {/* product? info */}
                    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product?.name}</h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">



                            <h2 className="sr-only">product information</h2>
                            <p className="text-3xl tracking-tight text-gray-900">{product?.price}</p>



                            <form className="mt-10" onSubmit={handleChange}>

                                <input type="number" value="1" min="1" max={product.countInStock} onChange={(e) => setQty(Number(e.target.value))} step="1" id="quantity" name="quantity" aria-placeholder="Quantity" className="w-full border-2 border-gray-300 rounded-md p-2 text-center" />

                                <button

                                    type="submit"
                                    className="mt-10 flex w-full items-center justify-center rounded-md border border-primary bg-primary  px-8 py-3 text-base font-medium text-white hover:bg-lightBlue hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Add to bag
                                </button>
                            </form>
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{product?.description}</p>
                                </div>
                            </div>





                        </div>
                    </div>
                </div>
            }
        </div >
    )
}
