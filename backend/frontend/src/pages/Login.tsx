import { useState, FormEvent, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../features/users/actions';
import { useAppDispatch, useTypedSelector } from '../app/hooks';
import Loader from '../components/Loader';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const redirect = location.search ? location.search.split('=')[1] : '/'
    const { isLoading, isSuccess, error, user } = useTypedSelector(state => state.userLogin)
    const navigate = useNavigate()

    const dispatch = useAppDispatch()
    useEffect(() => {
        if (isSuccess && user && user !== null) {
            navigate(redirect)

        }
    }, [isSuccess, user, redirect])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        dispatch(login({ username, password })
        )



        setPassword('');
    };

    return (

        <div className="flex justify-center items-center h-screen">

            {isLoading && <Loader />}
            {error && <p>{error}</p>}
            {isSuccess && <p>Successfully logged in. Redirecting...</p>}
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-regular mb-2">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 font-regular mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <p>
                    New customer?
                    <Link
                        to={"/account/signup"}
                        className="inline-block text-primary ml-1"
                    >

                        Register here.
                    </Link>
                </p>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="mt-10 flex w-full items-center justify-center rounded-md border border-primary bg-primary  px-8 py-3 text-base font-medium text-white hover:bg-lightBlue hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Sign In
                    </button>

                </div>
            </form>
        </div>
    );
};

export default Login;
