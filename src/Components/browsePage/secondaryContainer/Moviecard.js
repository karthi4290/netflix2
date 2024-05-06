import { useState } from "react";
import { POSTERPATH_URL, TMDB_OPTIONS, TRAILER_URL } from "../../../utils/constants";
import { FaPlay } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerCard } from '../../../utils/reduxStore/tmdbSlice';
import Popup from "../../Popup";



const Moviecard = ({ posterPath, movieId }) => {
  const [isPlayCard, setIsPlayCard] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [movieDetails, setMovieDetails] = useState([]);
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);
  const trailerId = movies.getTrailerCardKey;
  const handleClose = () => {
    setIsPlayCard(false);
  }

  const fetchBGTrailerId = async (movieId) => {
    const response = await fetch(TRAILER_URL + movieId + "/videos?language =en-US", TMDB_OPTIONS);
    const data = await response.json();
    const filterData = data.results.filter((result) => result.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : data.results[0];
    dispatch(addTrailerCard(trailer.key));
  }



  const handlePlayCard = async (movieId) => {
    await fetchBGTrailerId(movieId);
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