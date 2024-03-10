import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        getTrailerDetails:null,
        getTrailer: null,
        getTrailerCardKey:null,
        getPopular: null,
        getUpcoming: null,
        getTopRated: null
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailer: (state, action) => {
            state.getTrailer = action.payload;
        },
        addTrailerCard: (state, action) => {
            state.getTrailerCardKey = action.payload;
        },
        addTrailerDetails: (state, action) => {
            state.getTrailerDetails = action.payload;
        },
        addPopular: (state, action) => {
            state.getPopular = action.payload
        },
        addUpcoming: (state, action) => {
            state.getUpcoming = action.payload
        },
        addTopRated: (state, action) => {
            state.getTopRated = action.payload
        }
    }
});

export default movieSlice.reducer;
export const { addNowPlaying, addTrailer, addTrailerCard, addPopular, addUpcoming, addTopRated, addTrailerDetails } = movieSlice.actions;