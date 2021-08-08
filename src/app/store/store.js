import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../features/UserSlice";
import downloadListReducer from "../features/DownloadLaterSlice"
import labelReducer from '../features/LabelSlice';
const store = configureStore({
    reducer:{
        user: userReducer,
        download: downloadListReducer,
        label:labelReducer
    }
})
export default store;