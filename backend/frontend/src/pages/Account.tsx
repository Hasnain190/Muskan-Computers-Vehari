import { useState } from 'react';
import LogoutButton from '../components/Logout';

const Account = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordReset = () => {
    // Implement password reset logic
    if (password !== confirmPassword) {
      // Display an error message if passwords don't match
      console.log("Passwords don't match");
    } else {
      // Proceed with password reset
      console.log('Password reset successful');
    }
  };

  // Mock data for order list
  const orders = [
    { id: 1, name: 'Order 1' },
    { id: 2, name: 'Order 2' },
    { id: 3, name: 'Order 3' },
  ];

  return (
    <div className="container mx-auto">
      
      <LogoutButton />
      <h2 className="text-2xl font-bold mb-4">Account</h2>

      <div className="mb-8">
        <h3 className="text-lg font-bold mb-2">Reset Password</h3>
        <div className="flex mb-2">
          <input
            type="password"
            placeholder="New Password"
            className="p-2 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex mb-2">
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-2 border border-gray-300 rounded"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePasswordReset}
        >
          Reset Password
        </button>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-2">Order History</h3>
        <ul>
          {orders.map((order) => (
            <li key={order.id}>{order.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Account;
