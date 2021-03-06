import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import style from '../СommonStyle/CommoneStyle.module.css';
import s from '../Filter/Filter.module.css';

import {contactsSelector,contactsAction } from '../../redux/contacts';


const Filter = () => {
  const value = useSelector(contactsSelector.getFilter);
  console.log(value)
  const dispatch = useDispatch();
  const onChange = (e) => {
    dispatch(contactsAction.changeFilter(e.target.value));
  };
  return (
    <div className={s.container__filter}>
      <label className={s.label} htmlFor="contact">
        Find contacts by name</label>
      <input
          className={s.input}
          type="text"
        value={value}
        id="contact"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={onChange}
        />
      
    </div>
  )
};

export default Filter;