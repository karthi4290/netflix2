import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NOWPLAYING_URL, TMDB_OPTIONS, TRAILER_URL } from '../utils/constants';
import { addNowPlaying, addTrailer } from '../utils/reduxStore/tmdbSlice';

const useTrailer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMoreInfo, setIsMoreInfo] = useState(false);
    const [isvideoPlay, setIsVideoPlay] = useState(true);
    const dispatch = useDispatch();
    const trailerId = useSelector(store => store.movies.getTrailer);
    const trailerDescription = useSelector(store => store.movies.nowPlayingMovies);

    const fetchBGTrailerId = async (movieId) => {
        const response = await fetch(TRAILER_URL + movieId + "/videos?language =en-US", TMDB_OPTIONS);
        const data = await response.json()
        const filterData = data.results.filter((result) => result.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : data.results[0];
        dispatch(addTrailer(trailer.key));

    }
    const fetchNowPlaying = async () => {
        try {
            const response = await fetch(NOWPLAYING_URL, TMDB_OPTIONS);
            const data = await response.json();
            const moviesList = data.results;
            const randomIndex = Math.floor(Math.random() * moviesList.length);
            const movieResult = moviesList[randomIndex];
            dispatch(addNowPlaying(movieResult));

            await fetchBGTrailerId(movieResult.id);

        } catch (error) {
            console.log(error)
        }
    }

    const handlePlayFullScreen = () => {
        const player = document.getElementsByClassName('react-player')[0];
        if (player) {
            setIsPlaying(true);
            player.requestFullscreen();
        }
    }

    const handlePlay = () => {
        setIsVideoPlay(true);
    }
    const handlePause = () => {
        setIsPlaying(false);
        setIsVideoPlay(false);
    }
    const handleClose = () => {
        setIsMoreInfo(!isMoreInfo);
        setIsVideoPlay(false);
    }

    const handleMoreInfo = () => {
        setIsMoreInfo(!isMoreInfo);
        setIsVideoPlay(true);
    }

    return {
        isPlaying,
        trailerId,
        trailerDescription,
        fetchNowPlaying,
        handlePlayFullScreen,
        handlePause,
        isMoreInfo,
        handleMoreInfo,
        isvideoPlay,
        handlePlay,
        handleClose
    }


}


export default useTrailer