import VideoPlayer from "../utils/reactPlayer";
import { FaPlay } from "react-icons/fa";
import { CiPause1 } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Popup = ({ trailerId, isVideoPopUpPlaying, getTrailerDetails, handlePause, handlePlay, handleClose }) => {
    return (
        <div className="z-50 transition duration-300 bg-black bg-opacity-85 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
            <div className="relative w-[35%]  rounded-3xl overflow-hidden">
                <div className="scale-100 transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md">
                    <div className="relative">
                        <VideoPlayer trailerId={trailerId} playing={isVideoPopUpPlaying} height={"400px"} />
                        <div className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full text-white bg-black bg-opacity-80 flex items-center justify-center">
                            <IoMdClose onClick={handleClose} />
                        </div>
                        <div className="absolute bottom-[10%] bg-red-700 left-10">
                            <div className="flex flex-row gap-4 items-center">
                                <button>{isVideoPopUpPlaying ? <CiPause1 onClick={handlePause} /> : <FaPlay onClick={handlePlay} />}</button>
                            </div>
                        </div>
                    </div>
                    <div className="px-12 py-8 ">
                        <div className="px-12 py-8 ">
                            <h1 className=" text-1xl md:text-4xl font-bold text-white ">{getTrailerDetails.title}</h1>
                            <p className="text-white text-base text-wrap mt-3 ">{getTrailerDetails.overview}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup