import { configureStore } from "@reduxjs/toolkit";
import userReducer from './../reduxStore/userSlice';

const store = configureStore({
    reducer: {
        user: userReducer
    }
})

export default store;