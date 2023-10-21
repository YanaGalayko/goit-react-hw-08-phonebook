import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/authUser';
import { Container } from './AppBar.styled';

export const AppBar = () => {
    const { isLoggedIn } = useAuth();
  
    return (
      <Container >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    );
  };
