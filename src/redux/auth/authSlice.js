import { createSlice } from '@reduxjs/toolkit';
import authOperation from './authOperations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isFetchingCurrentUser: false,


}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authOperation.register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [authOperation.logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [authOperation.logOut.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [authOperation.fetchCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            // state.isFetchingCurrentUser = false;
        }




    }



}

)
export default authSlice.reducer;