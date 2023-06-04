import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from './initialStates';
import { fetchContacts, addContact, deleteContact } from '../ContactsAPI';

const handlePending = state => {
  state.contacts = { ...state.contacts, isLoading: true };
};

const handleFulfild = state => {
  state.contacts = { ...state.contacts, isLoading: false, error: null };
};
const handleFulfildGet = (state, { payload }) => {
  state.contacts = { ...state.contacts, items: payload };
};

const handleFulfildCreate = (state, { payload }) => {
  state.contacts = {
    ...state.contacts,
    items: [payload, ...state.contacts.items],
  };
};
const handleFulfildDelete = (state, { payload }) => {
  state.contacts = {
    ...state.contacts,
    items: state.contacts.items.filter(el => el.id !== payload.id),
  };
};

const handleRejected = (state, { payload }) => {
  state.contacts = {
    ...state.contacts,
    isLoading: false,
    error: payload,
  };
};

export const tasksSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfildGet)
      .addCase(addContact.fulfilled, handleFulfildCreate)
      .addCase(deleteContact.fulfilled, handleFulfildDelete)
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addContact.fulfilled,
          deleteContact.fulfilled
        ),
        handleFulfild
      );
  },
});

export const tasksReducer = tasksSlice.reducer;
