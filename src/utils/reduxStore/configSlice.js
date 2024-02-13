import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        isPlaying: false,
        isMoreInfo: false,
        isVideoPopUpPlaying: true
    },
    reducers: {
        setIsPlaying: (state, action) => {
            state.isPlaying = action.payload
        },
        setMoreInfo: (state, action) => {
            state.isMoreInfo = action.payload
        },
        setIsVideoPopUpPlaying: (state, action) => {
            state.isVideoPopUpPlaying = action.payload
        }
    }
});


export default configSlice.reducer;
export const { setIsPlaying, setMoreInfo, setIsVideoPopUpPlaying } = configSlice.actions;