import { useState } from "react";
import { POSTERPATH_URL } from "../../../utils/constants";
import { FaPlay } from "react-icons/fa";


const Moviecard = ({ posterPath }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" w-36 md:w-[260px] p-1 inline-block cursor-pointer hover:scale-110 ease-in-out duration-300"
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {isHovered &&
          <div className="absolute inset-0 flex items-center justify-center">
            <FaPlay color="white" size={40} />
          </div>}
        <img className="rounded-md" alt="movieCard" src={POSTERPATH_URL + posterPath} />
      </div>

    </div>

  )
}

export default Moviecard