
import Tag from './Tag';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <nav className=' text-white '>
            <div className="navbar-upper flex justify-around items-center p-2">

                {/* Menu */}

                <i className='fa-solid fa-bars text-primary text-xl' ></i>
                {/* Logo */}
                <Link to={'/'} >
                    <h1 className='p-2 text-3xl font-bold text-primary'>Muskan Computers</h1>
                </Link>





                {/* Search */}
                <div className='p-2 text-primary border-2 border-primary rounded-lg w-fit bg-lightBlue '>

                    <input className='bg-lightBlue outline-none' type="text" placeholder='Search...' />
                    <i className="fa-solid text-primary fa-magnifying-glass"></i>

                </div>



                {/* Accounts (sign up/sign in) */}
                <Link to={'/account/signup'}>
                    <div className="account inline-flex items-center p-2">
                        <i className="text-primary fa-regular fa-user"></i>
                        <div className="tag-line text-primary  px-2">Account</div>

                    </div>
                </Link>
                {/* Shopping Cart */}
                <Link to={'/cart'}>
                    <div className="cart inline-flex items-center">
                        <i className="fa-solid text-primary fa-cart-shopping"></i>
                        <div className="tag-line px-2 text-primary">Cart</div>

                    </div>
                </Link>

            </div>
            {/* category tags */}
            <div className="category-tags flex justify-start items-center p-2 mx-3 border-b-2 border-primary">

                <Tag />
                <Tag />
                <Tag />
                <Tag />


            </div>
        </nav>
    )
}
