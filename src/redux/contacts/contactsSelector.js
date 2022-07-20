import { createSelector } from '@reduxjs/toolkit';
 const getContact = (state) => state.contacts.items;
 const getFilter = (state) => state.contacts.filter;

 const getFilteredContacts = createSelector(
    [getContact, getFilter],
    (items, filter) => {
        const normalizedFilter = filter.toLowerCase();
        return items.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
    }
)

const contactsSelector = {
    getContact,
    getFilter,
    getFilteredContacts
}

export default contactsSelector



// const contacts = completeContactList.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
// const getVisibleTodos = createSelector(
//     [getAllTodos, getFilter],
//     (todos, filter) => {
//         const normalizedFilter = filter.toLowerCase();
//         return todos.filter(({ description }) =>
//             description.toLowerCase().includes(normalizedFilter),
//         );
//     },
// );