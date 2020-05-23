import { createReducer } from '@reduxjs/toolkit';
import {
  addOneContactRequest,
  addOneContactSuccess,
  getContactsRequest,
  getContactsSuccess,
  deleteContactRequest,
  deleteContactSuccess,
} from '../action/contactAction';
const initialState = false;

const loaderReducer = createReducer(initialState, {
  [addOneContactRequest]: () => true,
  [addOneContactSuccess]: () => false,
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
});
export default loaderReducer;
