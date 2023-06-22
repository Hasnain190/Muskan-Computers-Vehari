export default function ProductCard({ product }: any) {
    return (
        <div className='h-[290px] w-[227px] rounded-lg p-2 m-4 cursor-pointer hover:'>
            {/* image  */}
            <div className="image bg-backgroundImage flex justify-center items-center ">
                <img className='h-[184px] object-scale-down' src={product?.image} alt="product image" />

            </div>
            <div className="description-product ">


                {/* product name  */}
                <div className="name font-semibold">{product?.title}</div>

                {/* product price  */}
                <div className="price">{product?.price}</div>
                {/* Ratings */}
                <div className="ratings">{product?.ratings}</div>
            </div>

        </div>
    )
}
