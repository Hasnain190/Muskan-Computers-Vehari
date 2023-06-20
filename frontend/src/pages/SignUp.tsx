import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMismatch, setPasswordMismatch] = useState(false);

    const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(e.target.value);
        setPasswordMismatch(e.target.value !== confirmPassword);
    };

    const handleConfirmPasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setConfirmPassword(e.target.value);
        setPasswordMismatch(e.target.value !== password);
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Perform signup logic here
        console.log('Email:', email);
        console.log('Password:', password);
        // Clear form inputs
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6">
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
                        onChange={handleEmailChange}
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
                        onChange={handlePasswordChange}
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
                        onChange={handleConfirmPasswordChange}
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
                        type="submit"
                        className="mt-10 flex w-full items-center justify-center rounded-md border border-primary bg-primary  px-8 py-3 text-base font-medium text-white hover:bg-lightBlue hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"

                    >
                        Sign Up
                    </button>
                </div>
            </form >
        </div >
    );
};

export default Signup;
