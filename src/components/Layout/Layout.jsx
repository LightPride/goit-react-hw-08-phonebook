import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StylesDiv } from './Layout.styled';
import { AppBar } from '../AppBar/AppBar';

export const Layout = () => {
  return (
    <StylesDiv>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </StylesDiv>
  );
};
