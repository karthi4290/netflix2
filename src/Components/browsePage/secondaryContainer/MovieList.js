import Moviecard from './Moviecard';

const MovieList = ({ movies,title }) => {


  return (
    <div className="p-6 relative ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div id="slider" className="w-full h-full  overflow-x-hidden overscroll-x-scroll scroll whitespace-nowrap scroll-smooth relative">
        {movies?.map((movie) => (
          <Moviecard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
      
    </div>
  )
}

export default MovieList