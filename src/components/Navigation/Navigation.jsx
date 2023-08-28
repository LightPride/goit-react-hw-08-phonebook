import { selectIsLoggedIn } from 'redux/Authorization/selectors';
import { Link } from '../AuthNavigation/AuthNavigation.styled';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <Link to="/">Home</Link>

      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
};
