// import { useState } from 'react';
import Phonebook from '../../components/Phonebook/Phonebook';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import s from '../../components/СommonStyle/CommoneStyle.module.css';
// import Modal from '../../components/Modal/Modal';
// import ContactEdit from '../../components/ContactEdit/ContactEdit';



export default function Contacts() {


    return (
       <div >
      <div className={s.conatiner__position}>
        <h1 className={s.title}>Phonebook</h1>
        <Phonebook />
        <h2 className={s.title__secondary}>Contacts</h2>
        <Filter />
          <ContactList />
         
      </div>
    </div>
    )
}