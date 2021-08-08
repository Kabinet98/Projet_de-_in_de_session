import {createSlice} from "@reduxjs/toolkit"
const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null
    },
    reducers:{
        login: (state, action) =>{
            return {...state, user: action.payload}
        },
        logout:(state) =>{
            return {...state, user:null}
        }
    }

})
const userReducer = userSlice.reducer;
export const userSelector = (state) => state.user.user;
export const {login, logout} = userSlice.actions;
export default userReducer;
