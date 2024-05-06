import { useSelector } from 'react-redux';
import Popup from "./Popup";


const MoreInfoPopUp = ({ handlePause, handlePlay, handleClose }) => {
    const { isVideoPopUpPlaying } = useSelector(store => store.config);
    const { getTrailerDetails } = useSelector(store => store.movies);
    const trailerId = useSelector(store => store.movies.getTrailer);

    return (
        <>
            <Popup
                trailerId={trailerId}
                isVideoPopUpPlaying={isVideoPopUpPlaying}
                getTrailerDetails={getTrailerDetails}
                handlePause={handlePause}
                handlePlay={handlePlay}
                handleClose={handleClose}
            />

        </>
    )
}

export default MoreInfoPopUp