import { useState } from "react";
import { useDispatch } from 'react-redux';
import { authOperation } from 'redux/auth';
// import { TextField } from "@mui/material";
// import { Navigate } from "react-router-dom";
import style from '../../components/СommonStyle/CommoneStyle.module.css'

export default function RegisterView() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassord] = useState('');
    const dispatch = useDispatch();


    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassord(value);
            default: return;
        }

    }
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperation.register({ name, email, password }));

        setName('');
        setEmail('');
        setPassord('');
        // return <Navigate to="/login"/>

    }

    return (
        <div className={style.box__form}>
            <h2 className={style.title__secondary}>Sign up, please</h2>
            <form onSubmit={handleSubmit} className={ style.form}>
               
             <div className={style.label_position}>
                <input
                    type="name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    className={style.input}
                    id="name"
                    placeholder="name@example.com">
                 
                    </input>

                <label
                    htmlFor="name"
                    className={style.label}>
                    Name
                </label>
             </div>

             <div className={style.label_position}>   
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className={style.input}
                    id="email"
                    placeholder="name@example.com">
                    </input>
                <label
                    htmlFor="email"
                    className={style.label}>
                    Email
                </label>
             </div>

             <div className={style.label_position}>  
                <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        className={style.input}
                        id="password"
                    placeholder="name@example.com">
                    </input>
                <label
                    htmlFor="password"
                    className={style.label}>
                    Password
                </label>
              </div>  
                
                <button type="submit" className={style.button}>Register</button>
            </form>
           
        </div>
    )
}
//  <div class="text-field text-field_floating">
//       <input class="text-field__input" type="email" id="email" placeholder="alexander@itchief.ru">
//       <label class="text-field__label" for="email">Email</label>
//     </div>