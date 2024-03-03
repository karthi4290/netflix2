import { useEffect, useRef, useState } from 'react';
import Moviecard from './Moviecard';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const MovieList = ({ movies, title }) => {
  const [isScrollLeft, setIsScrollLeft] = useState(false);
  const [isScrollRight, setIsScrollRight] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const sliderCurrentRef = sliderRef.current;
    const handleScroll = () => {
      setIsScrollLeft(sliderCurrentRef.scrollLeft > 0);
      setIsScrollRight(sliderCurrentRef.scrollLeft + sliderCurrentRef.offsetWidth < sliderCurrentRef.scrollWidth);
    }

    sliderCurrentRef.addEventListener('scroll', handleScroll);

    return (() => sliderCurrentRef.removeEventListener('scroll', handleScroll));
  }, [])




  const handleNavigation = (direction) => {
    const sliderCurrentRef = sliderRef.current;
    const scrollAmount = sliderCurrentRef.offsetWidth;
    console.log(scrollAmount)
    if (direction === "left") {
      sliderCurrentRef.scrollLeft -= scrollAmount;
    } else {
      sliderCurrentRef.scrollLeft += scrollAmount;
    }
  }

  return (
    <div className="p-5 relative ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      {isScrollLeft && <MdChevronLeft
        onClick={() => handleNavigation('left')}
        className="cursor-pointer bg-gray-300 opacity-50 hover:opacity-100 absolute top-1/2 left-0 transform -translate-y-1/2 z-10"
        size={40}
      />}
      <div ref={sliderRef} id="slider" className="w-full h-full  overflow-x-hidden overscroll-x-scroll scroll whitespace-nowrap scroll-smooth relative">
        {movies?.map((movie) => (
          <Moviecard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
      {isScrollRight && <MdChevronRight
        onClick={() => handleNavigation('right')}
        className="cursor-pointer bg-gray-300 opacity-50 hover:opacity-100 absolute top-1/2 right-3 transform -translate-y-1/2 z-10"
        size={40}
      />}

    </div>
  )
}

export default MovieList