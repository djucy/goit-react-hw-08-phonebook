import { useState } from 'react';

import { useDispatch, useSelector } from "react-redux";

import { contactsSelector } from '../../redux/contacts';
import { contactsOperation } from '../../redux/contacts';
// import ContactForm from '../ContactForm/ConstactForm';
import s from './Phonebook.module.css';
import style from '../СommonStyle/CommoneStyle.module.css';


export default function Phonebook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector.getContact);

  const onNameInput = e => {
    setName(e.target.value);
  };
  const onNumberInput = e => {
    setNumber(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();

    const contact = {
      // id: nanoid(),
      name,
      number,
    };

    const userName = contacts.find(
      user => user.name === contact.name,
    );

    if (userName) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    dispatch(contactsOperation.postItems(contact));
    setName('');
    setNumber('');
  };



  return (
    // <ContactForm onSubmit={onFormSubmit}
    //   onNameInput={onNameInput} onNumberInput={onNumberInput}
    // name={name} number={number} text="Add contact"></ContactForm>
    <div className={style.box__formPosition}>
    <form onSubmit={onFormSubmit} >
      
      <div className={style.label_position}> 
      <input
          className={style.input}
          type="text"
          name="name"
          id="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onNameInput}
          placeholder="name@example.com"
        />
        <label
          className={style.label}
        htmlFor="name">
        Name
        </label>
      </div> 
      <div className={style.label_position}> 
          <input className={style.input}
          type="tel"
          name="number"
          id="email"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onNumberInput}
          placeholder="name@example.com"
        />
        <label
          className={style.label}
          htmlFor="email">
        Number
      </label>
</div> 
      <button type="submit" className={s.button}>Add contact</button>
      </form>
      </div>
  );
}

