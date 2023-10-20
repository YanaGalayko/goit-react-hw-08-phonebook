import { useAuth } from 'hooks/authUser';
import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/operations';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
  
    return (
      <div>
        <p className="username">Welcome, {user.name}</p>
        <button type="button" onClick={() => dispatch(logOutUser())}>
          Logout
        </button>
      </div>
    );
  };