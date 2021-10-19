import {createSlice} from '@reduxjs/toolkit';

const initialAuthState={
    token:sessionStorage.getItem('token'),
    isLoggedIn:token===null
}

const authSlice=createSlice({
    name:"auth",
    initialState:initialAuthState,
    reducers:{
        login(state,action){
            state.token=action.payload
            sessionStorage.setItem('token',state.token);
        },
        logout(state){
            sessionStorage.removeItem('token');
        }
    }
})

export const authActions=authSlice.actions;

export default authSlice.reducer;