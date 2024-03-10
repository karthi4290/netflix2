import { useEffect, useState } from "react";
import { POSTERPATH_URL, TMDB_OPTIONS, TRAILER_URL, YOUTUBE_URL } from "../../../utils/constants";
import { FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerCard } from '../../../utils/reduxStore/tmdbSlice';


const Moviecard = ({ handlePlayCard, movieId, posterPath }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" w-36 md:w-[260px] p-1 inline-block cursor-pointer hover:scale-110 ease-in-out duration-300"
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => {
        setIsHovered(false)
       
      }}
    >
        <img className="rounded-md" alt="movieCard" src={POSTERPATH_URL + posterPath} />
        {isHovered &&
          <button onClick={() => handlePlayCard(movieId)} className="absolute inset-0 flex items-center justify-center">
            <FaPlay color="white" size={40} />
          </button>}
     

    </div>



  )
}

export default Moviecard