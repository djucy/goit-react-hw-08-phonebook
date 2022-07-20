import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contactsAction';
import { contactsOperation } from '../contacts';

const items = createReducer([], {

    [contactsOperation.fetchItems.fulfilled]: (_, action) => action.payload,
    [contactsOperation.postItems.fulfilled]: (state, { payload }) => [payload, ...state],
    [contactsOperation.deleteItems.fulfilled]: (state, { payload }) => state.filter(({ id }) => id !== payload),
    [contactsOperation.editItems.fulfilled]: (state, { payload }) => state.map(contact => (contact.id === payload.id ? payload:contact))


}
    //     initialState, {

    //     [actions.addContact]: (state, { payload }) => [...state, payload],
    //     [actions.deleteContact]: (state, { payload }) =>
    //         state.filter(({ id }) => id !== payload),

    // }
)

const filter = createReducer('', {
    [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
    items,
    filter,
})
