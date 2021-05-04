import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { logoutSuccess } from '../auth/auth-actions';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterContacts,
} from './contacts-actions';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
  [logoutSuccess]: () => [],
});

const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

// тiлько на Request ставимo true
const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(null, {
    [fetchContactsError]: (_, { payload }) => payload,
    [addContactError]: (_, { payload }) => payload,
    [deleteContactError]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter, loading, error });
