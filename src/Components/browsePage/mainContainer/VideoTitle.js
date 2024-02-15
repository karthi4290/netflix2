import { useSelector } from "react-redux";
import MoreInfoPopUp from "../../MoreInfoPopUp";


const VideoTitle = ({ handlePlayFullScreen, handlePause, handleMoreInfo, handlePlay, handleClose }) => {
  const { isPlaying, isMoreInfo } = useSelector(store => store.config);
  const { getTrailerDetails } = useSelector(store => store.movies);
  if (!getTrailerDetails) return
 
  return (
    <div className="text-white absolute px-56 top-[28%]">
      <h1 className=" text-2xl md:text-6xl font-bold ">{getTrailerDetails.title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{getTrailerDetails.overview}</p>
      <div className="my-4 md:m-0">
        {!isPlaying && <button onClick={handlePlayFullScreen} className=" bg-white text-black py-1 md:py-3 px-3 md:px-12 text-sm md:text-xl rounded-sm  md:rounded-lg hover:bg-opacity-50">Play</button>}
        {isPlaying && <button onClick={handlePause} className=" bg-white text-black py-1 md:py-3 px-3 md:px-12 text-sm md:text-xl rounded-sm  md:rounded-lg hover:bg-opacity-50"> Pause</button>}

        <button onClick={handleMoreInfo} className="hidden md:inline-block mx-2 bg-gray-600 text-white p-3 px-12 text-xl bg-opacity-40 rounded-lg hover:bg-opacity-80">More Info</button>
        {isMoreInfo && <MoreInfoPopUp handlePause={handlePause} handlePlay={handlePlay} handleClose={handleClose} />}
      </div>
    </div>
  )
}

export default VideoTitle