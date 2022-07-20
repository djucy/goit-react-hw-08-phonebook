import { useState } from "react";
import { useDispatch } from 'react-redux';
import { authOperation } from 'redux/auth';

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

    }

    return (
        <div>
            <h1>Зарегистрируйтесь, пожалуйста!</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input type="name"
                        name="name"
                        value={name} onChange={handleChange}>

                    </input>

                </label>
                <label >
                    Email
                    <input type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}></input>
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}></input>
                </label>
                <button type="submit">Register</button>
            </form>
            <p>RegisterView</p>
        </div>
    )
}