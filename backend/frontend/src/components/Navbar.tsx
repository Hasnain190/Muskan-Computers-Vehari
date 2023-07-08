

import Tag from './Tag';
import { Link, useNavigate } from 'react-router-dom';

import { getCategories } from '../../src/features/category/actions'
import { useEffect } from 'react';
import { useAppDispatch, useTypedSelector } from '../app/hooks';
import Search from './Search';
import { logout } from '../features/users/actions';
export default function Navbar() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const { categories } = useTypedSelector((state) => state.categories);
    const { user } = useTypedSelector((state) => state.userLogin);
    const { items } = useTypedSelector(state => state.getMyCart)
    const logoutHandler = () => {
        dispatch(logout())
        navigate("/")
    }
    const itemsInCart = items.length
    useEffect(() => {
        dispatch(getCategories());
    }, [items])


    return (
        <nav className=' text-white '>
            <div className="navbar-upper flex justify-around items-center p-2">

                {/* Menu */}

                {/* <i className='fa-solid fa-bars text-primary text-xl' ></i> */}
                {/* Logo */}
                <Link to={'/'} >
                    <h1 className='p-2 text-3xl font-bold text-primary'>Muskan Computers</h1>
                </Link>





                {/* Search */}
                <Search />




                {/* Accounts (sign up/sign in) */}
                {user && user !== null ? (
                    <>
                        <Link to={'/account/profile'}>
                            <div className="account inline-flex items-center p-2">
                                <i className="text-primary fa-regular fa-user"></i>
                                <div className="tag-line text-primary  px-2">{user?.name}
                                </div>
                                <i className="fa-solid text-primary fa-caret-down"></i>
                            </div>
                        </Link>
                        <button className="mt-3 flex  items-center justify-center rounded-md border border-primary bg-primary  px-8 py-3 text-base font-medium text-white hover:bg-lightBlue hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={logoutHandler}>Logout</button>
                    </>
                ) : (
                    <Link to={'/account/signup'}>
                        <div className="account inline-flex items-center p-2">
                            <i className="text-primary fa-regular fa-user"></i>
                            <div className="tag-line text-primary  px-2">Account</div>

                        </div>
                    </Link>
                )}
                {/* Shopping Cart */}
                <Link to={'/cart'}>
                    <div className="cart inline-flex items-center">
                        <p className='text-sm text-white bg-primary rounded-full p-1'>{itemsInCart}</p>
                        <i className="fa-solid text-primary fa-cart-shopping"></i>
                        <div className="tag-line px-2 text-primary">Cart</div>

                    </div>
                </Link>

            </div>
            {/* category tags */}
            <div className="category-tags flex justify-start items-center p-2 mx-3 border-b-2 border-primary">

                {categories?.map((category) =>

                    <Tag key={category.id} category={category.category} />


                )}



            </div>
        </nav>
    )
}
