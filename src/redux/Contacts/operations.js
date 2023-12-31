import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import Notiflix from 'notiflix';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      console.log(response.data);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      console.log(contact);
      const response = await axios.post('/contacts', contact);
      // Notiflix.Notify.success('Contact was added successfully');

      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'tasks/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      // Notiflix.Notify.info('Contact was deleted successfully');
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
