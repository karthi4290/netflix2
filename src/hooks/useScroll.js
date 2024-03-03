import { useEffect, useRef, useState } from 'react';

const useScroll = () => {
    const [isScrollLeft, setIsScrollLeft] = useState(false);
    const [isScrollRight, setIsScrollRight] = useState(true);
    const sliderRef = useRef(null);



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

    useEffect(() => {
      const sliderCurrentRef = sliderRef.current;
      const handleScroll = () => {
        setIsScrollLeft(sliderCurrentRef.scrollLeft > 0);
        setIsScrollRight(sliderCurrentRef.scrollLeft + sliderCurrentRef.offsetWidth < sliderCurrentRef.scrollWidth);
      }

      sliderCurrentRef.addEventListener('scroll', handleScroll);

      return (() => sliderCurrentRef.removeEventListener('scroll', handleScroll));
    }, [])

    return {
        handleNavigation,
        isScrollLeft,
        isScrollRight,
        sliderRef

    }

}

export default useScroll;