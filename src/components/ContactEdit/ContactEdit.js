import { useState } from "react";
// import ContactForm from "components/ContactForm/ConstactForm";
import { contactsOperation } from "redux/contacts";
import { useDispatch } from "react-redux";
import Modal from '../Modal/Modal'
import s from '../ContactForm/ContactForm.module.css'
import style from '../СommonStyle/CommoneStyle.module.css';


export default function ContactEdit({contactName,contactNumber, id}) {
    const dispatch = useDispatch()
    const [name, setName] = useState(contactName);
  const [number, setNumber] = useState(contactNumber);
  const [isModalOpen, setIsModalOpen]   = useState(false);
  const toggleModal = () => { setIsModalOpen(state => !state) }
    // const [id,setId]=useState('')
const onNameInput = e => {
    setName(e.target.value);
  };
  const onNumberInput = e => {
    setNumber(e.target.value);
  };
    const onContactEdit = e => {
        e.preventDefault();
      dispatch(contactsOperation.editItems({ id, number, name }));
      toggleModal();
      
     }

  return (
    <>  
<button type="button" className={s.button__delete} onClick={toggleModal}>
              Edit
        </button>
      {isModalOpen && (<Modal onClose={toggleModal}>
        <form onSubmit={onContactEdit} className={s.form}>
          <label className={style.label}>
            Name
            <input
              className={style.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={onNameInput}
            />
          </label>
          <label className={style.label}>
            Number
            <input className={style.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={onNumberInput}
            />
          </label>

          <button type="submit" className={s.button}>Edit</button>
        </form>
      </Modal>)}
    </>
      );
     
}