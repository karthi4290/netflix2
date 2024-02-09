import ReactPlayer from 'react-player';
import { YOUTUBE_URL } from '../../../utils/constants';

const VideoBackGround = ({ isPlaying, trailerId }) => {


  return (
    <div className="pl-14 bg-black h-[90vh]">
      <ReactPlayer
        className="react-player"
        url={`${YOUTUBE_URL}${trailerId}?si=${trailerId}`}
        width="100%"
        height="100%"
        playing={isPlaying}
        config={{
          youtube: {
            playerVars: {
              quality: 'hd1440p',
            },
          },
        }}
      />
    </div>
  )
}

export default VideoBackGround