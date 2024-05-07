import { useState } from "react";
import { POSTERPATH_URL } from "../../../utils/constants";
import { FaPlay } from "react-icons/fa";
import Popup from "../../Popup";
import useTrailer from "../../../hooks/useTrailer";
import { useSelector } from "react-redux";



const Moviecard = ({ posterPath, movieId }) => {
  const [isPlayCard, setIsPlayCard] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [movieDetails, setMovieDetails] = useState([]);
  const movies = useSelector(store => store.movies);
  const trailerId = movies.getTrailer;
  const { fetchBGTrailerId } = useTrailer();
  const handleClose = () => {
    setIsPlayCard(false);
  }

  const fetchTrailerId = async (movieId) => {
    fetchBGTrailerId(movieId)
  }



  const handlePlayCard = async (movieId) => {
    await fetchTrailerId(movieId);
    const { title, overview } = movies.nowPlayingMovies.find(movie => movie.id === movieId);
    setMovieDetails({ title: title, overview: overview });
    setIsPlayCard(true);

  }

  return (
    <div>
      {isPlayCard &&
        <Popup
          trailerId={trailerId}
          isVideoPopUpPlaying={isPlayCard}
          getTrailerDetails={movieDetails}
          handleClose={handleClose}
        />}
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

    </div>

  )
}

export default Moviecard