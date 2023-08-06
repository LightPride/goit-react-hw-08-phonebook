import { Header } from './AppBar.styled';
import { Navigation } from '../Navigation/Navigation';
import { AuthNavigation } from '../AuthNavigation/AuthNavigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { selectIsLoggedIn } from 'redux/Authorization/selectors';
import { useSelector } from 'react-redux';
export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </Header>
  );
};
