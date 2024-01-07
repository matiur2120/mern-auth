import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    currentUser: null,
    loading: false,
    error: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state)=>{
            state.loading = true
            state.error = false
        },
        signInSuccess: (state, action) =>{
            state.loading = false;
            state.error = false;
            state.currentUser = action.payload;
        },
        signInFailed: (state, action)=>{
            state.loading = false;
            state.error = action.payload;
            state.currentUser = null;
        }
    }
})

export const {signInFailed, signInStart, signInSuccess} = userSlice.actions;
export default userSlice.reducer;