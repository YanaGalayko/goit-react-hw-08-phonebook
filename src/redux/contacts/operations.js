import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      toast.error(
        'Oops, something happened, please reload the page!',{
          duration: 4000,
      });
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contact/addContact',
  async (contact, thunkApi) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      toast.success(
        'The contact has been successfully added to the list!',{
          duration: 4000,
      });
      return data;
    } catch (error) {
      toast.error(
        'Oops, something happened, please reload the page!',{
          duration: 4000,
      });
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      toast.success(
        'We have removed your contact from the list!',{
          duration: 4000,
      });
      return data.id;
    } catch (error) {
      toast.error(
        'Oops, something happened, please reload the page!',{
          duration: 4000,
      });
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContacts",
  async ({id, name, number}, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, {name, number}); 
      toast.success(`Contact was succesfully edited` ,{
        duration: 4000,
    });
      return data;
    } catch (error) {
       toast.error('Oops, something happened, please reload the page!' ,{
        duration: 4000,
    });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);