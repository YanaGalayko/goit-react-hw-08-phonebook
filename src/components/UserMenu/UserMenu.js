import { useAuth } from 'hooks/authUser';
import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/operations';
import { LogOutBtn, Title, UserContainer } from './UserMenu.styled';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
  
    return (
      <UserContainer>
        <Title className="username">Hello, {user.name}</Title>
        <LogOutBtn type="button" onClick={() => dispatch(logOutUser())}>
          Logout
        </LogOutBtn>
      </UserContainer>
    );
  };