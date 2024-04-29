import { useState } from "react";
import { POSTERPATH_URL, TMDB_OPTIONS, TRAILER_URL, YOUTUBE_URL } from "../../../utils/constants";
import { FaPlay } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerCard } from '../../../utils/reduxStore/tmdbSlice';



const Moviecard = ({ posterPath, movieId }) => {
  const [isPlayCard, setIsPlayCard] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [movieDetails,setMovieDetails] = useState([]);
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
     const {title,overview} = movies.nowPlayingMovies.find(movie=>movie.id===movieId);
    setMovieDetails({title: title,overview:overview} );
    setIsPlayCard(true);

  }

  return (
<div>
    { isPlayCard &&
    <div className="z-50 transition duration-300 bg-black bg-opacity-55 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
      <div className="relative w-[35%]  rounded-3xl overflow-hidden">
        <div className="scale-100 transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md">
          <div className="relative">
            <ReactPlayer
              url={`${YOUTUBE_URL}${trailerId}?si=${trailerId}`}
              width="100%"
              height={"400px"}
              playing={true}
              config={{
                youtube: {
                  playerVars: {
                    quality: 'hd1440p',
                  },
                },
              }}
            />
            <div className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full text-white bg-black bg-opacity-80 flex items-center justify-center">
              <IoMdClose onClick={handleClose} />
            </div>
          </div>
          <div className="px-12 py-8 ">
                <h1 className=" text-1xl md:text-4xl font-bold text-white ">{movieDetails.title}</h1>
                <p className="text-white text-base text-wrap mt-3 ">{movieDetails.overview}</p>
          </div>
        </div>
      </div>
    </div>
        
        }
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