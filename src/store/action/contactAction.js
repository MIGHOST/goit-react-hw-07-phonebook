import { createAction } from '@reduxjs/toolkit';

export const addOneContact = createAction('contacts/create');
export const addOneContactRequest = createAction('contacts/addRequest');
export const addOneContactSuccess = createAction('contacts/addSuccess');
export const addOneContactError = createAction('contacts/addError');

export const getContacts = createAction('contacts/getContacts');
export const getContactsRequest = createAction('contacts/getRequest');
export const getContactsSuccess = createAction('contacts/getContacts');
export const getContactsError = createAction('contacts/getError');

export const deleteContact = createAction('remove');
export const deleteContactRequest = createAction('contacts/removeRequest');
export const deleteContactSuccess = createAction('contacts/removeSuccess');
export const deleteContactError = createAction('contacts/removeError');

export const resetError = createAction('contacts/resetError')





