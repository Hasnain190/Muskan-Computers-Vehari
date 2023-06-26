import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom';
import { getProducts } from '../features/products/actions';
import Loader from '../components/Loader';
import { useEffect } from 'react';
import { useAppDispatch, useTypedSelector } from '../app/hooks';
import Message from '../components/Message';
export default function Home() {

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getProducts())

    }, [])


    const { products, isLoading, error } = useTypedSelector(state => state.products)




    return (
        <div className="container mx-auto">

            {/* Carousels */}
            {isLoading ? <Loader /> :
                error ? <Message type={'error'} text={error} /> :
                    products.length === 0 ? <h1>No products</h1> :


                        (


                            <div className="products flex flex-wrap justify-center gap-3">


                                {products?.map((product: any) => (
                                    <Link key={product.id} to={`/product/${product.id}`} >

                                        <ProductCard key={product.id} product={product} />
                                    </Link>
                                ))}

                            </div>
                        )}


        </div >
    )
}
