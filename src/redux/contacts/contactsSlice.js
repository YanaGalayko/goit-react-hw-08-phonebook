import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact, editContact } from './operations';
import { logOutUser } from 'redux/auth/operations';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: {
    // FETCH

    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts = action.payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.isError = action.payload;
    },
    // ADD

    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.push(action.payload);
      state.isLoading = false;
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.isError = action.payload;
    },

    // DELETE

    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      state.isLoading = false;
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.isError = action.payload;
    },

    // LOGOUT

    [logOutUser.fulfilled](state) {
      state.contacts = [];
      state.isLoading = false;
      state.isError = false;
    },

    // EDIT

    [editContact.pending](state) {
      state.isLoading = true;
    },

    [editContact.fulfilled](state, action) {
      state.isLoading = false;
      state.isError = null;
      state.contacts = state.contacts.map(contact => {
        if (contact.id === action.payload.id) {
          return action.payload;
        }
        return contact;
      });
    },

    [editContact.rejected](state, action) {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;