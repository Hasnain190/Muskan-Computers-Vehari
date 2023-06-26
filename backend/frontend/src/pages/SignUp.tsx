import { useEffect, useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';


import { useNavigate } from "react-router-dom";
import { register } from '../features/users/actions';
import { useAppDispatch, useTypedSelector } from '../app/hooks';
import Loader from '../components/Loader';
import Message from '../components/Message';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const navigate = useNavigate()


    // const location = useLocation()
    // const redirectUrl = location.search ? location.search.split('=')[1] : '/'


    const { isSuccess, error, isLoading } = useTypedSelector(state => state.userRegister)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (isSuccess) {
            navigate(-1)
        }
    }, [isSuccess])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Perform SignUp logic here

        dispatch(register({
            username,
            email,
            password
        })
        )
        console.log('Email:', email);
        console.log('Password:', password);
        // Clear form inputs

        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="flex justify-center items-center h-screen">
            {isLoading ? <Loader /> : error ? <Message type='error' text={error} /> :
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-4 w-full max-w-md">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-regular mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-regular mb-2">
                            A unique Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter Unique Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-regular mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${passwordMismatch ? 'border-red-500' : ''
                                }`}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value); setPasswordMismatch(e.target.value !== confirmPassword) }}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-gray-700 font-regular mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${passwordMismatch ? 'border-red-500' : ''
                                }`}
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={e => { setConfirmPassword(e.target.value); setPasswordMismatch(e.target.value !== password); }}
                            required
                        />
                        {passwordMismatch && (
                            <p className="text-red-500 text-xs italic">Passwords do not match.</p>
                        )}
                    </div>
                    <p>Already joined? <Link className='text-primary' to={'/account/login'}>
                        Login Here</Link></p>
                    <div className="flex items-center justify-between">
                        <button
                            disabled={isLoading}
                            type="submit"
                            className="mt-10 flex w-full items-center justify-center rounded-md border border-primary bg-primary  px-8 py-3 text-base font-medium text-white hover:bg-lightBlue hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"

                        >
                            Sign Up
                        </button>
                    </div>
                    {isSuccess && <p>Successfully signed up!</p>}
                    {error && <p>{error}</p>}

                </form >
            }
        </div >
    );
};

export default SignUp;
