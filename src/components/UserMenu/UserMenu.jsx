import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/Authorization/operations';
import { selectUserName } from 'redux/Authorization/selectors';
import { NickName, Container, Button } from './UserMenu.styled';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  return (
    <Container>
      <NickName>Welcome, {userName}</NickName>
      <Button
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </Button>
    </Container>
  );
};
