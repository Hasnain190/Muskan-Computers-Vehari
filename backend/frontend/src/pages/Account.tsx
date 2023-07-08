import { useEffect, useState } from "react";
import { useAppDispatch, useTypedSelector } from "../app/hooks";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useNavigate } from "react-router-dom";
import { updateProfileReset } from "../features/users/slice";
import { getProfile, updateUserProfile } from "../features/users/actions";
import { getMyOrders } from "../features/order/actions";


export default function Account(): JSX.Element {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')


    const { error, user } = useTypedSelector(state => state.userLogin)

    const { profile, isLoading, error: errorProfile } = useTypedSelector(state => state.userProfile)
    const { isSuccess: updateSuccess } = useTypedSelector(state => state.userUpdateProfile)



    const { isLoading: loadingOrders, orders, error: errorOrders } = useTypedSelector(state => state.getMyOrders)



    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (password != confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(updateUserProfile({
                'id': profile?.id as number,
                'name': name,
                'email': email,
                'password': password
            }))
            setMessage('')
        }
    }

    useEffect(() => {
        if (!user) {
            navigate("account/login/")

        } else {
            // if (!profile || profile?.id !== user.id || updateSuccess || !profile.username) {
            dispatch(updateProfileReset())
            dispatch(getProfile())
            dispatch(getMyOrders())
            // }
            // else {
            //     setName(profile.username)
            //     setEmail(profile.email as string)
            // }

        }

    }, [user, updateSuccess])
    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/4">

                <h2 className="text-2xl font-bold">User Profile</h2>

                {message && <Message type="success" text={message} />}
                {error && <Message type="error" text={JSON.stringify(error)} />}
                {errorProfile && <Message type="error" text={errorProfile} />}
                {isLoading && <Loader />}

                <form onSubmit={submitHandler} className="space-y-4">

                    <div className="space-y-1">
                        <label htmlFor='name' className="text-sm font-medium">Name</label>
                        <input
                            required
                            type='text'
                            placeholder={profile?.name ? profile?.name : "Enter Name"}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border border-gray-300 rounded py-2 px-3"
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor='email' className="text-sm font-medium">Email Address</label>
                        <input
                            required
                            type='email'
                            placeholder={profile?.email ? profile?.email : "Enter Email"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded py-2 px-3"
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor='password' className="text-sm font-medium">Password</label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded py-2 px-3"
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor='passwordConfirm' className="text-sm font-medium">Confirm Password</label>
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded py-2 px-3"
                        />
                    </div>

                    <button type='submit' className="w-full bg-blue-500 text-white py-2 rounded">
                        Update
                    </button>

                </form>
                bb</div>

            <div className="w-full md:w-3/4 md:pl-6">
                <h2 className="text-2xl font-bold">My Orders</h2>
                {loadingOrders ? (
                    <Loader />
                ) : errorOrders ? (
                    <Message type="error" text={JSON.stringify(errorOrders)} />
                ) : (
                    <table className="w-full text-sm md:text-base">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="py-2">ID</th>
                                <th className="py-2">Date</th>
                                <th className="py-2">Total</th>
                                <th className="py-2">Paid</th>
                                <th className="py-2">Delivered</th>
                                <th className="py-2"></th>
                            </tr>
                        </thead>

                        <tbody>
                            {orders.map(order => (
                                <tr key={order._id} className="border-b border-gray-200">
                                    <td className="py-2">{order._id}</td>
                                    <td className="py-2">{order?.createdAt ? (order.createdAt as string).substring(0, 10) : ''}</td>


                                    <td className="py-2">${order.totalPrice}</td>
                                    <td className="py-2">{order.isPaid ? (order.paidAt as string).substring(0, 10) : (
                                        <i className='fas fa-times text-red-500'></i>
                                    )}</td>
                                    <td className="py-2">{order.isDelivered ?
                                        <i className='fas fa-times text-red-500'></i> :
                                        <i className='fas fa-times text-red-500'></i>
                                    }</td>
                                    {/* <td className="py-2">
                                        <Link to={`/order/${order._id}`} className="text-blue-500">
                                            Details
                                        </Link>
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>

    )
}
