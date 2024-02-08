import { configureStore } from "@reduxjs/toolkit";
import userReducer from './../reduxStore/userSlice';
import tmdbReducer from './../reduxStore/tmdbSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        movies: tmdbReducer
    }
});

export default store;