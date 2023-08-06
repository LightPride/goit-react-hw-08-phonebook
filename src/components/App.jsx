import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
const HomePage = lazy(() => import('../Pages/Home/Home'));
const RegisterPage = lazy(() => import('../Pages/Register/Register'));
const LoginPage = lazy(() => import('../Pages/Login/Login'));
const ContactsPage = lazy(() => import('../Pages/Contacts/Contacts'));
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
