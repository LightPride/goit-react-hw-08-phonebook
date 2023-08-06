import { Link } from './AuthNavigation.styled';

export const AuthNavigation = () => {
  return (
    <nav>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </nav>
  );
};
