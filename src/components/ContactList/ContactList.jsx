import React from 'react';

import {
  ContactsList,
  ContactsItem,
  ContactsName,
  ContactsPhone,
  ContactsButton,
} from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilterValue } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const normalizedFilter = filter.toLowerCase();
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ContactsList>
      {filteredContacts.map(contact => {
        return (
          <ContactsItem key={contact.id}>
            <ContactsName>
              {contact.name}: <ContactsPhone>{contact.number}</ContactsPhone>
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
  );
};

export default ContactList;
