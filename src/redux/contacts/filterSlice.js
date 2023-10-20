import { createSlice } from '@reduxjs/toolkit';

const initialStateFilter = ''

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialStateFilter,
    reducers: {
      filterContacts(_, action) {
        return action.payload;
      },
    },
  });
  
  export const { filterContacts } = filterSlice.actions;
  export const filterReducer = filterSlice.reducer;