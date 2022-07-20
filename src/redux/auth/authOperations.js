import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = ''
    }

}
console.log(token);

//Регистрация пользователя
const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        token.set(data.token);
        return data;
    } catch (error) { console.log(error.message) }
}
);
//Логинизация пользователя
const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        token.set(data.token);
        return data;
    } catch (error) { console.log(error.message) }
}
);
//Выход из профиля
const logOut = createAsyncThunk('auth/logout', async credentials => {
    try {
        await axios.post('/users/logout', credentials);
        token.unset('');
    } catch (error) { console.log(error.message) }
}
);

const fetchCurrentUser = createAsyncThunk('auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;
        
        if (persistedToken === null) {
            return thunkAPI.rejectWithValue();
        }
        token.set(persistedToken);
        try {
            const { data } = await axios.get('/users/current');
            return data;
        } catch (error) { console.log(error.message) };
    }

)

const authOperation = {
    register,
    logIn,
    logOut,
    fetchCurrentUser,
}
export default authOperation;