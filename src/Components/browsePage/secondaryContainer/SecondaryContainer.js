import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const { nowPlayingMovies } = useSelector(store => store.movies);
  if (!nowPlayingMovies) return
  return (
    <div className="bg-black">
      <div className="-mt-44  pl-4 md:pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={nowPlayingMovies}/>
        <MovieList title={"Upcoming"} movies={nowPlayingMovies}/>
        <MovieList title={"Top Rated"} movies={nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer