import { useState } from "react";
import { useDispatch } from 'react-redux';
import { authOperation } from 'redux/auth';


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
        dispatch(authOperation.logIn({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (<div>
        <h1>Введите логин и пароль</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Почта
                 <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}>
                </input>

            </label>
            <label>
                Пароль
                 <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}>

                </input>
            </label>
            <button type="submit">Войти</button>
        </form>

    </div>
    )

}