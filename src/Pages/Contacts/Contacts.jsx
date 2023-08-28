// import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Title } from 'components/Layout/Layout.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import { PagesContainer } from 'components/Layout/Layout.styled';
const Contacts = () => {
  // const dispatch = useDispatch();

  return (
    <PagesContainer>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Your Conracts</Title>
      <Filter />
      <ContactList />
      <ToastContainer />
    </PagesContainer>
  );
};

export default Contacts;
