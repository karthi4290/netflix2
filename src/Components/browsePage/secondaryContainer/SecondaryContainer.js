import { useSelector } from 'react-redux';
import MovieList from './MovieList';


const SecondaryContainer = () => {
  const { nowPlayingMovies } = useSelector(store => store.movies);
  if (!nowPlayingMovies) return

  return (
    <div className="bg-black">
      <div className="-mt-36  pl-4 md:pl-8 relative ">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Popular"} movies={nowPlayingMovies} />
        <MovieList title={"Upcoming"} movies={nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={nowPlayingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer