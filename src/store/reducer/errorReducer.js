import { createReducer } from '@reduxjs/toolkit';
import {
  addOneContactError,
  getContactsError,
  deleteContactError,
  resetError,
} from '../action/contactAction';

const initialState = false;

const errorReducer = createReducer(initialState, {
  [addOneContactError]: () => true,
  [getContactsError]: () => true,
  [deleteContactError]: () => true,
  [resetError]: () => false,
});

export default errorReducer;
