import { useDispatch, useSelector } from 'react-redux';
import { NOWPLAYING_URL, TMDB_OPTIONS, TRAILER_URL } from '../utils/constants';
import { addNowPlaying, addTrailer } from '../utils/reduxStore/tmdbSlice';
import { setIsPlaying, setIsVideoPopUpPlaying, setMoreInfo } from '../utils/reduxStore/configSlice';

const useTrailer = () => {
    const dispatch = useDispatch();
    const { isMoreInfo } = useSelector(store => store.config)

    const fetchBGTrailerId = async (movieId) => {
        const response = await fetch(TRAILER_URL + movieId + "/videos?language =en-US", TMDB_OPTIONS);
        const data = await response.json()
        const filterData = data.results.filter((result) => result.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : data.results[0];
        dispatch(addTrailer(trailer.key));

    }
    const handleFetchNowPlaying = async () => {
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
            dispatch(setIsPlaying(true))
            player.requestFullscreen();
        }
    }

    const handlePlay = () => {
        dispatch(setIsVideoPopUpPlaying(true));

    }
    const handlePause = () => {
        dispatch(setIsPlaying(false));
        dispatch(setIsVideoPopUpPlaying(false));
    }
    const handleClose = () => {
        dispatch(setMoreInfo(!isMoreInfo))
        dispatch(setIsVideoPopUpPlaying(false));
    }

    const handleMoreInfo = () => {

        dispatch(setMoreInfo(!isMoreInfo))
        dispatch(setIsVideoPopUpPlaying(true));
    }

    return {
        handleFetchNowPlaying,
        handlePlayFullScreen,
        handlePause,
        handleMoreInfo,
        handlePlay,
        handleClose
    }


}


export default useTrailer;