import { useState } from "react";
import ContactForm from "components/ContactForm/ConstactForm";
import { contactsOperation } from "redux/contacts";
import { useDispatch } from "react-redux";

export default function ContactEdit({ id}) {
    const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    // const [id,setId]=useState('')
const onNameInput = e => {
    setName(e.target.value);
  };
  const onNumberInput = e => {
    setNumber(e.target.value);
  };
    const onFormSubmit = e => {
        e.preventDefault();
        dispatch(contactsOperation.editItems(id))
     }

    return (
        
        <ContactForm onSubmit={onFormSubmit}
      onNameInput={onNameInput} onNumberInput={onNumberInput}
    name={name} number={number} text="Edit contact"></ContactForm>
    )
}