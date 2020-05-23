import axios from 'axios';
import {
  addOneContact,
  addOneContactRequest,
  addOneContactSuccess,
  addOneContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  deleteContact,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  resetError,
} from '../action/contactAction';
import shortid from 'shortid';
axios.defaults.baseURL = 'http://localhost:5050';

const options = {
  headers: {
    'Content-Type': 'application/json',
  },
};
export const asyncAddOneContact = contact => async dispatch => {
  dispatch(addOneContactRequest());
  const newContact = { ...contact, id: shortid.generate() };
  try {
    dispatch(resetError());
    const { data } = await axios.post('/contacts', newContact, options);
    dispatch(addOneContact(data));
  } catch (error) {
    dispatch(addOneContactError());
  } finally {
    dispatch(addOneContactSuccess());
  }
};

export const asyncDeleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    dispatch(resetError());
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContact(id));
  } catch (error) {
    dispatch(deleteContactError());
  } finally {
    dispatch(deleteContactSuccess());
  }
};

export const asyncGetContacts = () => async dispatch => {
  dispatch(getContactsRequest());
  try {
    dispatch(resetError());
    const { data } = await axios.get('/contacts');
    dispatch(getContactsSuccess(data));
  } catch (error) {
    dispatch(getContactsError());
  }
};
