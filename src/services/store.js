import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user/userSlice'

const store = configureStore({
    reducer:{
        // Multiple reducers add here
        user: userReducer,
    }
})

export default store;