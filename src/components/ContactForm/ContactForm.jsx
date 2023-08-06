import React, { useState } from 'react';
import { Form, FormLabel, FormInput, FormButton } from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/Contacts/operations';
import shortid from 'shortid';
import { selectContacts, selectIsLoading } from 'redux/Contacts/selectors';

import { toast } from 'react-toastify';
import { notifyOptions } from 'components/notifyOptions';

function ContactForm() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const normalizedName = name.toLowerCase();
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );
    if (existingContact) {
      toast.error(`${name}: is already in contacts`, notifyOptions);
      return;
    }

    dispatch(addContact({ id: shortid.generate(), name, number }));
    resetForm();
  };

  const handleChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'number':
        setNumber(event.currentTarget.value);
        break;

      default:
        break;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form action="" onSubmit={handleSubmit}>
      <FormLabel htmlFor="">
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </FormLabel>

      <FormLabel htmlFor="">
        Phone
        <FormInput
          type="text"
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          onChange={handleChange}
        />
      </FormLabel>
      <FormButton type="submit">
        {isLoading ? 'Loading...' : 'Add Contact'}
      </FormButton>
    </Form>
  );
}

export default ContactForm;
