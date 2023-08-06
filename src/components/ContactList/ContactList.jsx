import React from 'react';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/Contacts/operations';
import {
  ContactsList,
  ContactsItem,
  ContactsName,
  ContactsPhone,
  ContactsButton,
} from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/operations';
import { selectVisibleContacts } from 'redux/Contacts/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(selectVisibleContacts);
  return (
    <>
      {contacts.length > 0 && (
        <ContactsList>
          {contacts.map(contact => {
            return (
              <ContactsItem key={contact.id}>
                <ContactsName>
                  {contact.name}: <ContactsPhone>{contact.phone}</ContactsPhone>
                </ContactsName>
                <ContactsButton
                  type="button"
                  onClick={() => dispatch(deleteContact(contact.id))}
                >
                  <span>Delete</span>
                </ContactsButton>
              </ContactsItem>
            );
          })}
        </ContactsList>
      )}
    </>
  );
};

export default ContactList;
