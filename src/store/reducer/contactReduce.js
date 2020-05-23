import {
  getContacts,
  deleteContact,
  addOneContact,
} from '../action/contactAction';

import { createReducer } from '@reduxjs/toolkit';

const contactReducer = createReducer([], {
  [addOneContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  [getContacts]: (state, { payload }) => [...state, ...payload],
});

export default contactReducer;
