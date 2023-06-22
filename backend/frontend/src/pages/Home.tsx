import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom';

export default function Home() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);



    return (
        <div className="container mx-auto">

            {/* Carousels */}

            {/* Product Cards   */}
            <div className="products flex flex-wrap justify-center gap-3">


                {products?.map((product: any) => (
                    <Link key={product.id} to={`/product/${product.id}`} >

                        <ProductCard key={product.id} product={product} />
                    </Link>
                ))}

            </div>
        </div>
    )
}
