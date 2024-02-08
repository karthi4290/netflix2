import ReactPlayer from 'react-player';
import { YOUTUBE_URL } from '../../../utils/constants';
import useTrailer from '../../../hooks/useTrailer';

const VideoBackGround = () => {
  const {
    isPlaying,
    trailerId,
  } = useTrailer();

  return (
    <div className="pl-14 bg-black h-[90vh]">
      <ReactPlayer
        className="react-player"
        url={`${YOUTUBE_URL}${trailerId}?si=${trailerId}`}
        width="100%"
        height="100%"
        playing={isPlaying}  
      />
    </div>
  )
}

export default VideoBackGround