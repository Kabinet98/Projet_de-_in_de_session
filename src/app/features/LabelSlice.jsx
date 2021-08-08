import {createSlice} from '@reduxjs/toolkit';
const labelSlice = createSlice({
    name:"label",
    initialState:{
        label:""
    },
    reducers:{
        changeLabel: (state, action) =>{
            return {
                ...state,
                label: action.payload.label
            }
        }
    }
})
export const  {changeLabel} = labelSlice.actions;
export const labelSelector = (state) => state.label.label;
const labelReducer = labelSlice.reducer;
export default labelReducer;