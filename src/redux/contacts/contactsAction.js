
import { createAction } from '@reduxjs/toolkit';


const addContact = createAction('contacts/add');
const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/changeFilter');
const actions = { addContact, deleteContact, changeFilter };


// export const deleteContactRequest = createAction('contacts/deleteContactRequest');
// export const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
// export const deleteContactError = createAction('contacts/deleteContactError');

export default actions;

