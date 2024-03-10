import { useDispatch, useSelector } from 'react-redux';
import MovieList from './MovieList';
import { TMDB_OPTIONS, TRAILER_URL, YOUTUBE_URL } from '../../../utils/constants';
import ReactPlayer from 'react-player';
import { useState } from 'react';
import { addTrailerCard } from '../../../utils/reduxStore/tmdbSlice';
import { IoMdClose } from "react-icons/io";

const SecondaryContainer = () => {
  const dispatch = useDispatch();
  const [isPlayCard, setIsPlayCard] = useState(false);
  const { nowPlayingMovies } = useSelector(store => store.movies);
  const movies = useSelector(store => store.movies)
  const trailerId = movies.getTrailerCardKey;
  if (!nowPlayingMovies) return

  const handleClose = () => {
    setIsPlayCard(false);
  }

  const fetchBGTrailerId = async (movieId) => {
    const response = await fetch(TRAILER_URL + movieId + "/videos?language =en-US", TMDB_OPTIONS);
    const data = await response.json()
    const filterData = data.results.filter((result) => result.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : data.results[0];
    dispatch(addTrailerCard(trailer.key));

  }
  const handlePlayCard = async (movieId) => {
    await fetchBGTrailerId(movieId);
    setIsPlayCard(true);

  }
  return (
    <div className="bg-black">
      {isPlayCard && 
        <div className="z-50 transition duration-300 bg-black bg-opacity-55 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
          <div className="relative w-[50%]  rounded-md overflow-hidden">
            <div className="scale-100 transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md">
              <div className="relative">
                <ReactPlayer
                  url={`${YOUTUBE_URL}${trailerId}?si=${trailerId}`}
                  width="100%"
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
                  <IoMdClose onClick={handleClose}/>
                </div>
                <div className="absolute bottom-[10%] left-10">
                  <div className="flex flex-row gap-4 items-center">
                    <button className='text-white'>play</button>
                  </div>
                </div>
              </div>
              <div className="px-12 py-8 ">
                <h1 className=" text-2xl md:text-6xl font-bold ">title</h1>
                <p className="text-white text-lg mt-3">overview</p>

              </div>
            </div>
          </div>
        </div>
        
        }
      <div className="-mt-36  pl-4 md:pl-8 relative ">
        <MovieList handlePlayCard={handlePlayCard} title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList handlePlayCard={handlePlayCard} title={"Popular"} movies={nowPlayingMovies} />
        <MovieList handlePlayCard={handlePlayCard} title={"Upcoming"} movies={nowPlayingMovies} />
        <MovieList handlePlayCard={handlePlayCard} title={"Top Rated"} movies={nowPlayingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer