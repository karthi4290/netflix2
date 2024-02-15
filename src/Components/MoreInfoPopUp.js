import { YOUTUBE_URL } from '../utils/constants';
import ReactPlayer from 'react-player';
import { FaPlay } from "react-icons/fa";
import { CiPause1 } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useSelector } from 'react-redux';


const MoreInfoPopUp = ({ handlePause, handlePlay, handleClose }) => {
    const { isVideoPopUpPlaying } = useSelector(store => store.config);
    const { getTrailerDetails } = useSelector(store => store.movies);
    const trailerId = useSelector(store => store.movies.getTrailer);
    
  
    return (
        <div className="z-50 transition duration-300 bg-black bg-opacity-85 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
            <div className="relative w-[50%]  rounded-md overflow-hidden">
                <div className="scale-100 transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md">
                    <div className="relative">
                        <ReactPlayer
                            url={`${YOUTUBE_URL}${trailerId}?si=${trailerId}`}
                            width="100%"
                            playing={isVideoPopUpPlaying}
                            config={{
                                youtube: {
                                    playerVars: {
                                        quality: 'hd1440p',
                                    },
                                },
                            }}
                        />
                        <div className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-80 flex items-center justify-center">
                            <IoMdClose onClick={handleClose} />
                        </div>
                        <div className="absolute bottom-[10%] left-10">
                            <div className="flex flex-row gap-4 items-center">
                                <button>{isVideoPopUpPlaying ? <CiPause1 onClick={handlePause} /> : <FaPlay onClick={handlePlay} />}</button>
                            </div>
                        </div>
                    </div>
                    <div className="px-12 py-8 ">
                        <h1 className=" text-2xl md:text-6xl font-bold ">{getTrailerDetails.title}</h1>
                        <p className="text-white text-lg mt-3">{getTrailerDetails.overview}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreInfoPopUp