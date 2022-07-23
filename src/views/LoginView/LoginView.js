import { useState } from "react";
import { useDispatch } from 'react-redux';
import { authOperation } from 'redux/auth';
import s from '../../components/СommonStyle/CommoneStyle.module.css'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';



export default function LoginView() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return toast.error('Please, enter email and password!',{
                theme: 'colored',
            });
        }
        dispatch(authOperation.logIn({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <div className={s.box__form}>
        <h2 className={s.title__secondary}>Enter your login and password</h2>
        <form onSubmit={handleSubmit}  className={ s.form}>
            <div className={s.label_position}>   
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className={s.input}
                    id="email"
                    placeholder="name@example.com">
                    </input>
                <label
                    htmlFor="email"
                    className={s.label}>
                    Email
                </label>
             </div>
             <div className={s.label_position}>  
                <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        className={s.input}
                        id="password"
                    placeholder="name@example.com">
                    </input>
                <label
                    htmlFor="password"
                    className={s.label}>
                    Password
                </label>
              </div>  
            <button type="submit" className={s.button}>Sign in</button>
        </form>

    </div>
    )

}