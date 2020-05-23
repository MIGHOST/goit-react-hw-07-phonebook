import { createAction } from '@reduxjs/toolkit';

export const filterContact = createAction('filtered', event => ({
  payload: event.target.value,
}));


