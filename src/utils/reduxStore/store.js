import { configureStore } from "@reduxjs/toolkit";
import userReducer from './../reduxStore/userSlice';
import tmdbReducer from './../reduxStore/tmdbSlice';
import configReducer from './../reduxStore/configSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        movies: tmdbReducer,
        config: configReducer
    }
});

export default store;