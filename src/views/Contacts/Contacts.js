import { useState } from 'react';
import Phonebook from '../../components/Phonebook/Phonebook';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import s from '../../components/СommonStyle/CommoneStyle.module.css';
import Modal from '../../components/Modal/Modal';
import ContactEdit from '../../components/ContactEdit/ContactEdit';



export default function Contacts() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [id,setId]=useState('')
 const [isModalOpen, setIsModalOpen]   = useState(false);
  const toggleModal = () => { setIsModalOpen(state => !state) }
  
  const onEditContact = ({ name, number, id }) => {
   
    setName(name);
    setNumber(number);
    setId(id);
    toggleModal();
  }

    return (
       <div className={s.container}>
      <div className={s.conatiner__position}>
        <h1 className={s.title}>Phonebook</h1>
        <Phonebook />
        <h2 className={s.title__secondary}>Contacts</h2>
        <Filter />
          <ContactList onClick={ onEditContact} />
          {isModalOpen && (<Modal onClose={toggleModal} >
            <ContactEdit name={name} number={number} id={id}></ContactEdit>
          </Modal>)}
      </div>
    </div>
    )
}