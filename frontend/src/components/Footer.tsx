
import React from 'react'

export default function Footer() {
    return (
        <div className='footer bottom-0 left-0 w-full p-10 bg-primary text-white flex justify-center gap-4'>
            <div className="left-half">
                {/* logo */}
                <h1 className='p-4 text-3xl font-bold text-white'>Muskan Computers</h1>




                {/* contacts */}
                <div className="social flex gap-2 cursor-pointer ">
                    <i className="fa-solid fa-phone text-3xl"></i>
                    <div className="description">
                        <div className="headline text-lg font-bold">Contact</div>
                        <a href='tel:9232323233' className="headline">+92 323 23233</a>

                    </div>
                </div>
                {/* whatsapp */}
                <div className="social flex gap-2 cursor-pointer ">
                    <i className="fa-brands fa-whatsapp text-3xl"></i>
                    <div className="description">
                        <div className="headline text-lg font-bold">Whatsapp</div>
                        <div className="headline">+3232 23 23 23</div>

                    </div>
                </div>

                {/* email */}
                <div className="social flex gap-2 cursor-pointer ">
                    <i className="fa-solid fa-envelope text-lg"></i>
                    <div className="description">
                        <div className="headline text-lg font-bold">Email</div>
                        <div className="headline">somemail@tmail.com</div>

                    </div>
                </div>

            </div>
            <div className="right-half flex  gap-4">
                <div className="first-right-half">
                    <h3 className='text-3xl py-2 border-b-2 pb-4 mb-2'>Popular Categories</h3>
                    <ul className='py-2 flex flex-col gap-2'>
                        <li >Computers</li>
                        <li>Electronics</li>
                        <li>Fashion</li>
                        <li>Furniture</li>
                        <li>Toys</li>
                        <li>Home Appliances</li>
                        <li>Books</li>
                        <li>Grocery</li>

                    </ul>

                </div>
                <div className="second-right-half">
                    <h3 className='text-3xl py-2 border-b-2 pb-4 mb-2'>Customer Services</h3>
                    <ul className='py-2 flex flex-col gap-2'>
                        <li>
                            <a href="#">About us</a>
                        </li>

                        <li>
                            <a href="#">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="#">FAQs</a>
                        </li>
                        <li>
                            <a href="#">Return Policy</a>
                        </li>

                        <li>
                            <a href="#">Mission Statement</a>
                        </li>

                    </ul>

                </div>


            </div>


        </div>
    )
}
