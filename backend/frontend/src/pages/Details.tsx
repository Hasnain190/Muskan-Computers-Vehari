import { useParams } from 'react-router-dom'



import Loader from '../components/Loader'

import { useEffect } from 'react'
import { getProduct } from '../features/products/actions'
import { useAppDispatch, useTypedSelector } from '../app/hooks'

export default function Details() {
    const { id } = useParams()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getProduct(id as string))
    }, [id])

    const { product, error, isLoading } = useTypedSelector(state => state.product)


    const itemsInCart: Set<number> = new Set()
    const addProductToCart = (product: any) => {
        itemsInCart.add(product.id)

        console.log(itemsInCart)

    }
    return (
        <div className="bg-white">
            {isLoading ? <Loader /> : error ? <h1>Oops! There is some error {error}</h1> :
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
                        <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                            <img
                                src={product?.image_2}
                                alt={product?.name}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
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

                            {/* Reviews
                        <div className="mt-6">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            className={classNames(
                                                reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                                                'h-5 w-5 flex-shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">{reviews.average} out of 5 stars</p>
                                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    {reviews.totalCount} reviews
                                </a>
                            </div>
                        </div> */}

                            <form className="mt-10">



                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        addProductToCart(product)
                                        // console.log(cart)


                                    }}
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