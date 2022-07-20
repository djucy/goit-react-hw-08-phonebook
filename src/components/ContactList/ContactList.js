import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactList.module.css';
import PropTypes, { arrayOf } from 'prop-types';
// import { getContact, getFilteredContacts } from '../../redux/contacts/contactsSelector';
import { contactsOperation, contactsSelector } from '../../redux/contacts';
import ContactEdit from '../ContactEdit/ContactEdit';


const ContactList = () => {
 
  const dispatch = useDispatch();
  const completeContactList = useSelector(contactsSelector.getContact);
  const contacts = useSelector(contactsSelector.getFilteredContacts);

  useEffect(() => {
    dispatch(contactsOperation.fetchItems())
  }, [dispatch])

  const deleteContact = (id) => {
    dispatch(contactsOperation.deleteItems(id));

  }
  // const onEditButtonClick = ( name,number,id) => {
  //   onClick(name,number,id  )
  //   console.log(id)
  // }

  return (

    <table className={s.table}>
      <thead>
        <tr>
          <th className={s.item}>Name</th>
          <th className={s.item}>Number</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {completeContactList && contacts.map(({ name, number, id }) => (
          <tr key={id} className={s.item}>
            <td className={s.table__date}>{name}</td>
            <td className={s.table__date}>{number}</td>
            <td className={s.table__date}><button type="button" className={s.button__delete} onClick={(e) => deleteContact(id)}>
              Delete
            </button></td>
            <td className={s.table__date}><ContactEdit id={id} contactName={ name} contactNumber={number} /></td>

          </tr>
        ))}
      </tbody>
    </table>

  )
};

export default ContactList;

ContactList.propTypes = {
  contacts: arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  )
}