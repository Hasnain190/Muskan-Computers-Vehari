import { useAppDispatch } from "../app/hooks";
import { logout } from "../features/users/actions";


const LogoutButton = () => {

    const dispatch = useAppDispatch()

    
    const handleLogout = () => {


    dispatch(logout())
      console.log('Logged out');
    };
  
    return (
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
    );
  };
  
  export default LogoutButton;
  